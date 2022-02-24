import Image from 'next/image'

function Landing() {
  return (
    <section className='w-screen bg-cream-light max-h-screen relative mt-0 px-14  py-24 coco'>
      <div className='max-w-2xl md:max-w-xl lg:max-w-8xl mx-auto'>
        <h1 className=' font-semibold tracking-widest text-black text-2xl sm:text-4xl md:text-4xl '>
          Bergen + Jordan / 04.09.2022
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
      {/* <div className='absolute top-0 left-0 w-full h-full z-0'>
        <div className='relative w-full h-full top-0 left-0'>
          <Image
            priority
            placeholder='blur'
            blurDataURL='/img/Haymarket-Lights-2.jpg'
            src='/img/Haymarket-Lights-2.jpg'
            layout='fill'
            objectFit='cover'
            alt='Jordan Lambrecht and Bergen Johnston in the haymarket lights alleyway in Lincoln, Nebraska'
          />
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-0'></div>
      <div className='flex flex-col justify-end py-12 w-full h-full'>
        <div className='relative z-10 self-center text-center mb-12'>
          <p className='text-cream text-lg font-thin tracking-widest  mb-4'>
            Saturday, April 9th, 2022
          </p>

          <h2 className='text-cream font-semibold tracking-widest  text-lg lg:text-3xl'>
            Bergen Johnston <br className='md:hidden' />
            &nbsp; ❤️ &nbsp; <br className='md:hidden' />
            Jordan Lambrecht
          </h2>
        </div>
      </div> */}
    </section>
  )
}
export default Landing
