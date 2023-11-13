import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type DashboardLayoutStoreType = {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export const useDashboardLayoutStore = create(
  persist<DashboardLayoutStoreType>(
    (set) => ({
      collapsed: false,
      setCollapsed: (collapsed: boolean) => set({ collapsed }),
    }),
    {
      name: 'dashboard-layout-store',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
