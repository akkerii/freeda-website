// Working with Freeda page mock data

export const workingWithFreedaSlices = [
  // ============ WORKING HERO ============
  {
    slice_type: "working_hero",
    slice_label: null,
    id: "working_hero_1",
    variation: "default",
    version: "initial",
    primary: {
      logo_text: "Freeda.",
      title: "Working \nwith Freeda",
      description:
        "Freeda is designed for teams dealing with complex projects, multiple stakeholders and regulatory constraints. We don't just deliver analyses. We help structure how risk is managed at the design stage.",
      button_text: "Another button",
      button_link: { url: "#contact" },
      hero_image_1: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5183c326-d2f9-4908-aee8-01bce62ad75d",
        alt: "Hero Image 1",
        dimensions: { width: 576, height: 627 },
      },
      hero_image_2: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d0e6a00-02ec-4d16-93f4-ce1dde5efc61",
        alt: "Hero Image 2",
        dimensions: { width: 376, height: 419 },
      },
    },
    items: [],
  },

  // ============ OUR METHOD (Features Grid) ============
  {
    slice_type: "features_grid",
    slice_label: null,
    id: "our_method_1",
    variation: "default",
    version: "initial",
    primary: {
      section_title: "OUR METHOD",
      section_subtitle:
        "Go ahead and say just a little more \nabout what this is",
    },
    items: [
      {
        title: "1 - Framing",
        description:
          "Understand the project context, documents, regulations and decision points.",
      },
      {
        title: "2 - Configuration",
        description: "Combine Freeda's technology with expert review.",
      },
      {
        title: "3 - Analysis & validation",
        description: "Combine Freeda's technology with expert review.",
      },
      {
        title: "4 - Actionable outputs",
        description:
          "Deliver reports designed to support decisions, not just observations.",
      },
    ],
  },

  // ============ OUR IP ============
  {
    slice_type: "our_ip",
    slice_label: null,
    id: "our_ip_1",
    variation: "default",
    version: "initial",
    primary: {
      section_title: "OUR IP",
      section_description: "Freeda develops proprietary technology combining:",
      footer_text:
        "R&D is led by Dr. Mariano Rodriguez, PhD in Applied Mathematics (ENS Paris), supported by engineers & researchers with experience in mathematics & computer vision.",
    },
    items: [
      { title: "AI and machine learning" },
      { title: "Computer vision" },
      { title: "Agent orchestration" },
    ],
  },

  // ============ EXPERTISE ============
  {
    slice_type: "expertise",
    slice_label: null,
    id: "expertise_1",
    variation: "default",
    version: "initial",
    primary: {
      section_title: "EXPERTISE",
      section_subtitle: "Freeda's team includes former:",
      footer_text:
        "With experience across Europe, North America and the Middle East.",
    },
    items: [
      {
        image: { url: "", alt: "Architects" },
        title: "Architects",
      },
      {
        image: { url: "", alt: "Engineers" },
        title: "Engineers",
      },
      {
        image: { url: "", alt: "Urban planners" },
        title: "Urban planners",
      },
    ],
  },

  // ============ DEEP TECH ============
  {
    slice_type: "deep_tech",
    slice_label: null,
    id: "deep_tech_1",
    variation: "default",
    version: "initial",
    primary: {
      section_title: "our deeptech intellectual property",
      section_description:
        "They start in documents: plans, specifications, regulations, guidelines - often unstructured, often inconsistent. Freeda helps teams turn these documents into clear, actionable insights.",
      image: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd28c061-9b28-4b56-9585-f2eebc7c34f0",
        alt: "DeepTech Image",
        dimensions: { width: 706, height: 525 },
      },
    },
    items: [
      { title: "Clear identification of issues" },
      { title: "Faster, safer decisions" },
      { title: "Reduced downstream risk" },
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
