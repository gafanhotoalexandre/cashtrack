import { Navbar } from '@/components/shared/Navbar'

interface DashboardLayoutProps {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  )
}
