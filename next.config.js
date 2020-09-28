const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/*module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
    }
  }

  return {
  }
}*/

const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  fr: 'fr',
}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}