import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { ButtonProps } from 'antd'

export const getButtonToggleSidebarProps = ({
  collapsed,
}: {
  collapsed: boolean
}): ButtonProps => ({
  type: collapsed ? 'text' : 'default',
  icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
})
