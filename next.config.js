//const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/*module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
    }
  }

  return {
  }
}*/

import { nextI18NextRewrites } from 'next-i18next/rewrites';

const localeSubpaths = {
    fr: 'fr'
};

export async function rewrites() {
    return nextI18NextRewrites(localeSubpaths);
}
export const publicRuntimeConfig = {
    localeSubpaths
};
