import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H3 from '../typography/H3'
import Link from 'next/link'
import Image from 'next/image'
import Button_Filled from '@parts/Button_Filled'
function Details({ num }) {
  return (
    <PageSection color={'cream'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Event Details
        </H2>
        <div className='grid grid-cols-5 gap-14 mt-8'>
          {/* <div className='block md:hidden xl:block col-span-5 md:col-span-2 aspect-w-1 aspect-h-1 w-full relative'>
            <Image
              placeholder='blur'
              blurDataURL='/img/PolaroidStack.jpeg'
              src={'/img/PolaroidStack.jpeg'}
              alt={'Jordan Lambrecht and Bergen Johnston stack of polaroids'}
              layout={'fill'}
              objectFit={'contain'}
              className={'object-top'}
            />
          </div> */}
          <div className='col-span-5 md:col-span-4 xl:grid-cols-3 pt-0 mt-0'>
            <div className='mb-12 mt-0 pt-0 pb-2'>
              <H3>When + Where</H3>
              <p>Saturday, April 9th, 2022 / 11am to 3pm-ish</p>
              <p>
                <span className='font-semibold'>Riverview Lodge at Mahoney State Park </span>
                <br />
                28500 W Park Hwy, Ashland, NE, 68003
              </p>
              <div className='mb-8'>
                <Button_Filled
                  url='https://www.google.com/maps/d/u/0/edit?mid=1ydOTGPB8i7eG8FQEVk0dclj-7J09-5XU&usp=sharing'
                  text='Map'
                />
              </div>
              <p>
                We do not plan on having a formal itinerary; you&apos;re welcome to arrive when you
                like and stay as long as you&apos;d like.
              </p>
            </div>

            <div className='mb-12 mt-4 py-2'>
              <H3>What to Wear</H3>
              <p>
                <span className='font-semibold'>Come as you are.</span> This is brunch and we want
                you to be comfortable**
              </p>
            </div>
            <div className='mb-12 mt-4 py-2'>
              <H3>Where to Stay</H3>
              <p>
                There are lots of options since our venue is located about 20 mins from Omaha and 30
                mins from Lincoln, so, there are lots of options!
              </p>
              <div className='mb-8'>
                <Button_Filled
                  url='https://www.google.com/maps/d/u/0/viewer?mid=1XT2guC9u4MREqhCfFnRm-YZifr6nO4CL&ll=41.03007602339994%2C-96.31491595&z=10'
                  text='Stuff to Do & Places to Stay'
                />
              </div>
            </div>

            <div className='text-sm text-black italic'>**Clothing is preferred</div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Details
