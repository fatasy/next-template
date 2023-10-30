'use client'

import UserForm from '@/src/components/forms/UserForm'
import useUserMutation from '@/src/hooks/useUserMutation'
import { User } from '@/src/validations/user.validations'

export default function AddUserPage() {
  const { mutateAsync: addUser } = useUserMutation()

  async function handleSubmit(data: User) {
    await addUser({ data })
  }

  return <UserForm onSubmit={handleSubmit} />
}
