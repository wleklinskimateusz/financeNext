import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Finance App</title>
        <meta name="description" content="Finance App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Main part of an appn
      </main>
    </div>
  )
}

export default Home
