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
    <section className='relative w-screen max-h-screen py-24 mt-0 bg-cream-light px-14 coco'>
      <div className='max-w-2xl mx-auto md:max-w-xl lg:max-w-8xl' ref={el}>
        <h1 className='relative text-2xl font-semibold tracking-widest text-black opacity-0 sm:text-4xl md:text-4xl fadeIn'>
          Bergen + Jordan
        </h1>

        <div className='grid max-h-screen grid-cols-2 gap-1 mt-8 lg:grid-cols-4 '>
          <div className='relative w-full opacity-0 aspect-square fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-1.jpg'}
              src={'/img/jordan-bergen-bw-1.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              fill
              priority
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>

          <div className='relative w-full opacity-0 aspect-w-1 aspect-h-1 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-2.jpg'}
              src={'/img/jordan-bergen-bw-2.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              fill
              priority
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
          <div className='relative w-full opacity-0 aspect-w-1 aspect-h-1 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-3.jpg'}
              src={'/img/jordan-bergen-bw-3.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              fill
              priority
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
          <div className='relative w-full opacity-0 aspect-w-1 aspect-h-1 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-4.jpg'}
              src={'/img/jordan-bergen-bw-4.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              fill
              priority
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
        </div>
        <div className='flex flex-col justify-end w-full h-full py-12 mt-12 font-black opacity-0 sm:hidden lg:flex fadeIn'>
          <h1 className='z-20 self-center pr-20 text-black xl:scale-125'>
            <span className='block text-8xl'>Ope.</span>
            <span className='relative block -mr-16 text-3xl text-right'>We Eloped.</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
export default Landing
