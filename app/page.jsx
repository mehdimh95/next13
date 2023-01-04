/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import profilePic from '../public/profilePic.png'
import Link from 'next/link'
// import './styles.css'
import SimpleImageSlider from 'react-simple-image-slider'

export default function Home() {
  const images = [
    { url: 'https://s26.picofile.com/file/8457987734/msg352656008_214852.jpg' },
    { url: 'https://s26.picofile.com/file/8457987784/msg352656008_214854.jpg' },
    { url: 'https://s26.picofile.com/file/8457987834/msg352656008_214856.jpg' },
    {
      url: 'https://s26.picofile.com/file/8457987900/msg352656008_214858.jpg',
    },
  ]

  return (
    <div className="App">
      <div className="mt-6 flex justify-center">
        <SimpleImageSlider
          showNavs="true"
          width={896}
          height={504}
          images={images}
        />
      </div>
    </div>
  )
}
