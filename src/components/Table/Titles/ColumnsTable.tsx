'use client'
import { MenuOutlined } from '@ant-design/icons'
import { DndContext } from '@dnd-kit/core'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Flex, Typography } from 'antd'
import { useTableStoreType } from '../useTableStore'

type ColumnsTableProps = {
  columns: useTableStoreType['columns']
  onChangeColumns?: useTableStoreType['setColumns']
}

export function ColumnsTable({ columns, onChangeColumns }: ColumnsTableProps) {
  const handleDragEnd = (event: any) => {
    const { active, over } = event
    if (active.id !== over.id) {
      const oldIndex = columns.findIndex(
        ({ dataIndex }) => dataIndex === active.id
      )
      const newIndex = columns.findIndex(
        ({ dataIndex }) => dataIndex === over.id
      )
      return onChangeColumns?.(arrayMove(columns, oldIndex, newIndex))
    }
  }

  return (
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={handleDragEnd}>
      <SortableContext
        items={columns.map(({ dataIndex }) => dataIndex as string)}
        strategy={verticalListSortingStrategy}
      >
        <Flex vertical className="min-w-[200px]">
          {columns.map((column) => (
            <SortableItem key={column.dataIndex} {...column} />
          ))}
        </Flex>
      </SortableContext>
    </DndContext>
  )
}

const SortableItem = ({
  dataIndex,
  title,
}: useTableStoreType['columns'][0]) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: dataIndex,
  })

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  }

  return (
    <Flex ref={setNodeRef} style={style} data-id={dataIndex} {...attributes}>
      <Flex
        align="center"
        ref={setActivatorNodeRef}
        style={{ touchAction: 'none', cursor: 'move' }}
        className="w-full p-2"
        {...listeners}
      >
        <MenuOutlined className="mr-4" />
        <Typography.Text>{title as string}</Typography.Text>
      </Flex>
    </Flex>
  )
}
