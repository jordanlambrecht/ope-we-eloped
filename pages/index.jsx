import Head from 'next/head'
import Script from 'next/script'
// Sections
import Landing from '@sections/Landing'
import RSVP from '@sections/RSVP'
import Registry from '@sections/Registry'
import Details from '@sections/Details'
import Answers from '@sections/Answers'
import Memories from '@sections/Memories'
import OurStory from '@sections/OurStory'
import Playlist from '@sections/Playlist'
import Photos from '@sections/Photos'
import Footer from '@sections/Footer'
import Meta from '@parts/Meta'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bergen + Jordan 4ever</title>
      </Head>

      <Meta />
      <main>
        <Landing />
        <div className=' flex-col justify-end py-12 w-full h-full font-black  hidden sm:flex lg:hidden'>
          <h1 className=' self-center text-black xl:scale-125 pr-20  z-20'>
            <span className='block text-8xl'>Ope.</span>
            <span className='block text-right text-3xl -mr-16 relative'>We Eloped.</span>
          </h1>
        </div>
        <OurStory num={'01'} />
        <Details num={'02'} />
        <RSVP num={'03'} />
        <Answers num={'04'} />
        <Registry num={'05'} />
        <Memories num={'06'} />
        <Playlist num={'07'} />
        <Photos />
        <Footer />
      </main>
    </div>
  )
}
