import Image from 'next/image'
import useSWR from 'swr'
import fetcher from '@lib/fetcher'
import { pluralize } from '@lib/helpers'

import Button_Filled from './Button_Filled'
import Link from 'next/link'
export default function Spotify_Playlist() {
  const { data } = useSWR('/api/playlists', fetcher)

  if (!data) {
    return null
  }
  return (
    <div className='flex flex-col px-4 py-4 border-2 border-black rounded-md'>
      <div className='flex flex-col gap-4 px-3 md:flex-row md:gap-12 md:my-4 md:pt-4'>
        <div className='flex-row'>
          <Link
            href={data.external_urls?.spotify || '#'}
            passHref
            className={'cursor-pointer'}
            target='_blank'
          >
            <div className='relative w-32 h-32 overflow-hidden rounded-md md:mx-auto md:w-64 md:h-64'>
              <Image
                src={data.albumCoverImage || '/img/placeholder.png'}
                placeholder='blur'
                blurDataURL={data.albumCoverImage || '/img/placeholder.png'}
                quality={25}
                className='absolute w-full h-full'
                alt={data.album || 'Playlist cover'}
                fill
                sizes='100vw'
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </Link>
        </div>
        <div className='justify-end '>
          <Link href={data.external_urls?.spotify || '#'} passHref>
            <h2
              color='black'
              className='max-w-md mt-0 mb-2 text-2xl font-semibold leading-none tracking-wide align-top lg:tracking-wider s sm:text-5xl md:text-6xl 2xl:text-6xl 2xl:max-w-3xl '
            >
              {data.name || 'Playlist Name'}
            </h2>
          </Link>
          <p className={'text-lg  text-semibold mb-2  pb-0 mt-0 pt-0'}>
            {' '}
            {data.description ? data.description : ''}
          </p>
          <div>
            <Button_Filled
              className={'my-1 mt-1 sm:mt-1 md:my-1 xl:mt-1'}
              url={data.external_urls?.spotify || '#'}
              text={'Add to Playlist'}
            />

            <p className='text-xs md:text-md text-wine '>
              {data.followers ? pluralize(data.followers.total, 'follower') : '0 followers'},{' '}
              {data.tracks ? pluralize(data.tracks.total, 'song') : '0 songs'},{' '}
              {data.albumLength || '00:00'}
            </p>
          </div>
        </div>
      </div>
      <div className='py-3 bg-cream first-letter:overflow-hidden '>
        <div className='px-1 overflow-y-scroll changeScrollbar scroll-smooth max-h-80 bg-cream md:px-4 '>
          <ul className='grid gap-3 md:gap-2'>
            {data.tracksSelected.map((track, index) => (
              <li key={index} className='my-0'>
                <Link href={track.songUrl} target={'_blank'}>
                  <div className='flex gap-4 md:gap-x-4'>
                    <Image
                      quality={50}
                      height={32}
                      width={32}
                      src={track.albumArt}
                      alt='spotify album cover'
                    />

                    <div className='flex flex-col justify-center'>
                      <p className='py-0 pb-1 mt-0 mb-0 text-sm leading-none text-wine md:text-md line-clamp-2 '>
                        {track.title}
                      </p>
                      <span className='pt-0 pb-0 my-0 mb-0 text-xs leading-tight text-opacity-75 text-wine line-clamp-1'>
                        {track.artist} – {track.album}
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
