'use client'

import TableActionsTitle from '@/components/Table/Titles/TableActionsTitle'
import { ExameGroup } from '@/validations/exame-group.validations'
import { Table } from '@components/Table'
import {
  useExameGroupsQuery,
  useExameGroupsResult,
} from '@hooks/useExameGroupQuery'
import { DashboardLayout as Layout } from '@layouts/dashboard'
import { useState } from 'react'

import { useDelete } from '@/hooks/useDelete'
import useExameGroupMutation from '@/hooks/useExameGroupMutation'
import { useTableColumns } from '@/hooks/useTableColumns'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Flex, Tag } from 'antd'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

const AddOrEditExameGroupModal = dynamic(
  () => import('@/components/Modals/AddOrEditExameGroupModal'),
  {
    ssr: false,
  }
)

export default function ExameGroupPage() {
  const [selectedColumnEdit, setSelectedColumnEdit] = useState<ExameGroup>()
  const { handleDelete } = useDelete<ExameGroup>(useExameGroupMutation)
  const [columns, setColumns] = useTableColumns<ExameGroup>([
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
      render: (active) => (
        <Tag
          className={clsx('!text-white', {
            'bg-red-500': !active,
            'bg-blue-500': active,
          })}
        >
          {active ? 'Sim' : 'Não'}
        </Tag>
      ),
    },
    {
      key: 'actions',
      title: 'Ações',
      render: (_, record) => (
        <Flex gap="small">
          <Button
            size="small"
            type="text"
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedColumnEdit(record)
            }}
          />
          <Button
            size="small"
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
        </Flex>
      ),
    },
  ])
  const { data = {} as useExameGroupsResult, refetch } = useExameGroupsQuery()

  const { content } = data

  return (
    <Layout>
      <Layout.Sidebar />
      <Layout.Main>
        <Layout.Header />
        <Layout.content>
          <Table
            bordered
            title={() => (
              <TableActionsTitle
                onAddClick={() => setSelectedColumnEdit({} as ExameGroup)}
                onReloadClick={refetch}
                onChangeColumns={setColumns}
              />
            )}
            columns={columns}
            dataSource={content}
          />
        </Layout.content>
        <AddOrEditExameGroupModal
          open={Boolean(selectedColumnEdit)}
          data={selectedColumnEdit}
          onFinish={() => setSelectedColumnEdit(undefined)}
        />
      </Layout.Main>
    </Layout>
  )
}
