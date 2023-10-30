import { AxiosError } from "axios"


export type ApiPaginationMetaResult = {
  total: number
  per_page: number
  current_page: number
  last_page: number
  first_page: number
  first_page_url: string
  last_page_url: string
  next_page_url: string | null
  previous_page_url: string | null
}

export type ApiPaginationResult<D = unknown> = {
  meta: ApiPaginationMetaResult
  data: Array<D>
}

export type ApiResult<D = unknown> = {
  data: D
}


export type ApiErrorWithAxios = AxiosError<{
  success: boolean
  errors: Array<string>
}>