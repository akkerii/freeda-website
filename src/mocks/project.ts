// Project page mock data

export const projectPageSlices = [
  // ============ PROJECT HERO ============
  {
    slice_type: "project_hero",
    slice_label: null,
    id: "project_hero_1",
    variation: "default",
    version: "initial",
    primary: {
      logo_text: "Freeda.",
      project_title: "Project Title",
      button_text: "Another button",
      button_link: { url: "#contact" },
      hero_image_1: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd28c061-9b28-4b56-9585-f2eebc7c34f0",
        alt: "Project Screenshot 1",
        dimensions: { width: 529, height: 656 },
      },
      hero_image_2: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38ffbb0f-8e8b-43f2-80aa-151bdb93a04d",
        alt: "Project Screenshot 2",
        dimensions: { width: 432, height: 526 },
      },
    },
    items: [],
  },

  // ============ PROJECT DETAILS ============
  {
    slice_type: "project_details",
    slice_label: null,
    id: "project_details_1",
    variation: "default",
    version: "initial",
    primary: {},
    items: [
      {
        image: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd28c061-9b28-4b56-9585-f2eebc7c34f0",
          alt: "Feature 1",
          dimensions: { width: 702, height: 560 },
        },
        title: "Comprehensive Document Analysis",
        description:
          "Freeda analyzes technical documents, plans, and specifications to identify potential compliance issues and inconsistencies before they become problems on site.",
        is_reversed: false,
      },
      {
        image: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38ffbb0f-8e8b-43f2-80aa-151bdb93a04d",
          alt: "Feature 2",
          dimensions: { width: 702, height: 560 },
        },
        title: "Real-time Collaboration",
        description:
          "Teams can work together seamlessly, sharing insights and updates across the platform. All stakeholders stay informed with automatic notifications and reports.",
        is_reversed: true,
      },
      {
        image: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd28c061-9b28-4b56-9585-f2eebc7c34f0",
          alt: "Feature 3",
          dimensions: { width: 702, height: 560 },
        },
        title: "Regulatory Compliance Tracking",
        description:
          "Stay ahead of regulatory requirements with automated tracking and alerts. Freeda monitors changes in building codes and ensures your project remains compliant.",
        is_reversed: false,
      },
    ],
  },

  // ============ LAST PROJECTS (using Projects slice) ============
  {
    slice_type: "projects",
    slice_label: null,
    id: "last_projects_1",
    variation: "default",
    version: "initial",
    primary: {
      title_prefix: "Last",
      show_button: false,
    },
    items: [
      {
        image: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb47cf3a-90b9-4d0d-90af-804f035a1ed5",
          alt: "Project 1",
          dimensions: { width: 400, height: 698 },
        },
        title: "Name . project",
        location: "NY",
        application_label: "Application",
        application_text: "Ensure consistency and compliance across large, multi-phase developments.",
        metric_label: "Key metric",
        metric_text: "sure consistency and compliance across large",
      },
      {
        image: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88dc3e66-cb88-4da0-8605-f34689630f89",
          alt: "Project 2",
          dimensions: { width: 400, height: 698 },
        },
        title: "Name . project",
        location: "LA",
        application_label: "Application",
        application_text: "Ensure consistency and compliance across large, multi-phase developments.",
        metric_label: "Key metric",
        metric_text: "sure consistency and compliance across large",
      },
      {
        image: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/598b149e-5fb9-4050-9cf8-1b336dd1914b",
          alt: "Project 3",
          dimensions: { width: 400, height: 698 },
        },
        title: "Name . project",
        location: "TX",
        application_label: "Application",
        application_text: "Ensure consistency and compliance across large, multi-phase developments.",
        metric_label: "Key metric",
        metric_text: "sure consistency and compliance across large",
      },
    ],
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
      subtitle: "Trusted by clients across Europe, North America, and the Middle East",
      map_image: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67f2b360-7302-4934-8b93-f09e08a68662",
        alt: "World Map with Location Markers",
        dimensions: { width: 1512, height: 593 },
      },
      card_title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
