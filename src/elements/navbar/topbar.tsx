import { AvatarProfile } from './avatar'
import { NextLogo } from '@/components/logo/logo-next'
import { ModeToggle } from '@/components/themes/mode-toggle'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export function Topbar() {
  return (
    <nav className="flex w-full justify-between bg-neutral-300 px-16 py-4 dark:bg-neutral-900">
      <Link href="/dashboard" className="flex items-center gap-3">
        <NextLogo className="w-6" />
        <span className="font-bold uppercase">Auth Next</span>
      </Link>
      <ul className="flex items-center gap-4 text-sm font-semibold uppercase text-neutral-500">
        <li>
          <Link href="/dashboard">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Docs</Link>
        </li>

        <li>
          <ModeToggle />
        </li>

        <li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AvatarProfile />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="mt-8 w-60 bg-neutral-900"
              align="end"
            >
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Configurações</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/api/auth/logout">Sair</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  )
}
