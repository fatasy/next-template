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

  const getData = (count: number) => {
    const data: User[] = new Array(count).fill(null).map((_, index) => ({
      id: index,
      firstName: `First_${index.toString(16)}`,
      email: `Last_${index.toString(16)}`,
      lastName: `New York No. ${index} Lake Park`,
      phone: `London No. ${index} Lake Park`,
      url: `Sydney No. ${index} Lake Park`,
    }))

    return data
  }

  return (
    <main className="h-screen">
      <h1>Users Page</h1>
      <Link href="/users/add">Add User</Link>
      <Link href="/users/edit/1">Edit User</Link>
      <Table columns={columns} dataSource={data} />
    </main>
  )
}
