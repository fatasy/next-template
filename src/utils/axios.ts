import api from '@services/api'
import { AxiosRequestConfig } from 'axios'

type DefaultApiQueryFnParams<R> = AxiosRequestConfig<R> & {
  query?: string | number
  url: string
}

export const defaultApiQueryFn = async <R>({
  url,
  query,
  ...config
}: DefaultApiQueryFnParams<R>): Promise<R> => {
  const { data } = await api<R>(url.concat(query ? `/${query}` : '/'), config)
  return data
}

type DefaultApiActionFn<R> = DefaultApiQueryFnParams<R> & {
  id?: number | string
}

export const defaultApiActionFn = async <R>({
  url,
  query,
  id,
  ...config
}: DefaultApiActionFn<R>): Promise<R> => {
  return api(url.concat(query ? `/${query}` : ''), {
    method: id ? 'PUT' : 'POST',
    ...config,
  })
}
