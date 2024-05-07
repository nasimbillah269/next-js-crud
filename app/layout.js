import Navber from '@/componets/Navber'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crud Oparation',
  description: 'Next Js Crud Oparation Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
            <Navber></Navber>
            {children}
        </div>
        </body>
    </html>
  )
}
