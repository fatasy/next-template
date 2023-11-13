'use client'

import SingInForm from '@/src/components/forms/SignInForm'
import { useAuthStore } from '@/src/hooks/useAuthStore'
import { AuthLayout as Layout } from '@layouts/auth'
import { Card, Typography } from 'antd'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SigninPage() {
  const Router = useRouter()
  const { signIn, isAuthenticated, inAuthentication } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) Router.push('/dashboard')
  }, [Router, isAuthenticated])

  return (
    <Layout>
      <Layout.content>
        <Card className="min-w-[470px] h-auto p-6" bordered={false}>
          <Typography.Title level={3} className="!mb-6">
            Faça login em sua conta
          </Typography.Title>
          <SingInForm onSubmit={signIn} inSubmit={inAuthentication} />
        </Card>
      </Layout.content>
    </Layout>
  )
}
