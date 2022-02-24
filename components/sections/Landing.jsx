import Image from 'next/image'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

function Landing() {
  let el = useRef()
  let q = gsap.utils.selector(el)

  useEffect(() => {
    gsap.set(q('.fadeIn'), { y: 10 })
    gsap.to(q('.fadeIn'), {
      delay: 1,
      autoAlpha: 1,
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: 'sine.inOut',
      stagger: 0.33,
    })
    return () => {}
  })
  return (
    <section className='w-screen bg-cream-light max-h-screen relative mt-0 px-14  py-24 coco'>
      <div className='max-w-2xl md:max-w-xl lg:max-w-8xl mx-auto' ref={el}>
        <h1 className=' relative font-semibold tracking-widest text-black text-2xl sm:text-4xl md:text-4xl opacity-0 fadeIn'>
          Bergen + Jordan
        </h1>

        <div className='max-h-screen grid grid-cols-2 lg:grid-cols-4 gap-1 mt-8  '>
          <div className='relative w-full aspect-square  opacity-0 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-1.jpg'}
              src={'/img/jordan-bergen-bw-1.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>

          <div className='relative w-full aspect-w-1 aspect-h-1    opacity-0 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-2.jpg'}
              src={'/img/jordan-bergen-bw-2.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1   opacity-0 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-3.jpg'}
              src={'/img/jordan-bergen-bw-3.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1 opacity-0 fadeIn'>
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
        <div className='flex flex-col justify-end py-12  mt-12 w-full h-full font-black sm:hidden lg:flex opacity-0 fadeIn'>
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
