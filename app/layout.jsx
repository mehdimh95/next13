'use client'
import './globals.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react'

import { ThemeProvider } from '@material-tailwind/react'

export default function RootLayout({ children }) {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/item3"> تماس با ما </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/item3"> سیستم پشتیبانی </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/item3"> سایت آموزش </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/item2"> آرشیو اخبار </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/item1"> ورود</Link>
      </Typography>
    </ul>
  )
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="mr-4 cursor-pointer py-1.5 font-normal"
              >
                <span>لوگو</span>
              </Typography>
              <div className="hidden lg:block">{navList}</div>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <Link href="/ "> صفحه اصلی </Link>
                ‍‍‍‍‍
              </Button>
              ‍‍‍
              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            </div>
            <MobileNav open={openNav}>
              {navList}
              <Button variant="gradient" size="sm" fullWidth className="mb-2">
                <Link href="/ ">صفحه اصلی</Link>
              </Button>
            </MobileNav>
          </Navbar>

          {/* <div className="flex flex-row-reverse  justify-between">
            <ul className="flex gap-3">
              <li>
                <Link href="/item3">دانشجویان</Link>
              </li>

              <li>
                <Link href="/item1">ثبت نام</Link>
              </li>

              <li>
                <Link href="/ ">صفحه اصلی</Link>
              </li>
            </ul>
            <h1>UNIU</h1>
          </div> */}
          {children}
        </body>
      </html>
    </ThemeProvider>
  )
}
