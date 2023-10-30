import api from '@services/api'
import { AxiosRequestConfig } from 'axios'

type DefaultApiQueryFnParams<R> = AxiosRequestConfig<R> & {
  query?: string
}

export const defaultApiQueryFn = async <R>({
  url = '',
  query,
  ...config
}: DefaultApiQueryFnParams<R>): Promise<R> => {
  return await api(url.concat(query ? `/${query}` : ''), config)
}
