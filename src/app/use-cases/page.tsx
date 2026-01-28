import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "../../../prismicio";
import { caseStudySlices } from "@/mocks/case-study";

export default async function UseCasesPage() {
  const client = createClient();
  const page = await client.getSingle("use_cases_page");

  // Replace GlobalPresence with homepage version and add CaseStudyCards from case study page
  const processedSlices = await processSlicesWithSharedContent(page.data.slices as any[]);

  return (
    <main>
      <SliceZone slices={processedSlices as any} components={components} />
    </main>
  );
}

async function processSlicesWithSharedContent(slices: any[]) {
  if (!slices) return slices;

  const client = createClient();
  let processedSlices = [...slices];

  // 1. Try to replace GlobalPresence with homepage version
  try {
    const homepage = await client.getSingle("homepage");
    const homepageGlobalPresence = homepage.data.slices?.find(
      (slice: any) => slice.slice_type === "global_presence"
    );

    if (homepageGlobalPresence) {
      processedSlices = processedSlices.map((slice: any) =>
        slice.slice_type === "global_presence"
          ? homepageGlobalPresence
          : slice
      );
    }
  } catch {
    // Homepage fetch failed, keep original GlobalPresence
  }

  // 2. Replace CaseStudyCards with data from case study page (respects user's position in Prismic)
  const hasCaseStudyCards = processedSlices.some(
    (slice: any) => slice.slice_type === "case_study_cards"
  );

  if (hasCaseStudyCards) {
    // User added the slice in Prismic - replace its content with case study page data
    let caseStudyCardsData = null;

    try {
      const caseStudyPage = await client.getSingle("case_study_page");
      caseStudyCardsData = caseStudyPage.data.slices?.find(
        (slice: any) => slice.slice_type === "case_study_cards"
      );
    } catch {
      // Case study page might not exist in Prismic
    }

    // Fall back to mock data if not found in Prismic
    if (!caseStudyCardsData) {
      caseStudyCardsData = caseStudySlices.find(
        (slice: any) => slice.slice_type === "case_study_cards"
      );
    }

    // Replace the slice data while keeping its position
    if (caseStudyCardsData) {
      processedSlices = processedSlices.map((slice: any) =>
        slice.slice_type === "case_study_cards"
          ? caseStudyCardsData
          : slice
      );
    }
  }

  return processedSlices;
}
