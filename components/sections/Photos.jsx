import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Image from 'next/image'

function Photos() {
  return (
    <PageSection>
      <InnerWrapper>
        <div className=' h-full grid grid-cols-2 md:grid-cols-4 gap-2'>
          <div className='col-span-1 w-full aspect-w-3 aspect-h-5 relative '>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-snow-1.jpg'}
              src={'/img/jordan-bergen-snow-1.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston in the snow'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='col-span-1 w-full aspect-w-3 aspect-h-5 relative '>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-snow-4.jpg'}
              src={'/img/jordan-bergen-snow-4.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston in the snow'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='col-span-1 w-full aspect-w-3 aspect-h-5 relative '>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-snow-2.jpg'}
              src={'/img/jordan-bergen-snow-2.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston in the snow'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='col-span-1 w-full aspect-w-3 aspect-h-5 relative '>
            <Image
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-snow-3.jpg'}
              src={'/img/jordan-bergen-snow-3.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston in the snow'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Photos
