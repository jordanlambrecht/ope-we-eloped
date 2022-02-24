import Image from 'next/image'

function Landing() {
  return (
    <section className='w-screen bg-cream-light max-h-screen relative mt-0 px-14  py-24 coco'>
      <div className='max-w-2xl md:max-w-xl lg:max-w-8xl mx-auto'>
        <h1 className=' font-semibold tracking-widest text-black text-2xl sm:text-4xl md:text-4xl '>
          Bergen + Jordan
        </h1>

        <div className='max-h-screen grid grid-cols-2 lg:grid-cols-4 gap-1 mt-8 '>
          <div className='relative w-full aspect-square'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-1.jpg'}
              src={'/img/jordan-bergen-bw-1.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-2.jpg'}
              src={'/img/jordan-bergen-bw-2.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-3.jpg'}
              src={'/img/jordan-bergen-bw-3.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-4.jpg'}
              src={'/img/jordan-bergen-bw-4.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
        <div className='flex flex-col justify-end py-12  mt-12 w-full h-full font-black sm:hidden lg:flex'>
          <h1 className=' self-center text-black xl:scale-125 pr-20  z-20'>
            <span className='block text-8xl'>Ope.</span>
            <span className='block text-right text-3xl -mr-16 relative'>We Eloped.</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
export default Landing
