import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { util } from '@monorepo/utils'
import axios from 'axios'

function MyApp() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    async function callAPI() {
      const request = await axios("http://localhost:4000")
      setMessage(request.data.message)
    }

    callAPI()
  })
  return <div className={styles.container}>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>Hello Next.js</h1>
      <p className={styles.description}>
        <code className={styles.code}>{util()}</code>
        </p>
      {message}
    </main>
  </div>
}

export default MyApp