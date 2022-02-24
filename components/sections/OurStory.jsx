import H2 from '@typography/H2'
import H3 from '@typography/H3'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Image from 'next/image'
import Link from 'next/link'
function OurStory({ num }) {
  return (
    <PageSection color={'black'}>
      <InnerWrapper>
        <H2 before={num} color={'cream'}>
          Our Story
        </H2>
        <div className='mt-12'>
          <p className='text-cream-light'>
            This section was too long-winded and sappy to put on the main page. For those brave of
            heart, you can read about how we met, when we knew the other person was the one, and how
            we ended up getting married on a Monday.
          </p>
          <Link href={'/story'} passHref>
            <a>
              <div className='mt-16 text-cream-light max-w-xs hover:scale-99 cursor-pointer'>
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
            </a>
          </Link>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default OurStory
