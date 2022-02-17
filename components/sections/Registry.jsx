import H2 from '@typography/H2'
import H3 from '@typography/H3'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Link from 'next/link'
import Image from 'next/image'

function Registry({ num }) {
  return (
    <PageSection color={'cream-light'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Registry
        </H2>
        <p>
          something something your presence is our present" skjdfhksehksuef I don't fucking know how
          to word this
        </p>
        <Link href={'https://www.zola.com/registry/bergenandjordan'} passHref>
          <a
            className='inline-block font-medium rounded-md text-lg px-6 py-2 bg-black text-cream-light drop-shadow-sm duration-300 ease-in-out hover:scale-95'
            rel='noOpener'
            target={'_blank'}
          >
            View Entire Registry &rarr;
          </a>
        </Link>
        <div className='py-12'>
          <H3>Charities</H3>
          <p>yada yada yada</p>
          <div className='grid grid-cols-1 lg:grid-cols-4'>
            <Link href={'/'} passHref>
              <article className='cursor-pointer border-2 overflow-hidden p-3 border-black rounded-lg transform transition-all duration-300 ease-in-out hover:scale-99'>
                <div className='relative overflow-hidden w-full aspect-square rounded-md'>
                  <Image
                    src={'/img/charity.jpeg'}
                    layout={'fill'}
                    objectFit='cover'
                    alt='charity'
                  />
                </div>
                <div className='mt-4 py-6'>
                  <span className='text-sm text-black text-opacity-50 italic mb-0 pb-0 leading-none'>
                    Bergen's Charity choice
                  </span>
                  <h4 className='font-semibold text-lg mt-0 pt-0 leading-none'>Charity Name</h4>
                  <div className='w-full float-right'>
                    <span> &rarr;</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
