import Navbar from './components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'NGTech',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='relative overflow-hidden text-2xl h-[100vh] flex flex-col items-center' >
        <img className='z-0 absolute w-[100vw] scale-110 min-h-[100vh] grayscale-[0.6] brightness-75 blur-[4px]' src="/bg.jpg" alt="" />
        {children}
      </body>
    </html>
  )
}
