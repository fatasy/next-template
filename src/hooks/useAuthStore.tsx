import { destroyCookie, setCookie } from 'nookies'

import { signInRequest } from '@services/auth'

import { AUTH_TOKEN_NAME } from '@constants/auth.constants'
import api from '@services/api'
import { SignInData } from '@validations/singIn.validations'
import { User } from '@validations/user.validations'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type AuthStoreType = {
  user?: User
  isAuthenticated: boolean
  inAuthentication?: boolean
  signIn: (data: SignInData) => Promise<void>
  singOut: () => void
}

export const useAuthStore = create(
  persist<AuthStoreType>(
    (set) => ({
      user: {} as User,
      isAuthenticated: false,
      inAuthentication: false,
      setUser: (user: User) => set({ user }),
      signIn: async (signInData: SignInData) => {
        set({ inAuthentication: true })
        const { token, user: userResult } = await signInRequest(signInData)
        setCookie(undefined, AUTH_TOKEN_NAME, token, {
          maxAge: 60 * 60 * 1, // 1 hour
          path: '/',
        })
        api.defaults.headers['Authorization'] = `Bearer ${token}`
        set({
          user: userResult,
          isAuthenticated: true,
          inAuthentication: false,
        })
      },
      singOut: () => {
        destroyCookie(undefined, AUTH_TOKEN_NAME)
        set({ user: {} as User, isAuthenticated: false })
      },
    }),
    {
      name: 'food-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
