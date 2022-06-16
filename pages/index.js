import Head from 'next/head'
import Header from '../components/Header'
import RaffleEnterence from '../components/RaffleEnterence'
import styles from '../styles/Home.module.css'
// import ManualHeader from '../Components/ManualHeader'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MH Raffle</title>
        <meta name="description" content="Our Smart Contract Lottery" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <ManualHeader/> */}
      <Header/>
      <RaffleEnterence/>
    </div>
  )
}
