import { UserPopover } from '@/src/components/popovers/UserPopover'
import { useDashboardLayoutStore } from '@/src/hooks/useDashboardLayoutStore'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Layout } from 'antd'

const { Header } = Layout
export default function DashboardHeaderLayout({
  children,
}: React.ComponentProps<typeof Header>) {
  const { collapsed, setCollapsed } = useDashboardLayoutStore()
  return (
    <Header className="flex items-center justify-center h-16 w-full !bg-white !p-0 border-0 border-solid border-b border-[#f0f0f0] ">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
      />
      {children}
      <UserPopover />
    </Header>
  )
}
