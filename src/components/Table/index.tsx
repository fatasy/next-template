import { Table as AntTable, type TableProps as AntTableProps } from 'antd'
import { AnyObject } from 'antd/es/_util/type'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useTableStore } from './useTableStore'

export type TableProps<RecordType> = AntTableProps<RecordType>

export function Table<RecordType extends AnyObject = AnyObject>({
  dataSource,
  columns: columnsProp,
  className,
  ...props
}: TableProps<RecordType>) {
  const { size = 'middle', columns, setColumns } = useTableStore()

  useEffect(() => {
    if (columns !== columnsProp) setColumns(columns)
  }, [columns, columnsProp, setColumns])

  return (
    <AntTable
      size={size}
      columns={columnsProp}
      className={clsx('!shadow-md', className)}
      rowKey="id"
      loading={dataSource === undefined}
      dataSource={dataSource}
      {...props}
    />
  )
}
