// Homepage mock data - Edit this to match your Figma design
// No Prismic dashboard needed during development!

export const homepageSlices = [
  // ============ HERO ============
  {
    slice_type: "hero",
    slice_label: null,
    id: "hero_1",
    variation: "default",
    version: "initial",
    primary: {
      logo_icon: null,
      logo_text: "Freeda.",
      heading: "You build.\nWe double-check.",
      description: [
        {
          type: "paragraph",
          text: "Construction risk starts long before the site opens. Freeda analyses plans and technical documents to detect errors early - before they turn into delays, redesigns, or disputes.",
          spans: [],
        },
      ],
      primary_button_text: "Discuss a project",
      primary_button_link: { link_type: "Web", url: "#demo" },
      secondary_button_text: "Explore use cases",
      secondary_button_link: { link_type: "Web", url: "#use-cases" },
      hero_image: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90659ae8-9913-4922-b124-440883aa7203",
        alt: "Freeda Dashboard",
        dimensions: { width: 2190, height: 1296 },
      },
      decorative_image_1: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c27d470e-0b04-4d40-a20f-5d39ae88d919",
        alt: "Decorative construction image",
        dimensions: { width: 295, height: 353 },
      },
      decorative_image_2: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fccbdab-9279-47d0-a87a-3dfa8058c8be",
        alt: "Decorative construction image",
        dimensions: { width: 296, height: 249 },
      },
      decorative_image_3: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03ec1d1f-6987-499f-9693-0a62c076ca43",
        alt: "Decorative construction image",
        dimensions: { width: 243, height: 268 },
      },
    },
    items: [],
  },

  // ============ LOGO CLOUD ============
  {
    slice_type: "logo_cloud",
    slice_label: null,
    id: "logo_cloud_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "Trusted By",
    },
    items: [
      {
        logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9293dce1-161e-4cde-afdc-f72f8d112e61", alt: "Partner 1", dimensions: { width: 201, height: 58 } },
        company_name: "Partner 1",
      },
      {
        logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25486877-b552-429a-b4f9-933021f70e21", alt: "Partner 2", dimensions: { width: 197, height: 59 } },
        company_name: "Partner 2",
      },
      {
        logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fb554eb-70e6-44e5-9ebf-d1b64da9c8e0", alt: "Partner 3", dimensions: { width: 207, height: 100 } },
        company_name: "Partner 3",
      },
      {
        logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/755a4b7e-a11d-42c7-ac61-62e26b34e363", alt: "Partner 4", dimensions: { width: 227, height: 88 } },
        company_name: "Partner 4",
      },
      {
        logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e41288f-68c3-4ea5-8ec6-02adc3afaf1a", alt: "Partner 5", dimensions: { width: 234, height: 82 } },
        company_name: "Partner 5",
      },
      {
        logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7253e0a6-0dce-4ab3-a049-d2565d9c793b", alt: "Partner 6", dimensions: { width: 189, height: 69 } },
        company_name: "Partner 6",
      },
    ],
  },

  // ============ FEATURES ============
  {
    slice_type: "features",
    slice_label: null,
    id: "features_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "Most risk originates in plans \n& documents - not on site.",
      description: [
        {
          type: "paragraph",
          text: "They start in documents: plans, specifications, regulations, guidelines - often unstructured, often inconsistent.",
          spans: [],
        },
      ],
      document_image_1: {
        url: "/images/document-1.png",
        alt: "Floor plan document 1",
        dimensions: { width: 356, height: 370 },
      },
      document_image_2: {
        url: "/images/document-2.png",
        alt: "Floor plan document 2",
        dimensions: { width: 339, height: 398 },
      },
      main_feature_title: "From plans & documents\nto decisions",
      main_feature_description: [
        {
          type: "paragraph",
          text: "Freeda analyses plans and cross-references them with technical, project & regulatory documents to detect errors and inconsistencies.",
          spans: [],
        },
      ],
    },
    items: [
      {
        icon: null,
        feature_title: "Built on real projects",
        feature_description: null,
      },
      {
        icon: null,
        feature_title: "Human-led AI for the built environment",
        feature_description: null,
      },
    ],
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
        step_description: [{ type: "paragraph", text: "Project type, location, regulations, documents, objectives", spans: [] }],
        step_icon: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ea6bef2-4125-4a2f-b850-0c6b8f4affbb",
          alt: "Define use case icon",
          dimensions: { width: 143, height: 143 },
        },
      },
      {
        step_number: "2",
        step_title: "2 - Analyse documents",
        step_description: [{ type: "paragraph", text: "Plans and technical files are analysed by Freeda, with expert validation", spans: [] }],
        step_icon: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94798e6c-2dd6-4101-8592-e80bb7fd05ac",
          alt: "Analyse documents icon",
          dimensions: { width: 143, height: 143 },
        },
      },
      {
        step_number: "3",
        step_title: "3 - Act with clarity",
        step_description: [{ type: "paragraph", text: "Receive structured, custom reports to support decisions & next steps.", spans: [] }],
        step_icon: {
          url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/632174c0-1c05-477b-b68c-98643560eed1",
          alt: "Act with clarity icon",
          dimensions: { width: 143, height: 143 },
        },
      },
    ],
  },

  // ============ DARK CTA ============
  {
    slice_type: "dark_cta",
    slice_label: null,
    id: "dark_cta_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "USE CASES & PROJECTS",
      description: [
        {
          type: "paragraph",
          text: "Concrete applications, real projects",
          spans: [],
        },
        {
          type: "paragraph",
          text: "Freeda is used across a wide range of applications",
          spans: [],
        },
      ],
      button_text: "→ Explore use cases & projects",
      button_link: { link_type: "Web", url: "#use-cases" },
      image: {
        url: "/images/use-cases-bg.png",
        alt: "Freeda Dashboard",
        dimensions: { width: 749, height: 443 },
      },
    },
    items: [],
  },

  // ============ TESTIMONIALS ============
  {
    slice_type: "testimonials",
    slice_label: null,
    id: "testimonials_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "Testimonials",
    },
    items: [
      // Item 0: Left card - Quote testimonial
      {
        quote: [{ type: "paragraph", text: "\"Avec Freeda nous pouvons réaliser en quelques clics des vérifications de plans qui nous prennent des heures habituellement. C'est une solution qui nous aide très concrètement au quotidien et qui permet de détecter des erreurs avant qu'elles deviennent couteuse à l'entreprise. Une belle équipe et un projet prometteur, je suis très content d'apporter ma pierre à l'édifice pour faire évoluer cette solution si prometteuse.\"", spans: [] }],
        author_name: "",
        author_title: "",
        author_image: null,
        company_logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01b47c29-a747-4aa7-95bd-77180be188fc", alt: "Company Logo", dimensions: { width: 153, height: 31 } },
      },
      // Item 1: Middle card - Video testimonial
      {
        quote: null,
        author_name: "AlexiE TEIXIER - Chief Service",
        author_title: "",
        author_image: null,
        company_logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71e3207c-3385-47db-abb4-0c979836a246", alt: "Company Logo", dimensions: { width: 153, height: 31 } },
      },
      // Item 2: Coming soon card 1
      {
        quote: null,
        author_name: "",
        author_title: "",
        author_image: null,
        company_logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c80e2b62-b731-412d-8bc0-e8a5a427bf0a", alt: "Company Logo", dimensions: { width: 110, height: 48 } },
      },
      // Item 3: Coming soon card 2
      {
        quote: null,
        author_name: "",
        author_title: "",
        author_image: null,
        company_logo: { url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/860fdd58-5897-47ae-9a95-ee1aaf54b914", alt: "Company Logo", dimensions: { width: 137, height: 36 } },
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
      card_description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
      card_image: {
        url: "/images/global-card-image.png",
        alt: "Location Image",
        dimensions: { width: 343, height: 178 },
      },
      button_text: "→ View global presence",
      button_link: { link_type: "Web", url: "#global" },
    },
    items: [],
  },

  // ============ JOIN US ============
  {
    slice_type: "join_us",
    slice_label: null,
    id: "join_us_1",
    variation: "default",
    version: "initial",
    primary: {
      title: "Join us",
      button_text: "→ Join us",
      button_link: { link_type: "Web", url: "/careers" },
      image_1: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c645b64d-3c1b-4481-b6de-800ca2a43c7b",
        alt: "Team collaboration",
        dimensions: { width: 525, height: 432 },
      },
      image_2: {
        url: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00c8bf36-b325-4f6a-8d56-6869b78ea84e",
        alt: "Office environment",
        dimensions: { width: 343, height: 432 },
      },
      card_title: "Explain the idea",
      card_description: "Writing for websites is both simple and complex. On the one hand, all you need to do is say what you mean and in your words.",
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
