import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { createClient } from "../../../prismicio";
import { projectPageSlices } from "@/mocks/project";

export default async function ProjectPage() {
  let slices;

  try {
    const client = createClient();
    const page = await client.getSingle("project_page");
    slices = page.data.slices;
  } catch {
    slices = projectPageSlices;
  }

  return (
    <main>
      <SliceZone slices={slices as any} components={components} />
    </main>
  );
}
