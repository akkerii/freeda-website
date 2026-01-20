import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
const routes: prismic.ClientConfig["routes"] = [
  { type: "homepage", path: "/" },
  { type: "use_cases_page", path: "/use-cases" },
  { type: "working_page", path: "/working-with-freeda" },
  { type: "resources_page", path: "/resources" },
  { type: "project_page", path: "/project" },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * fetch content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (clientConfig: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...clientConfig,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};
