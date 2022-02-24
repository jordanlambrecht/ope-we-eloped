import '../styles/globals.css'
import '../styles/typography.css'
import Script from 'next/script'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  console.log(
    'Created by Jordan Lambrecht and Bergen Johnston in Lincoln, Nebraska. This code was open-sourced in 2022 under an MIT licenes. The original github repo can be found here: https://github.com/jordanlambrecht/ope-we-eloped',
  )
  console.log('#BlackLivesMatter #ACAB')
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
