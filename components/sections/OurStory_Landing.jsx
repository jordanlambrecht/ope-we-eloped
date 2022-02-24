import Image from 'next/image'

function Landing() {
  return (
    <section className='w-screen bg-cream-light max-h-screen relative mt-0 px-14  py-24 '>
      <div className='max-w-2xl md:max-w-xl lg:max-w-8xl mx-auto'>
        <h1 className=' font-semibold tracking-widest text-black text-2xl sm:text-4xl md:text-4xl '>
          Our Story
        </h1>

        <div className='max-h-screen grid grid-cols-2 lg:grid-cols-4 gap-1 mt-8 '>
          <div className='relative w-full aspect-square'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/bergen-jordan-random-1.jpg'}
              src={'/img/bergen-jordan-random-1.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'bergen-jordan-random-1.jpg'}
              src={'/img/bergen-jordan-random-2.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'bergen-jordan-random-1.jpg'}
              src={'/img/bergen-jordan-random-3.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'bergen-jordan-random-1.jpg'}
              src={'/img/bergen-jordan-random-4.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Landing
