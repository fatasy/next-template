import { setPaginationQueryData } from '@/utils/react-query.utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { defaultApiActionFn } from '@utils/axios'
import {
  MutationOptionsType,
  MutationResultType,
  MutationTypeVariables,
} from '../@types/react-query.types'
import { ExameGroup } from '../validations/exame-group.validations'
import {
  EXAME_GROUPS_QUERY_KEY,
  useExameGroupsResult,
} from './useExameGroupQuery'

export default function useExameGroupMutation(
  options?: MutationOptionsType<ExameGroup>
): MutationResultType<ExameGroup> {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, data, del }) =>
      defaultApiActionFn<ExameGroup>({
        url: '/examsGroup',
        id,
        del,
        data,
      }),
    onSuccess(data, variables) {
      queryClient.setQueryData(
        [EXAME_GROUPS_QUERY_KEY, undefined],
        (prev: useExameGroupsResult) => {
          return setPaginationQueryData<
            ExameGroup,
            useExameGroupsResult,
            MutationTypeVariables<ExameGroup>
          >(data, prev, variables)
        }
      )
    },
    ...options,
  })
}
