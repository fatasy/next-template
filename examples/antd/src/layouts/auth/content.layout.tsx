import { Layout } from 'antd'
import clsx from 'clsx'
import React from 'react'

const { Content } = Layout

type AuthContentLayoutProps = {
  children: React.ReactNode
} & React.ComponentProps<typeof Content>

export function AuthContentLayout({
  children,
  className,
  ...props
}: AuthContentLayoutProps) {
  return (
    <Content
      {...props}
      className={clsx('flex items-center justify-center', className)}
    >
      {children}
    </Content>
  )
}
