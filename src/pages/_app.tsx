import { Fragment } from 'react'

import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and styled-components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
