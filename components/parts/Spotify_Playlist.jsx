import H2 from '@typography/H2'
import Image from 'next/image'
import useSWR, { mutate } from 'swr'
// import { useState } from 'react'
import fetcher from '@lib/fetcher'
import H3 from '@typography/H3'
import { pluralize } from '@lib/helpers'

import Button_Filled from './Button_Filled'
import Link from 'next/link'
export default function Spotify_Playlist({ playlistID }) {
  const { data } = useSWR('/api/playlists', fetcher)

  if (!data) {
    return null
  }

  // const fetchData = async () => {
  //   mutate(
  //     '/api/playlists',
  //     await fetch('/api/playlists', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  //       body: JSON.stringify({ id: playlistID }),
  //     }),
  //   )
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res)
  //     })
  // }
  // const [data, setData] = useState<any>(fetchData)

  return (
    <div className='border-2 border-black rounded-md h-full py-4 flex flex-col px-4'>
      <div className='flex flex-col md:flex-row gap-4 px-3 md:gap-12 md:my-4 md:pt-4'>
        <div className='flex-row'>
          <Link href={data.external_urls.spotify} passHref>
            <a className={'cursor-pointer'} target='_blank'>
              <div className='relative rounded-md overflow-hidden md:mx-auto w-32 h-32 md:w-64 md:h-64'>
                <Image
                  src={data.albumCoverImage}
                  layout='fill'
                  objectFit='cover'
                  blurDataURL={data.albumCoverImage}
                  quality={25}
                  className='w-full h-full absolute'
                  alt={data.album}
                />
              </div>
            </a>
          </Link>
        </div>

        <div className='justify-end '>
          {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            className='bi bi-spotify'
            viewBox='0 0 16 16'
          >
            <path d='M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z' />
          </svg> */}
          {/* <div className='text-black text-opacity-50 italic text-md'>playlist:</div> */}
          <Link href={data.external_urls.spotify} passHref>
            <h2
              color='black'
              className='tracking-wide lg:tracking-wider align-top s font-semibold max-w-md mt-0 text-2xl sm:text-5xl md:text-6xl 2xl:text-6xl 2xl:max-w-3xl leading-none mb-2 '
            >
              {data.name}
            </h2>
          </Link>
          <p className={'text-lg  text-semibold mb-2  pb-0 mt-0 pt-0'}>
            {' '}
            {data.description ? data.description : ''}
          </p>
          <div>
            <Button_Filled
              className={'my-1 mt-1 sm:mt-1 md:my-1 xl:mt-1'}
              url={data.external_urls.spotify}
              text={'Add to Playlist'}
            />

            <p className='text-xs md:text-md text-wine '>
              {pluralize(data.followers.total, 'follower')}, {pluralize(data.tracks.total, 'song')},{' '}
              {data.albumLength}
            </p>
          </div>
        </div>
      </div>
      <div className='bg-cream py-3 h-full overflow-auto'>
        <div className='changeScrollbar h-full overflow-y-scroll bg-cream px-1 md:px-4 '>
          <ul className='grid gap-1 md:gap-2'>
            {data.tracksSelected.map((track, index) => (
              <li key={index} className='my-0'>
                <Link href={track.songUrl}>
                  <a target={'_blank'}>
                    <div className='flex gap-1 md:gap-x-4'>
                      <img src={track.albumArt} className='h-12 w-12' />

                      <div className='flex flex-col justify-center'>
                        <p className='line-clamp-2 text-wine mt-0 mb-1 py-0 leading-none text-sm md:text-md'>
                          {track.title}
                        </p>
                        <span className='line-clamp-1 my-0 py-0 mb-0 pb-0 leading-none text-wine text-opacity-75 text-xs'>
                          {track.artist} – {track.album}
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className='h-3/4'>
        <div className='h-full   bg-blue overflow-y-scroll'>
     
        </div>
      </div> */}
    </div>
  )
}
