import { Layout } from 'antd'

const { Content } = Layout

type DashboardContentLayoutProps = React.ComponentProps<typeof Content>

export function DashboardContentLayout({
  children,
  ...props
}: DashboardContentLayoutProps) {
  return (
    <Content {...props} className="flex align-center justify-center">
      {children}
    </Content>
  )
}
