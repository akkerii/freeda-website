// Case Study page mock data

export const caseStudySlices = [
  // ============ CASE STUDY HERO ============
  {
    slice_type: "case_study_hero",
    slice_label: null,
    id: "case_study_hero_1",
    variation: "default",
    version: "initial",
    primary: {
      badge_text: "Uses cases",
      counter_number: "1345",
      logo: {
        url: "/images/67b9bbfe06c9bbfdd83967f7ba2e655e69ba1480.png",
        alt: "",
        dimensions: { width: 407, height: 553 },
      },
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
      background_image: {
        url: "/images/6c7c028e74db5ea2c485a653344802bd08faf5a5.png",
        alt: "",
        dimensions: { width: 712, height: 712 },
      },
      foreground_image: {
        url: "/images/6478d52c5db017fb5e4c6a867bd0123e67f6bc69.png",
        alt: "",
        dimensions: { width: 1139, height: 674 },
      },
      show_metrics: false,
      annual_roi: "×37",
      productivity_gains: "23 hours saved per month",
      cities: "5",
    },
    items: [],
  },

  // ============ CASE STUDY CARDS ============
  {
    slice_type: "case_study_cards",
    slice_label: null,
    id: "case_study_cards_1",
    variation: "default",
    version: "initial",
    primary: {
      section_title: "Case Study",
      cards: [
        {
          image: {
            url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=524&h=698&fit=crop",
            alt: "Cohabs Case Study",
            dimensions: { width: 524, height: 698 },
          },
          label: "Cohabs",
          show_details: true,
          application_description: "Freeda helps Cohabs verify that schematic and detailed design plans complied with brand guidelines and local codes in 5 countries.",
          document_tags: [
            { icon_type: "file", tag_text: "Plans" },
            { icon_type: "check", tag_text: "Local Regulations" },
            { icon_type: "lock", tag_text: "Brand Guidelines" },
          ],
          logo: {
            url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=137&h=36&fit=crop",
            alt: "Cohabs Logo",
            dimensions: { width: 137, height: 36 },
          },
          hero_heading: [
            {
              type: "heading1",
              text: "Automating Plan Verification with Cohabs",
              spans: [],
            },
          ],
          hero_description: [
            {
              type: "paragraph",
              text: "Ensure that architectural layouts comply with accessibility requirements by automatically checking dimensions, clearances, and circulation rules directly on your drawings.",
              spans: [],
            },
          ],
          background_image: {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=524&h=656&fit=crop",
            alt: "Background",
            dimensions: { width: 524, height: 656 },
          },
          foreground_image: {
            url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=425&h=528&fit=crop",
            alt: "Foreground",
            dimensions: { width: 425, height: 528 },
          },
          show_metrics: true,
          annual_roi: "×37",
          productivity_gains: "23 hours saved per month",
          cities: "5",
          content_title: [
            {
              type: "heading1",
              text: "Automating Plan Verification",
              spans: [],
            },
          ],
          content_description: [
            {
              type: "paragraph",
              text: "Ensure that architectural layouts comply with accessibility requirements by automatically checking dimensions, clearances, and circulation rules directly on your drawings.",
              spans: [],
            },
          ],
          content_sections: [
            {
              heading: [
                {
                  type: "heading2",
                  text: "Understanding Cohabs' challenges",
                  spans: [],
                },
              ],
              body_text: [
                {
                  type: "paragraph",
                  text: "Freeda worked closely with multiple Cohabs teams across Acquisition, Project Management, and Space & Design to understand the key bottlenecks in their design and review processes.",
                  spans: [],
                },
                {
                  type: "paragraph",
                  text: "In-person workshops were conducted with teams in Brussels, Paris, and New York to build a comprehensive view of Cohabs' workflows, decision-making constraints, and scale requirements before defining a solution.",
                  spans: [
                    {
                      start: 57,
                      end: 97,
                      type: "strong",
                    },
                  ],
                },
              ],
              image: {
                url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=523&h=560&fit=crop",
                alt: "Workshop",
                dimensions: { width: 523, height: 560 },
              },
              image_position: "left",
            },
            {
              heading: [
                {
                  type: "heading2",
                  text: "Solution development and iteration",
                  spans: [],
                },
              ],
              body_text: [
                {
                  type: "paragraph",
                  text: "Based on these insights, Freeda rapidly prototyped solutions aligned with Cohabs' existing workflows to ensure seamless adoption.",
                  spans: [],
                },
                {
                  type: "paragraph",
                  text: "The highest-impact use cases focused on plan verification, including checking schematic and detailed design plans against internal brand guidelines and local regulations, as well as validating basic quantities and takeoffs across project stakeholders.",
                  spans: [],
                },
              ],
              image: {
                url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=523&h=560&fit=crop",
                alt: "Development",
                dimensions: { width: 523, height: 560 },
              },
              image_position: "right",
            },
            {
              heading: [
                {
                  type: "heading2",
                  text: "Global deployment",
                  spans: [],
                },
              ],
              body_text: [
                {
                  type: "paragraph",
                  text: "Following successful deployments on initial projects in Brussels, Freeda is now being rolled out across 35+ projects across London, Brussels, Paris, Madrid, Milan and more.",
                  spans: [
                    {
                      start: 110,
                      end: 158,
                      type: "strong",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  text: "The platform integrates smoothly into Cohabs' ways of working by adapting reports, outputs, and spreadsheets to match Cohabs' internal formats and presentation standards.",
                  spans: [],
                },
              ],
              image: {
                url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=523&h=560&fit=crop",
                alt: "Global",
                dimensions: { width: 523, height: 560 },
              },
              image_position: "left",
            },
          ],
        },
        {
          image: {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=524&h=698&fit=crop",
            alt: "Coming Soon",
            dimensions: { width: 524, height: 698 },
          },
          label: "Coming soon",
          show_details: false,
        },
        {
          image: {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=524&h=698&fit=crop",
            alt: "Coming Soon",
            dimensions: { width: 524, height: 698 },
          },
          label: "Coming soon",
          show_details: false,
        },
      ],
    },
    items: [],
  },

  // ============ CASE STUDY DETAILS ============
  {
    slice_type: "case_study_details",
    slice_label: null,
    id: "case_study_details_1",
    variation: "default",
    version: "initial",
    primary: {
      section_title: [
        {
          type: "heading1",
          text: "Automating Plan Verification",
          spans: [],
        },
      ],
      section_description: [
        {
          type: "paragraph",
          text: "Ensure that architectural layouts comply with accessibility requirements by automatically checking dimensions, clearances, and circulation rules directly on your drawings.",
          spans: [],
        },
      ],
      sections: [
        {
          heading: [
            {
              type: "heading2",
              text: "Understanding Cohabs' challenges",
              spans: [],
            },
          ],
          body_text: [
            {
              type: "paragraph",
              text: "Freeda worked closely with multiple Cohabs teams across Acquisition, Project Management, and Space & Design to understand the key bottlenecks in their design and review processes.",
              spans: [],
            },
            {
              type: "paragraph",
              text: "In-person workshops were conducted with teams in Brussels, Paris, and New York to build a comprehensive view of Cohabs' workflows, decision-making constraints, and scale requirements before defining a solution.",
              spans: [
                {
                  start: 57,
                  end: 97,
                  type: "strong",
                },
              ],
            },
          ],
          image: {
            url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=523&h=560&fit=crop",
            alt: "Workshop",
            dimensions: { width: 523, height: 560 },
          },
          image_position: "left",
        },
        {
          heading: [
            {
              type: "heading2",
              text: "Solution development and iteration",
              spans: [],
            },
          ],
          body_text: [
            {
              type: "paragraph",
              text: "Based on these insights, Freeda rapidly prototyped solutions aligned with Cohabs' existing workflows to ensure seamless adoption.",
              spans: [],
            },
            {
              type: "paragraph",
              text: "The highest-impact use cases focused on plan verification, including checking schematic and detailed design plans against internal brand guidelines and local regulations, as well as validating basic quantities and takeoffs across project stakeholders.",
              spans: [],
            },
          ],
          image: {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=523&h=560&fit=crop",
            alt: "Development",
            dimensions: { width: 523, height: 560 },
          },
          image_position: "right",
        },
        {
          heading: [
            {
              type: "heading2",
              text: "Global deployment",
              spans: [],
            },
          ],
          body_text: [
            {
              type: "paragraph",
              text: "Following successful deployments on initial projects in Brussels, Freeda is now being rolled out across 35+ projects across London, Brussels, Paris, Madrid, Milan and more.",
              spans: [
                {
                  start: 110,
                  end: 158,
                  type: "strong",
                },
              ],
            },
            {
              type: "paragraph",
              text: "The platform integrates smoothly into Cohabs' ways of working by adapting reports, outputs, and spreadsheets to match Cohabs' internal formats and presentation standards.",
              spans: [],
            },
          ],
          image: {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=523&h=560&fit=crop",
            alt: "Global",
            dimensions: { width: 523, height: 560 },
          },
          image_position: "left",
        },
      ],
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
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1512&h=820&fit=crop",
        alt: "Building Background",
        dimensions: { width: 1512, height: 820 },
      },
      partners_title: "Technical Partners & Investors",
      partners_logos: {
        url: "",
        alt: "Partner Logos",
        dimensions: { width: 1508, height: 92 },
      },
      company_name: "Freeda",
      description: "Descriptive line about what your company does.",
      social_icons: {
        url: "",
        alt: "Social Media Icons",
        dimensions: { width: 120, height: 24 },
      },
    },
    items: [],
  },
];
