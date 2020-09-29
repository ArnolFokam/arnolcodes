import { NextSeo } from 'next-seo';

import { I18nPage, Trans, useTranslation } from '../i18n';

const Home: I18nPage = () => {
    const {
        t,
        i18n: { language }
    } = useTranslation();

    return (
        <div>
            <NextSeo
                title={t('home:headers.title')}
                description={t('home:headers.description')}
                languageAlternates={(() => {
                    const alternates = [
                        {
                            hrefLang: 'x-default',
                            href: `${process.env.NEXT_PUBLIC_SITE_URL}`
                        }
                    ];

                    if (language !== 'fr') {
                        alternates.push({
                            hrefLang: 'fr',
                            href: `${process.env.NEXT_PUBLIC_SITE_URL}/fr`
                        });
                    }

                    return alternates;
                })()}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_SITE_URL,
                    title: `${t('home:headers.title')} | Arnol Codes`,
                    description: t('home:headers.description'),
                    images: [
                        {
                            url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/avatar.png`,
                            width: 192,
                            height: 192,
                            alt: t('user avatar')
                        }
                    ]
                }}
                additionalMetaTags={[
                    {
                        property: 'twitter:image',
                        content: `${process.env.NEXT_PUBLIC_SITE_URL}/images/avatar.png`
                    },
                    {
                        property: 'twitter:image:alt',
                        content: t('home:headers.twitter:image:alt')
                    }
                ]}
            />
            <Trans i18nKey={'common:home'} />
        </div>
    );
};

Home.getInitialProps = async () => ({
    namespacesRequired: ['common', 'home']
});

export default Home;
