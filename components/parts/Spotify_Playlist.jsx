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
                  placeholder='blur'
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
          <ul className='grid gap-3 md:gap-2'>
            {data.tracksSelected.map((track, index) => (
              <li key={index} className='my-0'>
                <Link href={track.songUrl}>
                  <a target={'_blank'}>
                    <div className='flex gap-4 md:gap-x-4'>
                      <Image
                        placeholder='blur'
                        blurDataURL={track.albumArt}
                        quality={50}
                        layout='fixed'
                        height={32}
                        width={32}
                        src={track.albumArt}
                        alt='spotify album cover'
                      />

                      <div className='flex flex-col justify-center'>
                        <p className='pb-1 text-wine mt-0 mb-0 py-0 leading-none text-sm md:text-md line-clamp-2 '>
                          {track.title}
                        </p>
                        <span className=' my-0 pt-0 mb-0 pb-0 leading-tight text-wine text-opacity-75 text-xs line-clamp-1'>
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
    </div>
  )
}
