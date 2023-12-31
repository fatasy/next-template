import clsx from 'clsx'
import React from 'react'


type AuthContentLayoutProps = {
  children: React.ReactNode
}

export function AuthContentLayout({
  children,
  className,
  ...props
}: AuthContentLayoutProps) {
  return (
    <div
      {...props}
      className={clsx('flex items-center justify-center', className)}
    >
      {children}
    </div>
  )
}
