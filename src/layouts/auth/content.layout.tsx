import { Layout } from 'antd'
import React from 'react'

const { Content } = Layout

type AuthContentLayoutProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof Content>

export function AuthContentLayout({
  children,
  ...props
}: AuthContentLayoutProps) {
  return (
    <Content {...props} className="flex items-center justify-center">
      {children}
    </Content>
  )
}
