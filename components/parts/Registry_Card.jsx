import Image from 'next/image'
import Link from 'next/link'

function Registry_Card({ url, img, header, subheader }) {
  return (
    <Link href={url} passHref>
      <article className='h-full cursor-pointer overflow-hidden px-3 rounded-md border-2 md:border-0 border-black transform transition-all duration-300 ease-in-out hover:scale-99'>
        <div className='relative overflow-hidden w-full aspect-square md:aspect-[4/3]   lg:aspect-square rounded-sm'>
          <Image
            placeholder='blur'
            blurDataURL={img}
            src={img}
            layout={'fill'}
            objectFit='cover'
            alt={header}
          />
        </div>
        <div className=' flex flex-col justify-between mt-0 xl:mt-4 py-1 xl:py-6 px-1 lg:px-3'>
          <div>
            <p className='text-xs md:text-sm text-black text-opacity-50 italic mb-0 pb-2 leading-none'>
              {subheader}
            </p>
            <h4 className='font-semibold text-lg mt-0 pt-0 pb-2 leading-none'>{header}</h4>
          </div>
          <div className='w-full float-right pb-2 lg:pb-3'>
            <span> &rarr;</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Registry_Card
