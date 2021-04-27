import Head from 'next/head'
import { useState } from 'react'
import '../components/Layout'
import Layout from '../components/Layout'

import axios from 'axios'

export default function Home(props) {

  const [name, setName] = useState()

  const handleClick = async (e) => {
    
    e.preventDefault();
    const name = await axios.get("/.netlify/functions/name")
    setName(name)
  };

  return (
    <div>
      <Head>
        <title>TrainNameGenerator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container flex flex-row flex-wrap justify-center content-center mx-auto">
          {name}
        </div>
        <button onClick={handleClick} className="bg-blue-500 px-4 py-2 text-xs font-semibold tracking-wider text-white rounded hover:bg-blue-600">Generate</button>
      </Layout>
    </div >
  )
}
