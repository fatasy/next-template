import { FormType } from '@/src/@types/form.types'

import {
  SignInData,
  SingInFormValidation,
} from '@/src/validations/singIn.validations'
import { FormItem } from '@components/FormItem'
import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd'
import { useForm } from 'react-hook-form'

export default function SingInForm({
  data,
  inSubmit,
  onSubmit,
}: FormType<SignInData>) {
  const { control, handleSubmit } = useForm<SignInData>({
    resolver: SingInFormValidation,
    defaultValues: data,
  })

  return (
    <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
      <FormItem control={control} name="login">
        <Input type="email" size="large" placeholder="Endereço de email" />
      </FormItem>
      <FormItem control={control} name="password">
        <Input.Password size="large" placeholder="Senha" />
      </FormItem>

      <FormItem control={control} name="remember" valuePropName="checked">
        <Flex>
          <Checkbox>Lembre de mim</Checkbox>
          <Typography.Link
            className="login-form-forgot ml-auto !text-black"
            href=""
          >
            Esqueceu sua senha?
          </Typography.Link>
        </Flex>
      </FormItem>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          disabled={inSubmit}
          block
          loading={inSubmit}
        >
          Entrar
        </Button>
      </Form.Item>
    </Form>
  )
}
