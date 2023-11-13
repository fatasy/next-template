'use client'

import { Table, TableProps } from '@/src/components/Table/index.table'
import { useUsersQuery } from '@/src/hooks/useUserQuery'
import { User } from '@/src/validations/user.validations'
import Link from 'next/link'

const columns: TableProps<User>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'FistName',
    dataIndex: 'name',
  },
  {
    title: 'LastName',
    dataIndex: 'password',
  },
]

export default function UsersPage() {
  const { data } = useUsersQuery({ query: 1 })

  return (
    <main className="h-screen">
      <h1>Users Page</h1>
      <Link href="/users/add">Add User</Link>
      <Link href="/users/edit/1">Edit User</Link>
      <Table columns={columns} dataSource={data} />
    </main>
  )
}
