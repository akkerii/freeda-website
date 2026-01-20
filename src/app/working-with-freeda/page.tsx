import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "../../../prismicio";
import { workingWithFreedaSlices } from "@/mocks/working-with-freeda";
import Navigation from "@/components/Navigation";

export default async function WorkingWithFreedaPage() {
  let slices;

  try {
    const client = createClient();
    const page = await client.getSingle("working_page");
    slices = page.data.slices;
  } catch {
    slices = workingWithFreedaSlices;
  }

  // Replace any GlobalPresence slices with data from homepage
  const processedSlices = await replaceGlobalPresenceWithHomepage(slices as any[]);

  return (
    <main className="relative">
      <Navigation theme="dark" />
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
