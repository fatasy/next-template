import { defaultNS, fallbackNS, resources } from '@/i18n/index'

declare module 'i18next' {
  // eslint-disable-next-line
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    fallbackNS: typeof fallbackNS
    resources: (typeof resources)['pt']
  }
}
