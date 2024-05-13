import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { CurrencyComboBox } from '@/components/CurrencyComboBox'

export default async function WizardPage() {
  const user = await currentUser()

  if (!user) redirect('/sign-in')

  return (
    <main className="container flex max-w-2xl flex-col items-center justify-between gap-4">
      <div>
        <h1 className="text-center text-3xl">
          Bem-vindo,{' '}
          <span className="ml-2 font-bold">{user.firstName}! 👋</span>
        </h1>

        <h2 className="mt-4 text-center text-base text-muted-foreground">
          Vamos começar configurando a sua moeda corrente.
        </h2>

        <h3 className="mt-4 text-center text-base text-muted-foreground">
          Você pode mudar estas configurações a qualquer momento.
        </h3>
      </div>

      <Separator />

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Moeda</CardTitle>
          <CardDescription>
            Defina a sua moeda padrão para transações
          </CardDescription>
        </CardHeader>

        <CardContent>
          <CurrencyComboBox />
        </CardContent>
      </Card>

      <Separator />
      <Button className="w-full" asChild>
        <Link href={'/'}>Terminei! Vá para a dashboard</Link>
      </Button>

      <div className="mt-8">
        <Logo />
      </div>
    </main>
  )
}
