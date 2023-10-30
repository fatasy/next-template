import { useQuery } from '@tanstack/react-query'
import { defaultApiQueryFn } from '@utils/axios'
import { UseQueryOptionsWithId, UseQueryOptionsWithQuery } from '../@types/react-query'

const USER_QUERY_KEY = 'user'
const USERS_QUERY_KEY = USER_QUERY_KEY.concat('s')


export function useUserQuery({ id, ...options }: UseQueryOptionsWithId<any>) {
  return useQuery({
    queryKey: [USER_QUERY_KEY, id],
    queryFn: () => defaultApiQueryFn({
    }),
    ...options
  })
}


export function useUsersQuery({ query, ...options }: UseQueryOptionsWithQuery<any>) {
  return useQuery({
    queryKey: [USERS_QUERY_KEY, query],
    queryFn: () => defaultApiQueryFn({
    }),
    ...options
  })
}