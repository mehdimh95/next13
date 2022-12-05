'use client'
import './globals.css'

import Link from 'next/link'

import { ThemeProvider } from '@material-tailwind/react'

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <ul className="">
            <li>
              <Link href="/ ">صفحه اصلی</Link>
            </li>

            <li>
              <Link href="/item1">ثبت نام</Link>
            </li>
            <li>
              <Link href="/item2">ثبت</Link>
            </li>
            <li>
              <Link href="/item3">دانشجویان</Link>
            </li>
          </ul>

          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
