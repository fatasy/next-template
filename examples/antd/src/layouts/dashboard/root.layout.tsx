import { Layout } from 'antd'
import React from 'react'

type DashboardLayoutProps = React.ComponentProps<typeof Layout>
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return <Layout className="!h-screen">{children}</Layout>
}
