
'use client'

import { Provider } from 'react-redux'
import { store } from './features/store/store'
import './globals.css'

export default function RootLayout({ children }) {

  const bodyStyles = 'relative overflow-hidden text-2xl h-[100vh] flex flex-col items-center text-customWhite bg-[url("/bg1blur12px.jpg")] bg-cover bg-no-repeat'
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
