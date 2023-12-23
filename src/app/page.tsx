'use client'

import i18n from "@/i18n"

export default function HomePage() {
  return (
    <main className="h-screen">
      <h1>{i18n.t("welcome")}</h1>
    </main>
  )
}
