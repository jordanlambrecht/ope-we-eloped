import Image from 'next/image'

function Landing() {
  return (
    <section className='w-screen h-screen bg-black '>
      <div className='absolute top-0 left-0 w-full h-full z-0'>
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
      </div>
    </section>
  )
}
export default Landing
