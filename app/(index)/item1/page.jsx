/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client'
import autoprefixer from 'autoprefixer'
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Input,
//   Checkbox,
//   Button,
// } from '@material-tailwind/react'
import Image from 'next/image'

export default function item3() {
  return (
    <div className="px-52" dir="rtl">
      <div className="flex flex-row flex-wrap justify-center gap-4 ">
        <h1 className="text-blue-gray-500 my-12 text-6xl font-bold">
          آشنایی با شرکت صدرا برگ{' '}
        </h1>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
      <div>
        <h1 className="text-blue-gray-500 my-6 text-4xl font-bold">
          داستان ما
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-4 ">
        <div style={{ height: 400 }} className="bg-gray-900">
          1
        </div>
        <div className="col-span-2 bg-red-400" style={{ height: 400 }}>
          2
        </div>

        <div className="bg-blue-400">3</div>
        <div className="bg-red-300" style={{ height: 400 }}>
          4
        </div>
        <span className="col-span-2 bg-slate-500">5</span>
      </div>
    </div>
  )
}
