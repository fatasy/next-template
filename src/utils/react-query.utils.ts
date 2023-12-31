import { ApiPaginationResult } from '@/@types/api'

export function setPaginationQueryData<
  TResult extends Record<string, any>,
  TData extends ApiPaginationResult<TResult>,
  TVariables extends Record<string, any>
>(data: TResult, { content, ...prev }: TData, variables: TVariables) {
  if ('del' in variables) {
    return {
      ...prev,
      content: content.filter((item) => item.id !== variables.id),
    }
  }
  return {
    ...prev,
    content: variables.id
      ? content.map((item) => (item.id === data.id ? data : item))
      : [...content, data],
  }
}
