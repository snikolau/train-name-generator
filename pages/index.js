import Head from 'next/head'
import { useState } from 'react'
import '../components/Layout'
import Layout from '../components/Layout'
import generator from '../src/generator'

export default function Home(props) {


  const [name, setName] = useState(generator())

  const handleClick = (e) => {
    
    e.preventDefault();
   
    setName(generator())
  };

  return (
    <div>
      <Head>
        <title>TrainNameGenerator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col align-middle justify-items-center">
        <div className="container flex flex-row flex-wrap justify-center content-center mx-auto font-blac text-xl md:text-6xl text-gray-600 my-12 md:my-36 whitespace-pre-wrap">
          {name || ' '}
        </div>
        <div className="flex-1 self-center">
          <button onClick={handleClick} className="bg-green-400 px-8 py-4 text-sm font-bold tracking-wider text-white rounded hover:bg-green-600 md:w-96">Generate</button>
        </div>

        <div className="flex-1 self-center mt-24">
         <div className="px-2">API</div>
         <div className="bg-gray-200 text-gray-700 m-2 p-7 rounded-sm border-gray-600">curl https://trainnamegenerator.netlify.app/api/name</div>  
        </div>       
        </div>
      </Layout>
    </div >
  )
}
