import Head from 'next/head'
import Script from 'next/script'
// Sections
import Landing from '@sections/Landing'
import RSVP from '@sections/RSVP'
import Registry from '@sections/Registry'
import Details from '@sections/Details'
import Answers from '@sections/Answers'
import Message from '@sections/Message'
import OurStory from '@sections/OurStory'
import Playlist from '@sections/Playlist'
import Photos from '@sections/Photos'
import Footer from '@sections/Footer'
import PageSection from '@parts/PageSection'
import Meta from '@parts/Meta'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bergen + Jordan 4ever</title>
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
      <Meta />
      <main>
        <Landing />
        <div className=' flex-col justify-end py-12 w-full h-full font-black  hidden sm:flex lg:hidden'>
          <h1 className=' self-center text-black xl:scale-125 pr-20  z-20'>
            <span className='block text-8xl'>Ope.</span>
            <span className='block text-right text-3xl -mr-16 relative'>We Eloped.</span>
          </h1>
        </div>
        <RSVP num={'01'} />
        <Details num={'02'} />
        <Message num={'03'} />
        <OurStory num={'04'} />
        <Registry num={'05'} />
        <Playlist num={'06'} />
        <Answers num={'07'} />
        <Photos />
        <Footer />
      </main>
    </div>
  )
}
