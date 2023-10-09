import Navbar from './components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'NGTech',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html className='overflow-hidden' lang="es">
      <body className='relative overflow-hidden overscroll-none text-2xl h-[100vh] flex flex-col items-center text-customWhite' >
        <img className='z-0 absolute min-w-[100%] scale-110 min-h-[100%] grayscale-[0.6 brightness-50 blur-[4px]' src="/bg2.jpg" alt="" />
        {children}
      </body>
    </html>
  )
}
