import type { ReactNode } from 'react'
import { Topbar } from '@/elements/navbar/topbar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Topbar />
      <section className="px-16 py-6">{children}</section>
    </main>
  )
}
