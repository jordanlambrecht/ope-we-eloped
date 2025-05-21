import '../styles/globals.css'
import '../styles/typography.css'
import Script from 'next/script'
import Head from 'next/head'
import Navigation from 'components/Navigation'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='author' content='Jordan Lambrecht'></meta>
        <link rel='shortcut icon' href='/img/favicon.png' />
      </Head>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-ZWPNDC86VY' />{' '}
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', 'G-ZWPNDC86VY')
        `}
      </Script>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
