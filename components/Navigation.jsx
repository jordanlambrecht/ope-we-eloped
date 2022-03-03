import { useState, useEffect, useRef } from 'react'
import cn from 'classnames'
import gsap from 'gsap'
import Link from 'next/link'
function Navigation() {
  const menu = useRef(null)
  const [hamToggle, setHamToggle] = useState(false)
  const navItems = useRef([])
  const el = useRef()
  const q = gsap.utils.selector(el)

  function handleHamToggle() {
    setHamToggle(!hamToggle)
  }

  useEffect(() => {
    // gsap.to(menu.current, {
    //   autoAlpha: 1,
    // })
    if (!hamToggle) {
      document.body.classList.remove('overflow-y-hidden')
      gsap.to(navItems.current, {
        invalidateOnRefresh: true,
        stagger: 0.15,
        ease: 'sine.Out',
        autoAlpha: 0,
      })
      gsap.to(
        menu.current,
        {
          autoAlpha: 0,
        },
        '>',
      )

      // tl.reverse
    } else {
      document.body.classList.add('overflow-y-hidden')

      gsap.to(menu.current, {
        duration: 0.25,
        autoAlpha: 1,
      })
      gsap.to(
        navItems.current,
        {
          stagger: 0.2,
          invalidateOnRefresh: true,
          autoAlpha: 1,
        },
        '>',
      )
    }
  }, [hamToggle])

  return (
    <>
      <nav
        className='fixed top-0 right-0 mr-3 mt-3 z-50 bg-cream  p-2 block hover:cursor-pointer scale-75'
        onClick={() => handleHamToggle()}
      >
        <div id='hamburger-1' className={cn('hamburger h-full', { ['is-active']: hamToggle })}>
          <span className='line w-10 h-1 bg-black block transition-all ease-in-out duration-300 my-2' />
          <span className='line w-10 h-1 bg-black block transition-all ease-in-out duration-300 my-2' />
          <span className='line w-10 h-1 bg-black block transition-all ease-in-out duration-300 my-2' />
        </div>
      </nav>
      <div
        ref={menu}
        className='fixed top-0 left-0 w-full h-full overflow-hidden bg-black z-40 opacity-0 '
      >
        <div className='relative w-full h-full flex flex-col justify-center'>
          <nav className='mx-auto self-center'>
            <ul className='text-cream grid grid-cols-1 gap-2'>
              <Link href={'/story'} passHref>
                <li
                  className='nav-item opacity-0 cursor-pointer text-xl tracking-widest pb-1 duration-300 not-italic hover:italic border-b-2 border-b-black hover:border-b-cream '
                  onClick={() => handleHamToggle(false)}
                  ref={(element) => {
                    navItems.current[0] = element
                  }}
                >
                  01. Our Story
                </li>
              </Link>
              <Link href={'/#details'} passHref>
                <li
                  className='nav-item opacity-0 cursor-pointer text-xl tracking-widest pb-1 duration-300 not-italic hover:italic border-b-2 border-b-black hover:border-b-cream '
                  onClick={() => handleHamToggle(false)}
                  ref={(element) => {
                    navItems.current[1] = element
                  }}
                >
                  02. Event Details
                </li>
              </Link>
              <Link href={'/#rsvp'} passHref>
                <li
                  className='nav-item opacity-0 cursor-pointer text-xl tracking-widest pb-1 duration-300 not-italic hover:italic border-b-2 border-b-black hover:border-b-cream '
                  onClick={() => handleHamToggle(false)}
                  ref={(element) => {
                    navItems.current[2] = element
                  }}
                >
                  03. RSVP
                </li>
              </Link>
              <Link href={'/#answers'} passHref>
                <li
                  className='nav-item opacity-0 cursor-pointer text-xl tracking-widest pb-1 duration-300 not-italic hover:italic border-b-2 border-b-black hover:border-b-cream '
                  onClick={() => handleHamToggle(false)}
                  ref={(element) => {
                    navItems.current[3] = element
                  }}
                >
                  04. Answers
                </li>
              </Link>
              <Link href={'/#registry'} passHref>
                <li
                  className='nav-item opacity-0 cursor-pointer text-xl tracking-widest pb-1 duration-300 not-italic hover:italic border-b-2 border-b-black hover:border-b-cream '
                  onClick={() => handleHamToggle(false)}
                  ref={(element) => {
                    navItems.current[4] = element
                  }}
                >
                  05. Registry
                </li>
              </Link>
              <Link href={'/#memories'} passHref>
                <li
                  className='nav-item opacity-0 cursor-pointer text-xl tracking-widest pb-1 duration-300 not-italic hover:italic border-b-2 border-b-black hover:border-b-cream '
                  onClick={() => handleHamToggle(false)}
                  ref={(element) => {
                    navItems.current[5] = element
                  }}
                >
                  06. Memories
                </li>
              </Link>
              <Link href={'/#playlist'} passHref>
                <li
                  className='nav-item opacity-0 cursor-pointer text-xl tracking-widest pb-1 duration-300 not-italic hover:italic border-b-2 border-b-black hover:border-b-cream '
                  onClick={() => handleHamToggle(false)}
                  ref={(element) => {
                    navItems.current[6] = element
                  }}
                >
                  07. Playlist
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navigation
