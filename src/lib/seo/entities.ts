import { DEFAULT_OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, toAbsoluteUrl } from "./site";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const MEDICAL_BUSINESS_ID = `${SITE_URL}/#medicalbusiness`;
export const BELUGA_ID = "https://www.belugahealth.com/#organization";
export const SEMAGLUTIDE_ENTITY_ID = `${SITE_URL}/#compounded-semaglutide`;
export const TIRZEPATIDE_ENTITY_ID = `${SITE_URL}/#compounded-tirzepatide`;

export const TREATMENT_ENTITIES = {
  semaglutide: {
    id: SEMAGLUTIDE_ENTITY_ID,
    name: "Compounded Semaglutide",
    slug: "semaglutide",
    url: toAbsoluteUrl("/treatments/semaglutide"),
    description:
      "Compounded semaglutide treatment option offered by Trimi for physician-guided medical weight management.",
    activeIngredient: "Semaglutide",
    offerPrice: "99",
  },
  tirzepatide: {
    id: TIRZEPATIDE_ENTITY_ID,
    name: "Compounded Tirzepatide",
    slug: "tirzepatide",
    url: toAbsoluteUrl("/treatments/tirzepatide"),
    description:
      "Compounded tirzepatide treatment option offered by Trimi for physician-guided medical weight management.",
    activeIngredient: "Tirzepatide",
    offerPrice: "125",
  },
} as const;

export function getBaseEntityGraph() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      alternateName: "Trimi",
      url: SITE_URL,
      logo: DEFAULT_OG_IMAGE,
      image: DEFAULT_OG_IMAGE,
      description: SITE_DESCRIPTION,
      sameAs: [
        "https://www.facebook.com/trytrimi",
        "https://twitter.com/trytrimi",
        "https://www.instagram.com/trytrimi",
      ],
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      knowsAbout: [
        "Medical weight loss",
        "Compounded semaglutide",
        "Compounded tirzepatide",
        "GLP-1 treatment",
        "Telehealth",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: {
        "@id": ORGANIZATION_ID,
      },
      inLanguage: "en-US",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "MedicalBusiness",
      "@id": MEDICAL_BUSINESS_ID,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      provider: {
        "@id": BELUGA_ID,
      },
      parentOrganization: {
        "@id": ORGANIZATION_ID,
      },
      availableService: [
        {
          "@type": "MedicalProcedure",
          name: "Online weight-loss consultation",
          procedureType: "Telemedicine",
        },
        {
          "@type": "MedicalTherapy",
          name: TREATMENT_ENTITIES.semaglutide.name,
          url: TREATMENT_ENTITIES.semaglutide.url,
        },
        {
          "@type": "MedicalTherapy",
          name: TREATMENT_ENTITIES.tirzepatide.name,
          url: TREATMENT_ENTITIES.tirzepatide.url,
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Trimi GLP-1 weight-loss treatments",
        itemListElement: [
          {
            "@type": "Offer",
            price: TREATMENT_ENTITIES.semaglutide.offerPrice,
            priceCurrency: "USD",
            itemOffered: {
              "@id": TREATMENT_ENTITIES.semaglutide.id,
            },
          },
          {
            "@type": "Offer",
            price: TREATMENT_ENTITIES.tirzepatide.offerPrice,
            priceCurrency: "USD",
            itemOffered: {
              "@id": TREATMENT_ENTITIES.tirzepatide.id,
            },
          },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": BELUGA_ID,
      name: "Beluga Health",
      url: "https://www.belugahealth.com/",
      description: "Telehealth provider network referenced by Trimi for licensed medical review and care delivery.",
    },
    {
      "@type": "MedicalTherapy",
      "@id": TREATMENT_ENTITIES.semaglutide.id,
      name: TREATMENT_ENTITIES.semaglutide.name,
      url: TREATMENT_ENTITIES.semaglutide.url,
      description: TREATMENT_ENTITIES.semaglutide.description,
      activeIngredient: TREATMENT_ENTITIES.semaglutide.activeIngredient,
      provider: {
        "@id": MEDICAL_BUSINESS_ID,
      },
    },
    {
      "@type": "MedicalTherapy",
      "@id": TREATMENT_ENTITIES.tirzepatide.id,
      name: TREATMENT_ENTITIES.tirzepatide.name,
      url: TREATMENT_ENTITIES.tirzepatide.url,
      description: TREATMENT_ENTITIES.tirzepatide.description,
      activeIngredient: TREATMENT_ENTITIES.tirzepatide.activeIngredient,
      provider: {
        "@id": MEDICAL_BUSINESS_ID,
      },
    },
  ];
}
