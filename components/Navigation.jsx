import { useState, useEffect, useRef } from 'react'
import cn from 'classnames'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'

gsap.registerPlugin(ScrollTrigger)

function Navigation() {
  const menu = useRef(null)
  const [hamToggle, setHamToggle] = useState(false)
  const navItems = useRef([])
  const el = useRef()
  const q = gsap.utils.selector(el)
  const plausible = usePlausible()

  function handleHamToggle(closeOnly = false) {
    if (closeOnly) {
      setHamToggle(false)
    } else {
      setHamToggle(!hamToggle)
    }
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

  const handleLinkClick = (linkName, href) => {
    plausible('Navigation Link Click', { props: { linkName, href } })
    handleHamToggle(true) // Close the menu
  }

  return (
    <>
      <nav
        className='fixed top-0 right-0 transition-scale duration-300 ease-in-out z-50 block p-4 mt-3 mr-3 scale-75 rounded-md hover:scale-[80%] bg-cream hover:cursor-pointer'
        onClick={() => handleHamToggle()}
      >
        <div id='hamburger-1' className={cn('hamburger h-full', { ['is-active']: hamToggle })}>
          <span className='block w-10 h-1 my-2 transition-all duration-300 ease-in-out bg-black line' />
          <span className='block w-10 h-1 my-2 transition-all duration-300 ease-in-out bg-black line' />
          <span className='block w-10 h-1 my-2 transition-all duration-300 ease-in-out bg-black line' />
        </div>
      </nav>
      <div
        ref={menu}
        className='fixed top-0 left-0 z-40 w-full h-full overflow-hidden bg-black opacity-0 '
      >
        <div className='relative flex flex-col justify-center w-full h-full'>
          <nav className='self-center mx-auto'>
            <ul className='grid grid-cols-1 gap-2 text-cream'>
              <Link href={'/story'} passHref>
                <li
                  className='pb-1 text-xl not-italic tracking-widest duration-300 border-b-2 opacity-0 cursor-pointer nav-item hover:italic border-b-black hover:border-b-cream '
                  onClick={() => handleLinkClick('Our Story', '/story')}
                  ref={(element) => {
                    navItems.current[0] = element
                  }}
                >
                  01. Our Story
                </li>
              </Link>
              <Link href={'/#details'} passHref>
                <li
                  className='pb-1 text-xl not-italic tracking-widest duration-300 border-b-2 opacity-0 cursor-pointer nav-item hover:italic border-b-black hover:border-b-cream '
                  onClick={() => handleLinkClick('Event Details', '/#details')}
                  ref={(element) => {
                    navItems.current[1] = element
                  }}
                >
                  02. Event Details
                </li>
              </Link>
              <Link href={'/#rsvp'} passHref>
                <li
                  className='pb-1 text-xl not-italic tracking-widest duration-300 border-b-2 opacity-0 cursor-pointer nav-item hover:italic border-b-black hover:border-b-cream '
                  onClick={() => handleLinkClick('RSVP', '/#rsvp')}
                  ref={(element) => {
                    navItems.current[2] = element
                  }}
                >
                  03. RSVP
                </li>
              </Link>
              <Link href={'/#answers'} passHref>
                <li
                  className='pb-1 text-xl not-italic tracking-widest duration-300 border-b-2 opacity-0 cursor-pointer nav-item hover:italic border-b-black hover:border-b-cream '
                  onClick={() => handleLinkClick('Answers', '/#answers')}
                  ref={(element) => {
                    navItems.current[3] = element
                  }}
                >
                  04. Answers
                </li>
              </Link>
              <Link href={'/#registry'} passHref>
                <li
                  className='pb-1 text-xl not-italic tracking-widest duration-300 border-b-2 opacity-0 cursor-pointer nav-item hover:italic border-b-black hover:border-b-cream '
                  onClick={() => handleLinkClick('Registry', '/#registry')}
                  ref={(element) => {
                    navItems.current[4] = element
                  }}
                >
                  05. Registry
                </li>
              </Link>
              <Link href={'/#memories'} passHref>
                <li
                  className='pb-1 text-xl not-italic tracking-widest duration-300 border-b-2 opacity-0 cursor-pointer nav-item hover:italic border-b-black hover:border-b-cream '
                  onClick={() => handleLinkClick('Memories', '/#memories')}
                  ref={(element) => {
                    navItems.current[5] = element
                  }}
                >
                  06. Memories
                </li>
              </Link>
              <Link href={'/#playlist'} passHref>
                <li
                  className='pb-1 text-xl not-italic tracking-widest duration-300 border-b-2 opacity-0 cursor-pointer nav-item hover:italic border-b-black hover:border-b-cream '
                  onClick={() => handleLinkClick('Playlist', '/#playlist')}
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
