import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { z } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'
import mainFallback from './locales/pt-br/fallback.json'
import mainPtBr from './locales/pt-br/main.json'
import zodPtBr from './locales/pt-br/zod.json'
export const defaultNS = 'ns1'
export const fallbackNS = 'fallback'

export const resources = {
  pt: {
    zod: zodPtBr,
    ns1: mainPtBr,
    fallback: mainFallback,
  },
} as const

void i18n.use(initReactI18next).init({
  // debug: process.env.NODE_ENV === 'development',
  fallbackLng: 'pt-br',
  defaultNS,
  fallbackNS,
  resources: resources,
})

z.setErrorMap(zodI18nMap)

export default i18n
