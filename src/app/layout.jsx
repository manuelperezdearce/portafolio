import Navbar from './components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'NGTech',
  description: '',
}



export default function RootLayout({ children }) {

  const bodyStyles = 'relative overflow-hidde text-2xl h-[100vh] flex flex-col items-center text-customWhite bg-[url("/bg2blur9px.jpeg")] bg-cover bg-no-repeat'
  return (
    <html lang="es">
      <body className={bodyStyles} >
        {children}
      </body>
    </html>
  )
}
