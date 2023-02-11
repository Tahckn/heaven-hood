import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

function About({data}){

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-36 uppercase tracking-[20px] text-gray-500 text-1xl">
        About
      </h3>

      {/* //! viewport makes it animate once */}
      <motion.div
        className="flex items-center relative -mb-20 md:mb-0 flex-shrink-0 
         w-56 h-56  xl:w-[300px] xl:h-[400px]"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          src={ data.image2 }
          width={300}
          height={300}
          alt="photo"
          className="rounded-md h-auto w-auto "
        ></Image>
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Who {' '}
          <span className="underline decoration-[#F7AB0A]/60">am</span>{' '}
          I ?
        </h4>
        <p className="text-base">
         {data.description}
        </p>
      </div>
    </motion.div>
  )
}

export default About
