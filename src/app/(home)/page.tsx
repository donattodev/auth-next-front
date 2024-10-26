import { SignIn } from '@/elements/auth/sign-in'
import { Separador } from '@/components/ui/separador'
import { NextLogo } from '@/components/logo/logo-next'
import { BtnGithub } from '@/elements/auth/btn-gitgub'

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xs flex-col items-center justify-center gap-5">
      <NextLogo className="w-32" />
      <SignIn />
      <Separador />
      <BtnGithub />
    </main>
  )
}
