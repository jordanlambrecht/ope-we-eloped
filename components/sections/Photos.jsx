import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Image from 'next/image'

function Photos() {
  return (
    <PageSection>
      <InnerWrapper>
        <div className='grid h-full grid-cols-2 gap-2  md:grid-cols-4'>
          <div className='relative w-full col-span-1 aspect-w-3 aspect-h-5 grayscale'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-snow-1.jpg'}
              src={'/img/jordan-bergen-snow-1.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston in the snow'}
              fill
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
          <div className='relative w-full col-span-1 aspect-w-3 aspect-h-5 grayscale'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-snow-4.jpg'}
              src={'/img/jordan-bergen-snow-4.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston in the snow'}
              fill
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
          <div className='relative w-full col-span-1 aspect-w-3 aspect-h-5 grayscale'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-snow-2.jpg'}
              src={'/img/jordan-bergen-snow-2.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston in the snow'}
              fill
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
          <div className='relative w-full col-span-1 aspect-w-3 aspect-h-5 grayscale'>
            <Image
              quality={75}
              placeholder='blur'
              blurDataURL={'/img/jordan-bergen-snow-3.jpg'}
              src={'/img/jordan-bergen-snow-3.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston in the snow'}
              fill
              className='object-cover'
              style={{
                maxWidth: '100%',
              }}
            />
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Photos
