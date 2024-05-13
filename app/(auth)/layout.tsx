import { Logo } from '@/components/Logo'

interface AuthLayoutProps {
  children: React.ReactNode
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      <Logo />
      <div className="mt-12">{children}</div>
    </div>
  )
}
