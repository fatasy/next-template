

import { User } from '@validations/user.validations'
import { SignInData } from '../validations/singIn.validations'
import api from './api'

export type SignInRequestData = {
  email: string
  password: string
}

export type signInRequestResult = {
  token: string
  snExpirada: boolean
  user: User
}

export type SignUpRequestData = {
  name: string
  password_confirmation: string
} & SignInRequestData

export async function signInRequest(
  signInData: SignInData,
): Promise<signInRequestResult> {
  const { data } = await api.post<signInRequestResult>('login', signInData)
  return data
}

export async function signUpRequest(signUpData: SignUpRequestData) {
  const { data } = await api.post<string>('auth/register', signUpData)
  return data
}

export async function recoverUserInformation() {
  return {
    user: {
      name: '',
      email: '',
      avatar_url: '',
    } as unknown as User,
  }
}
