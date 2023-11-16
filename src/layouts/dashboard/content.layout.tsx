import { Layout } from 'antd'

const { Content } = Layout

type DashboardContentLayoutProps = React.ComponentProps<typeof Content>

export function DashboardContentLayout({
  children,
  ...props
}: DashboardContentLayoutProps) {
  return (
    <Content {...props} className="!py-6 !my-4 mx-6">
      {children}
    </Content>
  )
}
