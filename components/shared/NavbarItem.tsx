'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface NavbarItemProps {
  link: string
  label: string
  closeSheet?: () => void
}
export function NavbarItem({ link, label, closeSheet }: NavbarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === link

  return (
    <li className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'w-full justify-start text-lg text-muted-foreground hover:text-foreground',
          isActive && 'text-foreground'
        )}
        onClick={() => {
          if (closeSheet) closeSheet()
        }}
      >
        {label}
      </Link>

      {isActive && (
        <div className="absolute -bottom-[2px] left-1/2 h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground hidden md:block" />
      )}
    </li>
  )
}
