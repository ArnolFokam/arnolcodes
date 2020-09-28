export default {
    titleTemplate: '%s | Arnol Codes',
    languageAlternate: {
        hrefLang: 'fr-FR',
        href: `${process.env.NEXT_PUBLIC_SITE_URL}/fr`,
      },
    openGraph: {
        type: 'website',
        url: process.env.NEXT_PUBLIC_SITE_URL,
        site_name: 'arnolcodes',
    },
    twitter: {
        handle: '@FokamArnol',
        cardType: 'summary',
    },
}