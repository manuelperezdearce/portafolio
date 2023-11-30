
'use client'

import { Provider } from 'react-redux'
import { store } from './features/store/store'
import './globals.css'

export default function RootLayout({ children }) {

  const bodyStyles = 'relative overflow-hidden h-screen text-2xl flex flex-col items-center text-customWhite bg-[url("/bgcolor1.jpeg")] bg-cover bg-center bg-no-repeat'
  return (
    <html lang="es">
      <body className={bodyStyles} >
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
