import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { withTranslation } from '../i18n'
import { SITE_TITLE, SITE_DESCRIPTION } from '../constants/site'

function Home({ t }) {
  return (
    <div>
      <NextSeo
        title={SITE_TITLE}
        description={SITE_DESCRIPTION}
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
          property: 'twitter:image',
          content: `${process.env.NEXT_PUBLIC_SITE_URL}/images/avatar.png`
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
