import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Image from 'next/image'
function Registry({ num }) {
  return (
    <PageSection color={'cream-light'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Answers
        </H2>

        <ul className='grid grid-cols-1 gap-8'>
          <li>
            <p className='font-semibold mt-0 pt-0  leading-none mb-0 pb-0'>Kids? We Bring?</p>{' '}
            <p className='mt-1'>Only if they&apos;re chill.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Weather ?</p>{' '}
            <p className='mt-1'>
              Maybe.{' '}
              <a
                href='https://weather.com'
                target={'_blank'}
                rel='noopener noreferrer'
                className='border-b hover:text-opacity-75'
              >
                www.weather.com
              </a>
            </p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Can I do...</p>
            <p className='mt-1'>Probably.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>Photographer?</p>{' '}
            <p className='mt-1'>
              <a
                href='https://instagram.com/intrepidvisuals'
                target={'_blank'}
                rel='noreferrer'
                className='border-b hover:text-opacity-75'
              >
                @intrepidvisuals
              </a>
            </p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>
              Is there anything to do in Nebraska?
            </p>
            <p className='mt-1'>Yes – attend our brunch. See section above.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>
              McDonald&apos;s Hashbrowns?
            </p>
            <p className='mt-1'>Yes.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>
              Awkward Glass Clinking?
            </p>{' '}
            <p className='mt-1'>No.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0  mt-0 pt-0  leading-none '>
              What’s the deal with covid-19?
            </p>
            <p className='mb-6'>
              We will be following{' '}
              <a
                href='https://visitnebraska.com/coronavirus-information'
                target={'_blank'}
                rel='noreferrer'
                className='border-b hover:text-opacity-75'
              >
                current health guidelines
              </a>{' '}
              for Lincoln &amp; Omaha at our event. Guidelines change quickly, so check back for
              updates! Masks will be provided. Vaccinations are strongly recommended.
            </p>
            <p className=''>
              We understand &amp; respect that not everyone will feel comfortable attending an event
              right now. We love you and we will be excited to celebrate with you whenever and
              however you feel comfortable.
            </p>
          </li>
        </ul>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
