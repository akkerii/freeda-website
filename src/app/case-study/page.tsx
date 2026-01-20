import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "../../../prismicio";
import { caseStudySlices } from "@/mocks/case-study";

export default async function CaseStudyPage() {
  let slices;

  try {
    const client = createClient();
    const page = await client.getSingle("case_study_page");
    slices = page.data.slices;
  } catch {
    // Fall back to mock data if Prismic fetch fails
    slices = caseStudySlices;
  }

  // Replace any GlobalPresence slices with data from homepage
  const processedSlices = await replaceGlobalPresenceWithHomepage(slices as any[]);

  return (
    <main>
      <SliceZone slices={processedSlices as any} components={components} />
    </main>
  );
}

async function replaceGlobalPresenceWithHomepage(slices: any[]) {
  if (!slices) return slices;

  const client = createClient();

  try {
    const homepage = await client.getSingle("homepage");
    const homepageGlobalPresence = homepage.data.slices?.find(
      (slice: any) => slice.slice_type === "global_presence"
    );

    if (!homepageGlobalPresence) return slices;

    // Replace all global_presence slices with the one from homepage
    return slices.map((slice: any) =>
      slice.slice_type === "global_presence" ? homepageGlobalPresence : slice
    );
  } catch {
    return slices;
  }
}
