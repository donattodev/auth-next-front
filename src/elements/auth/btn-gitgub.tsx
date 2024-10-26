import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function BtnGithub() {
  return (
    <Button variant={'outline'} className="w-full" asChild>
      <Link
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
      >
        Entrar com Github
      </Link>
    </Button>
  )
}
