import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "../../../../prismicio";
import CaseStudyPageHero from "../../../../slices/CaseStudyPageHero";
import CaseStudyContent from "../../../../slices/CaseStudyContent";
import Navigation from "@/components/Navigation";
import HomeLinkedGlobalPresence from "../../../../slices/GlobalPresence/HomeLinkedGlobalPresence";

type Params = { uid: string };

export async function generateStaticParams() {
  const client = createClient();

  try {
    const caseStudies = await (client as any).getAllByType("case_study");
    return caseStudies.map((cs: any) => ({ uid: cs.uid }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();

  try {
    const caseStudy = await (client as any).getByUID("case_study", uid);
    return {
      title: caseStudy.data.title || "Case Study",
      description: `Case study: ${caseStudy.data.title}`,
    };
  } catch {
    return {
      title: "Case Study",
    };
  }
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();

  let caseStudy;

  try {
    caseStudy = await (client as any).getByUID("case_study", uid);
  } catch {
    notFound();
  }

  if (!caseStudy) {
    notFound();
  }

  // Find the specific slices from the case study document
  const heroSlice = (caseStudy.data.slices || []).find(
    (slice: any) => slice.slice_type === "case_study_page_hero"
  );
  const contentSlice = (caseStudy.data.slices || []).find(
    (slice: any) => slice.slice_type === "case_study_content"
  );

  // Get all slices from case_study_page (the listing page)
  let caseStudyPageSlices: any[] = [];

  try {
    const caseStudyPage = await (client as any).getSingle("case_study_page");
    caseStudyPageSlices = caseStudyPage.data.slices || [];
  } catch {
    // No case study page
  }

  // Separate slices: hero at top, rest at bottom (excluding individual case study slices)
  const topSlices = caseStudyPageSlices.filter(
    (slice: any) => slice.slice_type === "case_study_hero"
  );
  const bottomSlices = caseStudyPageSlices.filter(
    (slice: any) => !["case_study_hero", "case_study_page_hero", "case_study_content", "global_presence"].includes(slice.slice_type)
  );

  return (
    <main>
      <Navigation theme="dark" />

      {/* Render CaseStudyHero from case_study_page */}
      <SliceZone slices={topSlices} components={components} />

      {/* Render CaseStudyPageHero from individual case study */}
      {heroSlice && (
        <CaseStudyPageHero
          slice={heroSlice}
          index={0}
          slices={caseStudy.data.slices || []}
          context={{}}
        />
      )}

      {/* Render CaseStudyContent from individual case study */}
      {contentSlice && (
        <CaseStudyContent
          slice={contentSlice}
          index={1}
          slices={caseStudy.data.slices || []}
          context={{}}
        />
      )}

      {/* Render GlobalPresence from homepage */}
      <HomeLinkedGlobalPresence />

      {/* Render remaining slices from case_study_page (CaseStudyCards, LogoCloud, Footer, etc.) */}
      <SliceZone slices={bottomSlices} components={components} />
    </main>
  );
}
