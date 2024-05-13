import { UserButton } from '@clerk/nextjs'

import { navLinks } from '@/constants'
import { Logo } from '@/components/Logo'

import { NavbarItem } from './NavbarItem'
import { ThemeSwitcherButton } from './ThemeSwitcherButton'

export function Navbar() {
  return (
    <>
      <DesktopNavbar />
    </>
  )
}

function DesktopNavbar() {
  return (
    <header className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex items-center gap-x-4 h-[80px] min-h-[60px]">
          <Logo />

          <ul className="flex h-full">
            {navLinks.map((link) => (
              <NavbarItem key={link.id} link={link.link} label={link.label} />
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcherButton />
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
    </header>
  )
}
