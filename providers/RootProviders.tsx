'use client'

import { ThemeProvider } from 'next-themes'

interface RootProvidersProps {
  children: React.ReactNode
}
export default function RootProviders({ children }: RootProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
