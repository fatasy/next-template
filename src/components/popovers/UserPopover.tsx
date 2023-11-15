import { AUTH_SIGN_IN_PATH } from '@/constants/auth.constants'
import { useAuthStore } from '@/hooks/useAuthStore'
import { getMenuItemsWithDefaultClass } from '@/utils/menu.utils'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'

import { Avatar, Button, Flex, Popover, Typography } from 'antd'
import { useRouter } from 'next/navigation'

const USER_MENU_ITEMS = getMenuItemsWithDefaultClass(
  [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'nav 1',
      className: '!w-full !rounded-none',
    },
  ],
  '!mx-0 !w-full !rounded-none'
)

export function UserPopover() {
  const Router = useRouter()
  const { user, singOut: authSingOut } = useAuthStore()

  function singOut() {
    authSingOut()
    Router.push(AUTH_SIGN_IN_PATH)
  }

  return (
    <Popover
      trigger="click"
      overlayInnerStyle={{ padding: 0, minWidth: 290 }}
      className="ml-auto"
      showArrow={false}
      content={
        <Flex vertical>
          <Flex className="p-5" align="center">
            <Avatar
              size={32}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <Typography.Text type="secondary">
              Ant Design (secondary)
            </Typography.Text>
            <Button
              type="text"
              size="large"
              icon={<LogoutOutlined size={32} />}
              onClick={singOut}
              className="ml-auto"
            />
          </Flex>
          {/* <Menu
            triggerSubMenuAction="click"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={USER_MENU_ITEMS}
          /> */}
        </Flex>
      }
    >
      <Button
        type="text"
        size="large"
        className="flex items-center justify-center"
      >
        <Avatar
          size={24}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </Button>
    </Popover>
  )
}
