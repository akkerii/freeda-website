import { createClient } from "@/prismicio";
import GlobalPresence from "./index";
import type { Content } from "@prismicio/client";

/**
 * HomeLinkedGlobalPresence
 *
 * This component fetches the GlobalPresence slice data from the homepage
 * and renders it. This ensures that when you update GlobalPresence on the homepage,
 * it automatically updates on all other pages.
 */
export default async function HomeLinkedGlobalPresence() {
  const client = createClient();

  try {
    const homepage = await client.getSingle("homepage");

    // Find the GlobalPresence slice in the homepage
    const globalPresenceSlice = homepage.data.slices?.find(
      (slice) => slice.slice_type === "global_presence"
    ) as Content.GlobalPresenceSlice | undefined;

    if (globalPresenceSlice) {
      // Render the GlobalPresence component with homepage data
      return <GlobalPresence slice={globalPresenceSlice} index={0} slices={[globalPresenceSlice]} context={{}} />;
    }

    return null;
  } catch (error) {
    console.warn("HomeLinkedGlobalPresence: Could not fetch from homepage", error);
    return null;
  }
}
