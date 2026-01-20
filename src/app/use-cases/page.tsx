import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "../../../prismicio";

export default async function UseCasesPage() {
  const client = createClient();
  const page = await client.getSingle("use_cases_page");

  // Replace GlobalPresence with homepage version
  const processedSlices = await replaceGlobalPresenceWithHomepage(page.data.slices as any[]);

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

    return slices.map((slice: any) =>
      slice.slice_type === "global_presence" ? homepageGlobalPresence : slice
    );
  } catch {
    return slices;
  }
}
