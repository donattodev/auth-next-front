import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function AvatarProfile() {
  return (
    <Avatar className="border-2 border-neutral-100 dark:border-primary">
      <AvatarImage src="https://github.com/donattodev.png" />
      <AvatarFallback>DD</AvatarFallback>
    </Avatar>
  )
}
