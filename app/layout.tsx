import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

import './globals.css'
import RootProviders from '@/providers/RootProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CashTrack',
  description: 'Seu Caminho para uma Gestão Financeira Eficiente',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-br" className="dark" style={{ colorScheme: 'dark' }}>
        <body className={inter.className}>
          <RootProviders>{children}</RootProviders>
        </body>
      </html>
    </ClerkProvider>
  )
}
