'use client'

import { ExameGroup } from '@/validations/exame-group.validations'
import { Table, TableProps } from '@components/Table'
import {
  useExameGroupsQuery,
  useExameGroupsResult,
} from '@hooks/useExameGroupQuery'
import { DashboardLayout as Layout } from '@layouts/dashboard'

const columns: TableProps<ExameGroup>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Nome',
    dataIndex: 'name',
  },
  {
    title: 'Ativo',
    dataIndex: 'active',
  },
]

export default function UsersPage() {
  const { data = {} as useExameGroupsResult } = useExameGroupsQuery()
  const { content } = data

  return (
    <Layout>
      <Layout.Sidebar />
      <Layout.Main>
        <Layout.Header />
        <Layout.content>
          <Table columns={columns} dataSource={content} />
        </Layout.content>
      </Layout.Main>
    </Layout>
  )
}
