
import './globals.css'
import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({ subsets: ['latin'] })

export const metadata = {
  title: 'Home | MediiBlog',
  description: 'People need to reach right source',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='comfortaa'>
        
        {children}
        </body>
    </html>
  )
}
