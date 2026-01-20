// Resources page mock data

export const resourcesSlices = [
  // ============ RESOURCES HERO ============
  {
    slice_type: "resources_hero",
    slice_label: null,
    id: "resources_hero_1",
    variation: "default",
    version: "initial",
    primary: {
      logo_text: "Freeda.",
      title: "Ressources",
      button_text: "Another button",
      button_link: { url: "#contact" },
    },
    items: [
      { nav_text: "Use Cases", nav_link: { url: "/use-cases" } },
      { nav_text: "Working with Freeda", nav_link: { url: "/working-with-freeda" } },
      { nav_text: "Resources", nav_link: { url: "/resources" } },
    ],
  },

  // ============ SHORT VIDEO SECTION ============
  {
    slice_type: "short_video",
    slice_label: null,
    id: "short_video_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "Short Video",
      items: [
        {
          image: { url: "", alt: "Accessibility Video" },
          card_title: "Accessibility (PMR)",
          application: [
            { type: "paragraph", text: "Detect accessibility non-compliances early, before permits or construction.", spans: [] },
          ],
          documents: [
            { type: "paragraph", text: "Plans (PDF), technical notices, regulations.", spans: [] },
          ],
        },
        {
          image: { url: "", alt: "Real Estate" },
          card_title: "Real estate programmes",
          application: [
            { type: "paragraph", text: "Ensure consistency and compliance across large, multi-phase developments.", spans: [] },
          ],
          documents: [
            { type: "paragraph", text: "Plans, CCTP, specifications, internal guidelines.", spans: [] },
          ],
        },
        {
          image: { url: "", alt: "CCTP Analysis" },
          card_title: "CCTP analysis",
          application: [
            { type: "paragraph", text: "Identify contradictions, missing requirements and unclear scopes.", spans: [] },
          ],
          documents: [
            { type: "paragraph", text: "CCTP, plans, technical notices.", spans: [] },
          ],
        },
      ],
    },
  },

  // ============ ARTICLES SECTION ============
  {
    slice_type: "articles",
    slice_label: null,
    id: "articles_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "Articles",
      items: [
        {
          image: { url: "", alt: "Accessibility Article" },
          card_title: "Accessibility (PMR)",
          application: [
            { type: "paragraph", text: "Detect accessibility non-compliances early, before permits or construction.", spans: [] },
          ],
          documents: [
            { type: "paragraph", text: "Plans (PDF), technical notices, regulations.", spans: [] },
          ],
        },
        {
          image: { url: "", alt: "Real Estate Article" },
          card_title: "Real estate programmes",
          application: [
            { type: "paragraph", text: "Ensure consistency and compliance across large, multi-phase developments.", spans: [] },
          ],
          documents: [
            { type: "paragraph", text: "Plans, CCTP, specifications, internal guidelines.", spans: [] },
          ],
        },
        {
          image: { url: "", alt: "CCTP Article" },
          card_title: "CCTP analysis",
          application: [
            { type: "paragraph", text: "Identify contradictions, missing requirements and unclear scopes.", spans: [] },
          ],
          documents: [
            { type: "paragraph", text: "CCTP, plans, technical notices.", spans: [] },
          ],
        },
      ],
    },
  },

  // ============ NEWSROOM SECTION ============
  {
    slice_type: "newsroom",
    slice_label: null,
    id: "newsroom_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "Newsroom",
      items: [
        {
          image: { url: "", alt: "Accessibility News" },
          card_title: "Accessibility (PMR)",
          application: [
            { type: "paragraph", text: "Detect accessibility non-compliances early, before permits or construction.", spans: [] },
          ],
          documents: [
            { type: "paragraph", text: "Plans (PDF), technical notices, regulations.", spans: [] },
          ],
        },
        {
          image: { url: "", alt: "Real Estate News" },
          card_title: "Real estate programmes",
          application: [
            { type: "paragraph", text: "Ensure consistency and compliance across large, multi-phase developments.", spans: [] },
          ],
          documents: [
            { type: "paragraph", text: "Plans, CCTP, specifications, internal guidelines.", spans: [] },
          ],
        },
        {
          image: { url: "", alt: "CCTP News" },
          card_title: "CCTP analysis",
          application: [
            { type: "paragraph", text: "Identify contradictions, missing requirements and unclear scopes.", spans: [] },
          ],
          documents: [
            { type: "paragraph", text: "CCTP, plans, technical notices.", spans: [] },
          ],
        },
      ],
    },
  },

  // ============ JOIN US SECTION ============
  {
    slice_type: "join_us",
    slice_label: null,
    id: "join_us_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "Join us",
      image_1: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33642609-dfd2-495c-97dd-6121630e768d",
        alt: "Team Image 1",
        dimensions: { width: 525, height: 432 },
      },
      image_2: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ae9b703-c600-3722-e83c-3bd724fa7f77",
        alt: "Team Image 2",
        dimensions: { width: 343, height: 432 },
      },
      card_title: "Explain the idea",
      card_description:
        "Writing for websites is both simple and complex. On the one hand, all you need to do is say what you mean and in your words.",
      button_text: "→ Join us",
      button_link: { link_type: "Web", url: "#join" },
    },
    items: [],
  },

  // ============ GLOBAL PRESENCE ============
  {
    slice_type: "global_presence",
    slice_label: null,
    id: "global_presence_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "Global presence, local context",
      subtitle:
        "Trusted by clients across Europe, North America, and the Middle East",
      map_image: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67f2b360-7302-4934-8b93-f09e08a68662",
        alt: "World Map with Location Markers",
        dimensions: { width: 1512, height: 593 },
      },
      card_title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      card_description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
      card_image: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ea7cde2-69ef-45e7-91e1-1c71db0f8c2a",
        alt: "Location Image",
        dimensions: { width: 343, height: 178 },
      },
      button_text: "→ View global presence",
      button_link: { link_type: "Web", url: "#global" },
    },
    items: [],
  },

  // ============ FOOTER ============
  {
    slice_type: "footer",
    slice_label: null,
    id: "footer_1",
    variation: "default",
    version: "initial",
    primary: {
      background_image: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea1811a8-6ca0-4ac2-bc2d-ce9f58506686",
        alt: "Building Background",
        dimensions: { width: 1512, height: 820 },
      },
      partners_title: "Technical Partners & Investors",
      partners_logos: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b689d509-f462-4c9f-b799-1fa039c85cd6",
        alt: "Partner Logos",
        dimensions: { width: 1508, height: 92 },
      },
      company_name: "Freeda",
      description: "Descriptive line about what your company does.",
      social_icons: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/284ce239-affd-4cab-8e09-c031b225e6fa",
        alt: "Social Media Icons",
        dimensions: { width: 120, height: 24 },
      },
    },
    items: [],
  },
];
