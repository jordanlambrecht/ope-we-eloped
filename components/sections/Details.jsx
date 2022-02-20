import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H3 from '../typography/H3'
import Link from 'next/link'
import Image from 'next/image'
function Details({ num }) {
  return (
    <PageSection color={'cream'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Event Details
        </H2>
        <div className='grid grid-cols-5 gap-14 mt-8'>
          <div className='block md:hidden xl:block col-span-5 md:col-span-2 aspect-w-1 aspect-h-1 w-full relative'>
            <Image
              placeholder='blur'
              blurDataURL='/img/PolaroidStack.jpeg'
              src={'/img/PolaroidStack.jpeg'}
              alt={'Jordan Lambrecht and Bergen Johnston stack of polaroids'}
              layout={'fill'}
              objectFit={'contain'}
              className={'object-top'}
            />
          </div>
          <div className='col-span-5 md:col-span-4 xl:grid-cols-3 pt-0 mt-0'>
            <div className='mb-12 mt-0 pt-0 pb-2'>
              <H3 className={'mt-0 pt-0'}>Location</H3>
              <p>
                <span className='font-semibold'>Riverview Lodge at Mahoney State Park.</span> The
                venue is located underneath the iconic lookout tower. &nbsp;
                <Link href='https://goo.gl/maps/kd4RvQgaEET6jA2Z6' passHref>
                  <a
                    target={'_blank'}
                    rel='noopener'
                    className='border-b text-wine text-opacity-100 duration-300    hover:text-opacity-75'
                  >
                    Here&apos;s a map
                  </a>
                </Link>
                .
              </p>
              <p>28500 W Park Hwy, Ashland, NE 68003</p>
            </div>
            <div className='mb-12 mt-4 py-2'>
              <H3>Time &amp; Date</H3>
              <p>
                <span className='font-semibold'>Saturday, April 9th, from 11am to 3:00pm ish.</span>{' '}
                We do not plan on having a formal itenerary. You&apos;re welcome to arrive when you
                like and stay as long as you&apos;d like.
              </p>
            </div>
            <div className='mb-12 mt-4 py-2'>
              <H3>Dress Code</H3>
              <p>
                <span className='font-semibold'>Come as you are.</span> We want you to be
                comfortable. This is brunch, after all.{' '}
              </p>
            </div>
            <div className='mb-12 mt-4 py-2'>
              <H3>Lodging</H3>
              <p>
                <span className='font-semibold'>IDK yet.</span> Faith still needs to do research on
                this.
              </p>
            </div>
            <div className='mb-12 mt-4 py-2'>
              <H3>COVID Policy</H3>
              <p>
                <span className='font-semibold'>Get Vaxxed.</span> Obviously we can&apos;t tell you
                what to do with your health. Hopefully covid will be on the downswing by April 9th,
                but we will be following CDC guidelines at that time. As of now, we&apos;re not
                expecting the need for masks but we&apos;ll keep you updated as the brunch
                approaches.
              </p>
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Details
