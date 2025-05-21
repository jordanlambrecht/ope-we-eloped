import H2 from '@typography/H2'
import cn from 'classnames'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Link from 'next/link'
import { usePlausible } from 'next-plausible'

function OurStory({}) {
  const plausible = usePlausible()

  const handleReadMoreClick = () => {
    plausible('Button Click', { props: { buttonText: 'Read More', buttonType: 'Our Story' } })
  }

  return (
    <PageSection color={'black'} id='our-story'>
      <InnerWrapper>
        <div className='block mb-6 md:mb-12 md:-ml-9'>
          <span className='block mr-4 tracking-wider align-top text-md md:inline text-cream-light'>
            01
          </span>
          <H2
            className={cn(
              'tracking-wide lg:tracking-wider align-top block md:inline font-semibold max-w-md mt-0 text-5xl sm:text-5xl md:text-6xl 2xl:text-7xl 2xl:max-w-3xl leading-none md:mb-12 2xl:mb-20 pt-0 text-cream-light',
            )}
          >
            Our Story
          </H2>
        </div>

        <div className='mt-12'>
          <p className='max-w-2xl text-cream-light'>
            Read about how we met, when we knew the other person was the one, and how we ended up
            getting married on a Monday.
          </p>
          <Link href={'/story'} passHref>
            {/* The div below is acting as the clickable area */}
            <div
              className='max-w-xs mt-16 duration-300 cursor-pointer text-cream-light hover:scale-99'
              onClick={handleReadMoreClick} // Add onClick handler
            >
              <span className='italic '>Read More</span>
              <svg
                id='a966fc3c-c7a0-40ed-b540-d6b7a9c610ea'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 227.7 8.5'
                fill='currentColor'
                stroke='currentColor'
              >
                <line y1='4.3' x2='221.8' y2='4.3' />
                <polygon points='227.7 4.3 224 6.4 220.3 8.5 220.3 4.3 220.3 0 224 2.1 227.7 4.3' />
              </svg>
            </div>
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default OurStory
