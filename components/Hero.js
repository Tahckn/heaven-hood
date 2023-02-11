import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { BackgroundCircles } from '.'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero({data}){
  
  const [text] = useTypewriter({
    words: [
      "WE-ARE-HEAVEN-HOOD",
      `${data.name}`,
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="rounded-full h-[210px] w-[200px] mx-auto drop-shadow-lg"
        src={data.image}
        priority={true}
        alt="pp"
        width={200}
        height={210}
      ></Image>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[13px]">
          {data.area}
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
