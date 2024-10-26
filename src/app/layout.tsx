import '../styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Roboto as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/themes/theme-provider'

const roboto = FontSans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Auth Termplate - Next Js 14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
