import Image from 'next/image'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'

function OurStory_Landing() {
  let el = useRef()
  let q = gsap.utils.selector(el)

  useEffect(() => {
    gsap.set(q('.fadeIn'), { y: -5 })
    gsap.to(q('.fadeIn'), {
      delay: 1,
      autoAlpha: 1,
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'sine.inOut',
      stagger: 0.25,
    })
    return () => {}
  })
  return (
    <section className='relative w-screen max-h-screen py-24 mt-0 bg-cream-light px-14 '>
      <div className='max-w-2xl mx-auto md:max-w-xl lg:max-w-8xl' ref={el}>
        <h1 className='text-2xl font-semibold tracking-widest text-black opacity-0  sm:text-4xl md:text-4xl fadeIn'>
          Our Story
        </h1>

        <div className='grid max-h-screen grid-cols-2 gap-1 mt-8 lg:grid-cols-4 '>
          <div className='relative w-full opacity-0 aspect-square fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/bergen-jordan-random-1.jpg'}
              src={'/img/bergen-jordan-random-1.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              fill
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
          <div className='relative w-full opacity-0 aspect-w-1 aspect-h-1 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'bergen-jordan-random-1.jpg'}
              src={'/img/bergen-jordan-random-2.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              fill
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
          <div className='relative w-full opacity-0 aspect-w-1 aspect-h-1 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'bergen-jordan-random-1.jpg'}
              src={'/img/bergen-jordan-random-3.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              fill
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
          <div className='relative w-full opacity-0 aspect-w-1 aspect-h-1 fadeIn'>
            <Image
              placeholder='blur'
              blurDataURL={'bergen-jordan-random-1.jpg'}
              src={'/img/bergen-jordan-random-4.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              fill
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default OurStory_Landing
