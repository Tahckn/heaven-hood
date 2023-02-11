import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Projects({data}) {

  console.log(data.projects)

  return (
    <div className='h-screen flex flex-col max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h1 className='text-center uppercase tracking-[20px] text-gray-500 text-1xl'>Our Projects</h1>
      <div className='flex justify-center items-center space-x-8'>

      {data.projects.map((project)=>(
        <div className='text-center mb-4 ' key={project.name}>
          <Link href={project.link}>
          <p className='mb-2 font-semibold text-lg'>{project.name}</p>
          <Image
          className="rounded-md h-[210px] w-[200px] mx-auto drop-shadow-lg"
          src={project.image}
          priority={true}
          alt="pp"
          width={200}
          height={210}
          >
       </Image>
       </Link>
        </div>
      ))}
    </div>
      </div>
  )
}

export default Projects