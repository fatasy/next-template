import { UserPopover } from '@/components/popovers/UserPopover'
import { useDashboardLayoutStore } from '@/hooks/useDashboardLayoutStore'
import { Button, Layout } from 'antd'
import { getButtonToggleSidebarProps } from './header.utils'

const { Header } = Layout
export default function DashboardHeaderLayout({
  children,
}: React.ComponentProps<typeof Header>) {
  const { collapsed, setCollapsed } = useDashboardLayoutStore()

  return (
    <Header className="!bg-white flex items-center justify-center h-16 w-full !bg-inherit  !p-4 border-0 !border-solid !border-b-1 border-[#f0f0f0]">
      <Button
        {...getButtonToggleSidebarProps({ collapsed })}
        onClick={() => setCollapsed(!collapsed)}
      />
      {children}
      <UserPopover />
    </Header>
  )
}
