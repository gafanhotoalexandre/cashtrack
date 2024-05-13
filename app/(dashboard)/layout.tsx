interface DashboardLayoutProps {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="relative flex flex-col h-screen w-full">
      <div className="w-full">{children}</div>
    </div>
  )
}
