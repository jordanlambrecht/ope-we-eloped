import '../styles/globals.css'
import '../styles/typography.css'

import Head from 'next/head'
import Navigation from 'components/Navigation'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain='opeweeloped.us'
      trackOutboundLinks
      trackLocalhost={process.env.NODE_ENV !== 'production'}
      selfHosted
      taggedEvents
      trackFileDownloads
      customDomain='https://analytics.jordy.world'
      enabled
      hash
    >
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Jordan Lambrecht'></meta>
        <link rel='shortcut icon' href='/img/favicon.png' />
      </Head>

      <Navigation />
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}

export default MyApp
