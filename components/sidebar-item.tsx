'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from './ui/button'

type Props = {
  label: string
  iconSrc: string
  href: string
}

export const SidebarItem: React.FC<Props> = ({ href, iconSrc, label }) => {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <div>
      <Button
        variant={active ? 'sidebarOutline' : 'sidebar'}
        className='justify-start h-[52px] w-full'
        asChild
      >
        <Link href={href}>
          <Image
            src={iconSrc}
            alt={label}
            className='mr-5'
            height={32}
            width={32}
          />
          {label}
        </Link>
      </Button>
    </div>
  )
}
