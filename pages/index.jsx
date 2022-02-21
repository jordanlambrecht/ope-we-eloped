import Head from 'next/head'

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

import InnerWrapper from '@parts/InnerWrapper'
import Spotify_Playlist from '@parts/Spotify_Playlist'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bergen + Jordan 4ever</title>
        <meta charset='utf-8' />
        <meta
          name='description'
          content='Bergen Johnston and Jordan Lambrecht got Secret Married on June 28th, 2020. Now they&apso; celebrating with lunch'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='keywords'
          content='Jordan Lambrecht, Bergen Johnston, Riverview Lodge, Mahoney State Park'
        />
        <meta name='author' content='Jordan Lambrecht'></meta>
        <link rel='shortcut icon' href='/img/favicon.png' />
        <meta property='og:image' content='     ' />
      </Head>
      <Meta />

      <main>
        <Landing />
        <div className='flex flex-col justify-end py-12 w-full h-full font-black'>
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
