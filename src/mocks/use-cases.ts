// Use Cases page mock data

export const useCasesSlices = [
  // ============ USE CASE HERO ============
  {
    slice_type: "use_case_hero",
    slice_label: null,
    id: "use_case_hero_1",
    variation: "default",
    version: "initial",
    primary: {
      badge_text: "Uses cases",
      counter_number: "1345",
      heading: [
        {
          type: "heading1",
          text: "Real use. Real impact.",
          spans: [],
        },
      ],
      description: [
        {
          type: "paragraph",
          text: "Freeda is not used in theory. It is applied on real projects, under real regulatory and operational constraints.",
          spans: [],
        },
      ],
      image_left: {
        url: "/images/6c7c028e74db5ea2c485a653344802bd08faf5a5.png",
        alt: "",
        dimensions: { width: 712, height: 712 },
      },
      image_center: {
        url: "/images/6478d52c5db017fb5e4c6a867bd0123e67f6bc69.png",
        alt: "",
        dimensions: { width: 1139, height: 674 },
      },
      image_right: {
        url: "/images/67b9bbfe06c9bbfdd83967f7ba2e655e69ba1480.png",
        alt: "",
        dimensions: { width: 407, height: 553 },
      },
    },
    items: [],
  },

  // ============ USE CASE CAROUSEL (Interactive Use Cases) ============
  {
    slice_type: "use_case_carousel",
    slice_label: null,
    id: "use_case_carousel_1",
    variation: "default",
    version: "initial",
    primary: {
      section_title: "Use cases",
      use_cases: [
        {
          card_title: "Accessibility (PMR)",
          card_image: {
            url: "https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=524&h=698&fit=crop",
            alt: "Modern architecture building",
            dimensions: { width: 524, height: 698 },
          },
          application_label: "Application",
          application_text: "Detect accessibility non-compliances early, before permits or construction.",
          documents_label: "Documents analysed",
          documents_text: "Plans (PDF), technical notices, regulations.",
          coming_soon: false,
          detail_title: "Accessibility (PMR) Compliance Check",
          detail_description: [{ type: "paragraph", text: "Ensure that architectural layouts comply with accessibility requirements by automatically checking dimensions, clearances, and circulation rules directly on your drawings.", spans: [] }],
          step1_title: "Step 1 — Configuration",
          step1_description: [
            { type: "paragraph", text: "Our team works with you to understand your exact needs and project context before running any checks.", spans: [] },
            { type: "paragraph", text: "This setup phase includes:", spans: [] }
          ],
          step1_image: {
            url: "https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=523&h=560&fit=crop",
            alt: "Configuration setup",
            dimensions: { width: 523, height: 560 },
          },
          step1_use_lottie: true,
          step1_lottie_url: "/animations/step1-config.json",
          step1_tags: [
            { type: "list-item", text: "Applicable accessibility", spans: [] },
            { type: "list-item", text: "Building type", spans: [] },
            { type: "list-item", text: "Areas to be checked", spans: [] },
            { type: "list-item", text: "Specific interpretations", spans: [] },
            { type: "list-item", text: "Expected level of detail in the results", spans: [] },
            { type: "list-item", text: "Report format and structure", spans: [] }
          ],
          step2_title: "Step 2 — Upload your plans and documents",
          step2_description: [
            { type: "paragraph", text: "Upload the documents required for the accessibility review, including:", spans: [] },
            { type: "paragraph", text: "Freeda analyses plans directly in their native format — no model conversion or manual preparation required.", spans: [] }
          ],
          step2_image: {
            url: "https://images.unsplash.com/photo-1587905069134-008460d7a636?w=523&h=560&fit=crop",
            alt: "Document upload",
            dimensions: { width: 523, height: 560 },
          },
          step2_tags: [
            { type: "list-item", text: "Architectural plans", spans: [] },
            { type: "list-item", text: "Parking and circulation plans", spans: [] },
            { type: "list-item", text: "Relevant technical notes", spans: [] },
            { type: "list-item", text: "Applicable regulatory texts", spans: [] }
          ],
          step3_title: "Step 3 — Receive your accessibility reports",
          step3_description: [
            { type: "paragraph", text: "Freeda delivers structured, traceable, and actionable results, including:", spans: [] },
            { type: "paragraph", text: "Results are available:", spans: [] }
          ],
          step3_image: {
            url: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=523&h=560&fit=crop",
            alt: "Results report",
            dimensions: { width: 523, height: 560 },
          },
          step3_tags: [
            { type: "list-item", text: "Missing accessibility elements", spans: [] },
            { type: "list-item", text: "Annotated plans highlighting each issue", spans: [] },
            { type: "list-item", text: "Directly within the platform", spans: [] },
            { type: "list-item", text: "As exportable PDF reports", spans: [] }
          ],
        },
        {
          card_title: "Project Brief",
          card_image: {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=343&h=456&fit=crop",
            alt: "Project brief building",
            dimensions: { width: 343, height: 456 },
          },
          application_label: "Application",
          application_text: "Ensure design alignment with the project brief from day one",
          documents_label: "Documents analysed",
          documents_text: "Verify that architectural plans comply with the project brief by checking areas",
          coming_soon: false,
          detail_title: "Project Brief Compliance Check",
          detail_description: [{ type: "paragraph", text: "Automatically verify that your architectural designs align with project brief requirements from the earliest stages.", spans: [] }],
          step1_title: "Step 1 — Configuration",
          step1_description: [{ type: "paragraph", text: "Define the key requirements from your project brief that need to be verified against the architectural plans.", spans: [] }],
          step1_image: {
            url: "https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=523&h=560&fit=crop",
            alt: "Configuration",
            dimensions: { width: 523, height: 560 },
          },
          step1_tags: [
            { type: "list-item", text: "Area requirements", spans: [] },
            { type: "list-item", text: "Room specifications", spans: [] },
            { type: "list-item", text: "Functional relationships", spans: [] }
          ],
          step2_title: "Step 2 — Upload your documents",
          step2_description: [{ type: "paragraph", text: "Upload both your project brief and architectural plans for automated comparison.", spans: [] }],
          step2_image: {
            url: "https://images.unsplash.com/photo-1587905069134-008460d7a636?w=523&h=560&fit=crop",
            alt: "Upload",
            dimensions: { width: 523, height: 560 },
          },
          step2_tags: [
            { type: "list-item", text: "Project brief document", spans: [] },
            { type: "list-item", text: "Architectural plans", spans: [] }
          ],
          step3_title: "Step 3 — Receive compliance report",
          step3_description: [{ type: "paragraph", text: "Get detailed compliance reports showing alignment between your brief and designs.", spans: [] }],
          step3_image: {
            url: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=523&h=560&fit=crop",
            alt: "Report",
            dimensions: { width: 523, height: 560 },
          },
          step3_tags: [
            { type: "list-item", text: "Compliance status", spans: [] },
            { type: "list-item", text: "Detailed findings", spans: [] }
          ],
        },
        {
          card_title: "CCTP analysis",
          card_image: {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=343&h=456&fit=crop",
            alt: "CCTP analysis building",
            dimensions: { width: 343, height: 456 },
          },
          application_label: "Application",
          application_text: "Identify contradictions, missing requirements and unclear scopes.",
          documents_label: "Documents analysed",
          documents_text: "CCTP, plans, technical notices.",
          coming_soon: true,
          detail_title: "CCTP Document Analysis",
          detail_description: [{ type: "paragraph", text: "Automatically analyze CCTP documents to identify contradictions and missing requirements.", spans: [] }],
          step1_title: "Step 1 — Configuration",
          step1_description: [{ type: "paragraph", text: "Coming soon - configure your CCTP analysis parameters.", spans: [] }],
          step1_image: {
            url: "https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=523&h=560&fit=crop",
            alt: "Configuration",
            dimensions: { width: 523, height: 560 },
          },
          step1_tags: [{ type: "list-item", text: "Analysis scope", spans: [] }],
          step2_title: "Step 2 — Upload CCTP",
          step2_description: [{ type: "paragraph", text: "Coming soon - upload your CCTP documents.", spans: [] }],
          step2_image: {
            url: "https://images.unsplash.com/photo-1587905069134-008460d7a636?w=523&h=560&fit=crop",
            alt: "Upload",
            dimensions: { width: 523, height: 560 },
          },
          step2_tags: [{ type: "list-item", text: "CCTP documents", spans: [] }],
          step3_title: "Step 3 — Receive analysis",
          step3_description: [{ type: "paragraph", text: "Coming soon - receive detailed CCTP analysis.", spans: [] }],
          step3_image: {
            url: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=523&h=560&fit=crop",
            alt: "Report",
            dimensions: { width: 523, height: 560 },
          },
          step3_tags: [{ type: "list-item", text: "Contradictions found", spans: [] }],
        },
      ],
    },
    items: [],
  },

  // ============ HOW IT WORKS ============
  {
    slice_type: "how_it_works",
    slice_label: null,
    id: "how_it_works_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "HOW IT WORKS",
      button_text: "→ Learn more about the Freeda approach",
      button_link: { link_type: "Web", url: "#approach" },
    },
    items: [
      {
        step_number: "1",
        step_title: "1 - Define use case",
        step_description: "Project type, location, regulations, documents, objectives",
        icon: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ea6bef2-4125-4a2f-b850-0c6b8f4affbb",
          alt: "Define use case icon",
          dimensions: { width: 143, height: 143 },
        },
      },
      {
        step_number: "2",
        step_title: "2 - Analyse documents",
        step_description: "Plans and technical files are analysed by Freeda, with expert validation",
        icon: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94798e6c-2dd6-4101-8592-e80bb7fd05ac",
          alt: "Analyse documents icon",
          dimensions: { width: 143, height: 143 },
        },
      },
      {
        step_number: "3",
        step_title: "3 - Act with clarity",
        step_description: "Receive structured, custom reports to support decisions & next steps.",
        icon: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/632174c0-1c05-477b-b68c-98643560eed1",
          alt: "Act with clarity icon",
          dimensions: { width: 143, height: 143 },
        },
      },
    ],
  },

  // ============ PROJECTS ============
  {
    slice_type: "projects",
    slice_label: null,
    id: "projects_1",
    variation: "default",
    version: "initial",
    primary: {
      button_text: "More Project",
      button_link: { url: "/projects" },
    },
    items: [
      // Row 1
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
      // Row 2
      {
        image: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff92ec49-b48c-43a9-bc11-704e0afdedd9",
          alt: "Project 4",
          dimensions: { width: 400, height: 698 },
        },
        title: "Name . project",
        location: "FL",
        application_label: "Application",
        application_text: "Ensure consistency and compliance across large, multi-phase developments.",
        metric_label: "Key metric",
        metric_text: "sure consistency and compliance across large",
      },
      {
        image: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86c7ebf1-2b0e-4d9f-a7f1-8fad81c27d34",
          alt: "Project 5",
          dimensions: { width: 400, height: 698 },
        },
        title: "Name . project",
        location: "CA",
        application_label: "Application",
        application_text: "Ensure consistency and compliance across large, multi-phase developments.",
        metric_label: "Key metric",
        metric_text: "sure consistency and compliance across large",
      },
      {
        image: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9e9767a-3470-4342-8c6b-822dd441587b",
          alt: "Project 6",
          dimensions: { width: 400, height: 698 },
        },
        title: "Name . project",
        location: "WA",
        application_label: "Application",
        application_text: "Ensure consistency and compliance across large, multi-phase developments.",
        metric_label: "Key metric",
        metric_text: "sure consistency and compliance across large",
      },
    ],
  },

  // ============ CONSTRUCTION RISKS ============
  {
    slice_type: "construction_risks",
    slice_label: null,
    id: "construction_risks_1",
    variation: "default",
    version: "initial",
    primary: {
      title: [{ type: "heading2", text: "Most risk originates in plans\n& documents - not on site.", spans: [] }],
      description: [{ type: "paragraph", text: "They start in documents: plans, specifications, regulations, guidelines - often unstructured, often inconsistent.", spans: [] }],
      cards_image: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f66c274-d768-42b4-b70e-4dd9493e1c14",
        alt: "Feature Cards",
        dimensions: { width: 706, height: 525 },
      },
      feature_title: [{ type: "heading3", text: "From plans & documents\nto decisions", spans: [] }],
      feature_description: [{ type: "paragraph", text: "Freeda analyses plans and cross-references them with technical, project & regulatory documents to detect errors and inconsistencies.", spans: [] }],
      feature_2_title: "Built on real projects",
      feature_3_title: "Human-led AI for the built environment",
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
