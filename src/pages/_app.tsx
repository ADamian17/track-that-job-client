import Head from 'next/head'
import type { AppProps } from 'next/app'

import '@/styles/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Track that job" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <title>Track that job</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
