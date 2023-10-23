import Navbar from './components/Navbar/Navbar'
import './globals.css'

export const metadata = {
  title: 'Portafolio',
  description: '',
}



export default function RootLayout({ children }) {

  const bodyStyles = 'relative overflow-hidde text-2xl h-[100vh] flex flex-col items-center text-customWhite bg-[url("/bg1blur12px.jpg")] bg-cover bg-no-repeat'
  return (
    <html lang="es">
      <body className={bodyStyles} >
        {children}
      </body>
    </html>
  )
}
