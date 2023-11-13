import { Layout } from 'antd'
import React from 'react'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout className="!h-screen">{children}</Layout>
}
