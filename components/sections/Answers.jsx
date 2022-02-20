import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Image from 'next/image'
function Registry({ num }) {
  return (
    <PageSection color={'cream'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Answers
        </H2>
        <div className='grid grid-cols-5 gap-12 mt-8'>
          <div className='col-span-5 sm:col-span-3 relative w-full aspect-[1/1] overflow-hidden order-0'>
            <Image
              placeholder='blur'
              blurDataURL='/img/Jordan-Birthday.jpg'
              src={'/img/Jordan-Birthday.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston kissing in a Jacks Bar'}
              layout={'fill'}
              objectFit={'cover'}
              className={'object-top'}
            />
          </div>
          <div className='col-span-5 xl:col-span-2 '>
            <ul className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-x-24 gap-y-10 xl:gap-y-2'>
              <li>
                <p className='font-semibold mt-0 pt-0  leading-none mb-0 pb-0'>Kids? We Bring?</p>{' '}
                <p className='mt-1'>Only if they&apos;re chill.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>
                  Kids? You &apos;Gonna Have?
                </p>{' '}
                <p className='mt-1'>Respectfully, please stop asking.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Speeches?</p>{' '}
                <p className='mt-1 leading-tight'>Not formally, but if you really really want.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Photo Booth</p>{' '}
                <p className='mt-1'>Yes. Thanks, Yoni.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Drunk Driving?</p>{' '}
                <p className='mt-1'>No.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Cold Out?</p>{' '}
                <p className='mt-1'>Maybe.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Hashtag?</p>{' '}
                <p className='mt-1'>Nah, just tag us.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Can I do...</p>{' '}
                <p className='mt-1'>Probably.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Photographer?</p>{' '}
                <p className='mt-1'>
                  <a
                    href='https://instagram.com/peterbarnesandjelly'
                    target={'_blank'}
                    rel='noreferrer'
                    className='border-b hover:text-opacity-75'
                  >
                    @peterbarnesandjelly
                  </a>
                </p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>
                  McDonalds Hashbrowns?
                </p>{' '}
                <p className='mt-1'>Yes.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>After Party?</p>{' '}
                <p className='mt-1'>Omaha.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Booze?</p>{' '}
                <p className='mt-1'>Free.</p>
              </li>
              <li>
                <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>
                  Awkward Glass Clinking?
                </p>{' '}
                <p className='mt-1'>No.</p>
              </li>
            </ul>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
