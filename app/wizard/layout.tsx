interface WizardLayoutProps {
  children: React.ReactNode
}
export default function WizardLayout({ children }: WizardLayoutProps) {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      {children}
    </div>
  )
}
