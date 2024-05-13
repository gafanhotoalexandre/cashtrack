'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'

import { MobileLogo, Logo } from '../Logo'
import { NavbarItem } from './NavbarItem'
import { ThemeSwitcherButton } from './ThemeSwitcherButton'

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-6">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant={'ghost'} size={'icon'}>
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-[400px] sm:w-[540px]" side={'left'}>
            <Logo />

            <ul className="flex flex-col gap-1 pt-4">
              {navLinks.map(({ id, label, link }) => (
                <NavbarItem
                  key={id}
                  label={label}
                  link={link}
                  closeSheet={() => setIsOpen((prev) => !prev)}
                />
              ))}
            </ul>
          </SheetContent>
        </Sheet>

        <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
          <MobileLogo />
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcherButton />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </header>
  )
}
