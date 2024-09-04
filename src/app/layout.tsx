import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trust Security',
  description: 'Seja bem-vindo(a) ao nosso sistema de gestão.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="h-screen">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.className} h-screen`}>
        {children}
      </body>
    </html>
  )
}
