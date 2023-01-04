'use client'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/profilePic.png'
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
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/item3"> سیستم پشتیبانی </Link>
      </Typography> */}
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/item3"> رسانه </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/item2"> محصولات </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/item1"> درباره ما </Link>
      </Typography>
    </ul>
  )
  return (
    <ThemeProvider>
      <html lang="en">
        <body>
          <div className="container">
            <Navbar className="rounded-lg bg-gray-200 py-2 px-4">
              <div className="text-blue-gray-900 flex items-center justify-between">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                  <Image
                    src={profilePic}
                    alt="unu"
                    width="64"
                    height="64"
                    className="rounded-full"
                  />
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden lg:inline-block"
                  color="blue-gray"
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
                <Button
                  variant="gradient"
                  size="sm"
                  fullWidth
                  className="mb-2"
                  color="blue-gray"
                >
                  <Link href="/ ">صفحه اصلی</Link>
                </Button>
              </MobileNav>
            </Navbar>
          </div>
          <div className="container">{children}</div>
          <div className="container">
            {' '}
            <div
              className="mt-20 flex gap-5  rounded-lg bg-gray-200"
              dir="rtl"
              style={{ height: 300 }}
            >
              <div className="m-5">
                <ul className="text-blue-gray-600 gap-4">
                  <li className="nav-item">
                    <Link href="/item1"> آشنایی با صدرا برگ </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/item1"> ارزش‌هـــایِ کلیدی </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="index.html">تاریخچۀ صدرا برگ </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/item1">
                      سرمایۀ انسانی و مسئولیت‌های اجتماعی
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="m-5">
                <ul className="text-blue-gray-600">
                  <li className="nav-item">
                    <Link href="/item1"> آشنایی با صدرا برگ </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/item1"> ارزش‌هـــایِ کلیدی </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="index.html">تاریخچۀ صدرا برگ </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/item1">
                      سرمایۀ انسانی و مسئولیت‌های اجتماعی
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </body>
      </html>
    </ThemeProvider>
  )
}
