import { useDashboardLayoutStore } from '@/hooks/useDashboardLayoutStore'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Flex, Layout, Menu } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import {
  getSidebarLogoContainerProps,
  getSidebarLogoProps,
} from './sidebar.utils'

const { Sider } = Layout

const MAIN_MENU_ITEMS = [
  {
    key: '/dashboard/users',
    icon: <UserOutlined />,
    label: <Link href="/dashboard/users">Usuários</Link>,
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'nav 2',
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'nav 3',
  },
]

export function SidebarLayout() {
  const pathname = usePathname()
  const { collapsed, selectedKeys, setSelectedKeys } = useDashboardLayoutStore()

  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname, setSelectedKeys])

  return (
    <Sider
      className="!bg-white shadow-md border-r border-[#f0f0f0]"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Flex
        align="center"
        justify="center"
        {...getSidebarLogoContainerProps({ collapsed })}
      >
        <Image
          src="/next.svg"
          alt="logo"
          {...getSidebarLogoProps({ collapsed })}
        />
      </Flex>
      <Menu
        className="main mt-2"
        mode="inline"
        items={MAIN_MENU_ITEMS}
        selectedKeys={selectedKeys}
      />
    </Sider>
  )
}
