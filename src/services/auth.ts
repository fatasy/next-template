import { SignInData, User } from '@/contexts/auth.context'
import api from './api'
import { delay } from '@/utils/dev.utils'

export type SignInRequestData = {
  email: string
  password: string
}

export type signInRequestResult = {
  data: {
    token: {
      expires: string
      token: string
    }
    snExpirada: boolean
  }
}

export type SignUpRequestData = {
  name: string
  password_confirmation: string
} & SignInRequestData

export async function signInRequest(
  signInData: SignInData,
): Promise<signInRequestResult> {
  const { data } = await api.post<signInRequestResult>('Auth/cota', {
    codigoGrupo: signInData.groupCode,
    codigoCota: signInData.QuotaCode,
    versao: signInData.version,
    senha: signInData.password,
  })
  return data
}

export async function signUpRequest(signUpData: SignUpRequestData) {
  const { data } = await api.post<string>('auth/register', signUpData)
  return data
}

export async function recoverUserInformation() {
  await delay()
  return {
    user: {
      name: '',
      email: '',
      avatar_url: '',
    } as unknown as User,
  }
}
