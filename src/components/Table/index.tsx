import { Table as AntTable, type TableProps as AntTableProps } from 'antd'
import { AnyObject } from 'antd/es/_util/type'

export type TableProps<RecordType> = AntTableProps<RecordType>

export function Table<RecordType extends AnyObject = AnyObject>({
  dataSource,
  ...props
}: TableProps<RecordType>) {
  return (
    <AntTable
      rowKey="id"
      loading={dataSource === undefined}
      dataSource={dataSource}
      {...props}
    />
  )
}
