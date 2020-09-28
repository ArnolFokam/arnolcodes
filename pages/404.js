
import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'
import { NextSeo } from 'next-seo'

function NotFound({ t }) {
  return (
    <div>
      <NextSeo title='Page Not Found' description={process.env.description} />
      <p>{t('error')}</p>
    </div>
  )
}

NotFound.getInitialProps = async () => ({
  namespacesRequired: ['404'],
})

NotFound.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('404')(NotFound)