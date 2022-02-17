import Image from 'next/image'
import Link from 'next/link'

function Registry_Card({ url, img, header, subheader }) {
  return (
    <Link href={url} passHref>
      <article className='cursor-pointer border-2 overflow-hidden p-2  lg:p-3 border-black rounded-lg transform transition-all duration-300 ease-in-out hover:scale-99'>
        <div className='relative overflow-hidden w-full aspect-square md:aspect-[4/3]   lg:aspect-square rounded-md'>
          <Image src={img} layout={'fill'} objectFit='cover' alt={header} />
        </div>
        <div className='lg:mt-4 py-2 lg:py-6 px-1 lg:px-3'>
          <span className='text-xs md:text-sm text-black text-opacity-50 italic mb-0 pb-2 lg:pb-0 leading-none'>
            {subheader}
          </span>
          <h4 className='font-semibold text-lg mt-0 pt-0 pb-2 leading-none'>{header}</h4>
          <div className='w-full float-right pb-2 lg:pb-3'>
            <span> &rarr;</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default Registry_Card
