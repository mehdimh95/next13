/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import next from 'next'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'

export default function item3() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setNews(data))
  }, [])

  return (
    <div className=" flex flex-row flex-wrap justify-center gap-4">
      {news.map((item) => (
        <div key={item.id} className="mt-14">
          <Card className="w-96 ">
            <CardHeader color="blue" className="relative h-56">
              <img
                src={item.image}
                alt="img-blur-shadow"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h5" className="relative mb-2 line-clamp-1">
                {item.title}
              </Typography>
              <Typography className="trans line-clamp-3 ">
                {item.description}
              </Typography>
            </CardBody>
            <CardFooter
              divider
              className="flex items-center justify-between py-3"
            >
              <Typography variant="small">{item.price}</Typography>
              <Typography variant="small" color="gray" className="flex gap-1">
                <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                {item.category}
              </Typography>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  )
}
