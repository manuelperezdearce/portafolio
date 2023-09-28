import Navbar from './components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'NGTech',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='text-2xl min-h-[100vh]' >

        {children}
      </body>
    </html>
  )
}
