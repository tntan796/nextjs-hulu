import Head from 'next/head';
import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {/* Header */}
      <Header></Header>

      {/* Nav */}
      <Navigation></Navigation>

      {/* Content */}
    </div>
  )
}
