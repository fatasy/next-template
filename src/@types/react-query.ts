import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";


type IdParam = number
type QueryParam = number

export type UseQueryOptionsType<R> = Omit<UseQueryOptions<R, AxiosError>, 'queryKey' | 'queryFn'>


export type UseQueryOptionsWithId<R> = {
  id: IdParam
} & UseQueryOptionsType<R>


export type UseQueryOptionsWithQuery<R> = {
  query: QueryParam
} & UseQueryOptionsType<R>