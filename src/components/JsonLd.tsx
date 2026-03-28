export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nova Tech AI Limited",
    url: "https://novatechai.com",
    logo: "https://novatechai.com/logo.png",
    description:
      "Nova Tech AI Limited is a Hong Kong-based technology company building AI-powered mobile applications.",
    email: "win060787@gmail.com",
    foundingDate: "2026-03",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hong Kong",
      addressCountry: "HK",
    },
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Mobile Applications",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Restore.xyz",
            applicationCategory: "PhotographyApplication",
            operatingSystem: "Web",
            description:
              "AI-powered photo restoration application that repairs and enhances damaged photographs.",
            url: "https://restore.xyz",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "FuneratPhoto",
            applicationCategory: "PhotographyApplication",
            operatingSystem: "Web",
            description:
              "Compassionate AI tool for enhancing memorial and funeral photographs.",
            url: "https://funeratphoto.com",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
