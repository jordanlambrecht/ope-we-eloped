import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Image from 'next/image'

function Registry({ num }) {
  return (
    <PageSection color={'cream'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Our Story
        </H2>
        <div className='grid grid-cols-2 xl:grid-cols-4 gap-1 mt-8'>
          <div className='relative w-full aspect-square'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-1.jpg'}
              src={'/img/jordan-bergen-bw-1.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-2.jpg'}
              src={'/img/jordan-bergen-bw-2.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-bw-3.jpg'}
              src={'/img/jordan-bergen-bw-3.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
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
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
