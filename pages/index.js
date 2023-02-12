import { About, Header, Hero, Projects } from '../components'

import Head from 'next/head'
import db from '../data/data.json'
import { useState } from 'react'

const Home = () => {
  let [data,setData] = useState(db.oguzhan)
  const toggleOguzhan=()=>{
    setData(db.oguzhan)
  }
 const toggleMansur=()=>{
  setData(db.mansur)
  }
 const toggleYasin=()=>{
  setData(db.yasin)
  }

  return (
    <div
      className="bg-[rgb(36,36,36)] text-white overflow-x-hidden h-screen snap-y snap-mandatory 
    overflow-scroll z-0"
    >
      <Head>
        <title>Heaven Hood</title>
        <meta name="description" content="Created by Tahckn" />
        <link rel="icon" href="/maskot.ico" />
      </Head>

      <Header data={data} />
      <div className='sticky top-20 max-w-7xl rounded-full mx-auto p-1 flex items-center
       items-start justify-center space-x-12 bg-[#F7AB0A]/80 text-gray-800 font-semibold z-10'>
        <button onClick={toggleOguzhan} className='px-5 hover:text-white hover:bg-[rgb(36,36,36)] py-2 rounded-full transition-all active:bg-[rgb(80,80,80)] duration-75'>{db.oguzhan.name}</button>
        <button onClick={toggleYasin} className='px-5 hover:text-white hover:bg-[rgb(36,36,36)] py-2 rounded-full transition-all active:bg-[rgb(80,80,80)] duration-75' >{db.yasin.name}</button>
        <button onClick={toggleMansur} className='px-5 hover:text-white hover:bg-[rgb(36,36,36)] py-2 rounded-full transition-all active:bg-[rgb(80,80,80)] duration-75' >{db.mansur.name}</button>
      </div>
      <section id="hero" className="snap-start">
        <Hero data={data}/>
      </section>
     
      
      <section id="about" className="snap-center">
        <About data={data}/>
      </section>

      <section id="projects" className='snap-center'>
        <Projects data={data}/> 
      </section>
    </div>
  )
}

export default Home
