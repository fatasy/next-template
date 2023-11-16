import { ApiPaginationResult } from '@/@types/api.types'
import {
  UseQueryOptionsWithId,
  UseQueryOptionsWithQuery,
} from '@/@types/react-query.types'
import { useQuery } from '@tanstack/react-query'
import { defaultApiQueryFn } from '@utils/axios'
import { ExameGroup } from '@validations/exame-group.validations'

export type useExameGroupsResult = ApiPaginationResult<ExameGroup>

const EXAME_GROU_QUERY_KEY = 'examsGroup'
export const EXAME_GROUPS_QUERY_KEY = EXAME_GROU_QUERY_KEY.concat('s')
const API_EXAME_GROU_URL = EXAME_GROU_QUERY_KEY

export function useExameGroupQuery({
  id,
  ...options
}: UseQueryOptionsWithId<ExameGroup>) {
  return useQuery({
    queryKey: [EXAME_GROU_QUERY_KEY, id],
    queryFn: () =>
      defaultApiQueryFn<ExameGroup>({
        url: API_EXAME_GROU_URL,
        query: id,
      }),
    ...options,
  })
}

export function useExameGroupsQuery(
  { query, ...options } = {} as UseQueryOptionsWithQuery<useExameGroupsResult>
) {
  return useQuery({
    queryKey: [EXAME_GROUPS_QUERY_KEY, query],
    queryFn: () =>
      defaultApiQueryFn<useExameGroupsResult>({
        url: API_EXAME_GROU_URL,
      }),
    ...options,
  })
}
