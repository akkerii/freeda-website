/**
 * Push content from mock data to Prismic
 *
 * Usage:
 * 1. Get a Write API token from Prismic (Settings > API & Security > Generate a token)
 * 2. Set PRISMIC_WRITE_TOKEN in your .env.local
 * 3. Run: npx ts-node scripts/push-to-prismic.ts
 */

import * as prismic from "@prismicio/client";
import { homepageSlices } from "../src/mocks/homepage";

const REPOSITORY_NAME = "perso-homepage";
const WRITE_TOKEN = process.env.PRISMIC_WRITE_TOKEN;

if (!WRITE_TOKEN) {
  console.error("Error: PRISMIC_WRITE_TOKEN not set");
  console.log("\nTo get a token:");
  console.log("1. Go to https://perso-homepage.prismic.io/settings/apps/");
  console.log("2. Generate a Permanent Access Token with write access");
  console.log("3. Add to .env.local: PRISMIC_WRITE_TOKEN=your_token");
  process.exit(1);
}

async function pushToPrismic() {
  const writeClient = prismic.createWriteClient(REPOSITORY_NAME, {
    writeToken: WRITE_TOKEN,
  });

  const migration = prismic.createMigration();

  // Create or update homepage document
  migration.createDocumentFromPrismic(
    {
      type: "homepage",
      uid: "homepage",
      lang: "en-us",
      data: {
        slices: homepageSlices,
      },
    },
    "Homepage"
  );

  console.log("Pushing content to Prismic...");

  try {
    await writeClient.migrate(migration, {
      reporter: (event) => console.log(event),
    });
    console.log("✓ Content pushed successfully!");
  } catch (error) {
    console.error("Error pushing to Prismic:", error);
  }
}

pushToPrismic();
