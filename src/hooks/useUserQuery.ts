import { useQuery } from '@tanstack/react-query'
import { defaultApiQueryFn } from '@utils/axios'
import {
  UseQueryOptionsWithId,
  UseQueryOptionsWithQuery,
} from '../@types/react-query'
import { User } from '../validations/user.validations'

const USER_QUERY_KEY = 'user'
const USERS_QUERY_KEY = USER_QUERY_KEY.concat('s')
const API_USER_URL = USERS_QUERY_KEY

export function useUserQuery({ id, ...options }: UseQueryOptionsWithId<User>) {
  return useQuery({
    queryKey: [USER_QUERY_KEY, id],
    queryFn: () =>
      defaultApiQueryFn<User>({
        url: API_USER_URL,
        query: id,
      }),
    ...options,
  })
}

export function useUsersQuery({
  query,
  ...options
}: UseQueryOptionsWithQuery<Array<User>>) {
  return useQuery({
    queryKey: [USERS_QUERY_KEY, query],
    queryFn: () =>
      defaultApiQueryFn<Array<User>>({
        url: API_USER_URL,
      }),
    ...options,
  })
}
