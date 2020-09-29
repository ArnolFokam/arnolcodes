import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { useContext } from 'react'
import { I18nContext } from 'next-i18next'
import { withTranslation } from '../i18n'
import { SITE_TITLE, SITE_DESCRIPTION } from '../constants/site'

export const config = { amp: true }

function Home({ t }) {
  const { i18n: { language } } = useContext(I18nContext)

  return (
    <div>
      <NextSeo
        title={SITE_TITLE}
        description={SITE_DESCRIPTION}
        languageAlternates={(() => {
          let alternates = [{
            hrefLang: 'x-default',
            href: `${process.env.NEXT_PUBLIC_SITE_URL}`,
          }]

          if (language !== 'fr') {
            alternates.push({
              hrefLang: 'fr',
              href: `${process.env.NEXT_PUBLIC_SITE_URL}/fr`,
            })
          }

          return alternates
        })()}
        openGraph={{
          url: process.env.NEXT_PUBLIC_SITE_URL,
          title: `${SITE_TITLE} | Arnol Codes`,
          description: SITE_DESCRIPTION,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/avatar.png`,
              width: 192,
              height: 192,
              alt: 'user avatar',
            },
          ]
        }}
        additionalMetaTags={[{
          property: 'twitter:image',
          content: `${process.env.NEXT_PUBLIC_SITE_URL}/images/avatar.png`
        },
        {
          property: 'twitter:image:alt',
          content: 'Arnol\s avatar'
        }]}
      />
      <p>{t('home')}</p>
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)
