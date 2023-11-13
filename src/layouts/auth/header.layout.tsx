import { Layout } from 'antd'

const { Header } = Layout
export default function AuthHeaderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Header className="h-16">{children}</Header>
}
