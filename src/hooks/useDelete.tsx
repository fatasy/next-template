import { MutationResultType } from '@/@types/react-query.types'
import modal from 'antd/es/modal'

type useDeleteOptions = {
  name: string
}

type RecordType = {
  id?: number
} & Record<string, any>

export function useDelete<T extends RecordType>(
  useMutation: () => MutationResultType<T>,
  { name } = { name: 'name' } as useDeleteOptions
) {
  const { mutateAsync: del } = useMutation()

  function handleDelete({ [name]: title, id }: T) {
    modal.warning({
      title: 'Tem certeza que deseja deletar?',
      content: `Isso excluirá permanentemente "${title}", não sendo possível reverter exclusão.`,
      okText: 'Delete',
      cancelText: 'Cancelar',
      onOk() {
        console.log({ id })

        return new Promise(async (resolve) => {
          await del({ id, del: true })
          resolve(true)
        }).catch(() => console.log('Oops errors!'))
      },
    })
  }

  return {
    handleDelete,
  }
}
