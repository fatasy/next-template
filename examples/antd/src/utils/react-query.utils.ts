import { ApiPaginationResult } from '@/@types/api.types'

export function setPaginationQueryData<
  TResult extends Record<string, any>,
  TData extends ApiPaginationResult<TResult>,
  TVariables extends Record<string, any>
>(data: TResult, { content, ...prev }: TData, variables: TVariables) {
  if ('del' in variables) {
    return {
      ...prev,
      content: content.filter((exame) => exame.id !== variables.id),
    }
  }
  return {
    ...prev,
    content: variables.id
      ? content.map((exame) => (exame.id === data.id ? data : exame))
      : [...content, data],
  }
}
