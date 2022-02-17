import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H3 from '../typography/H3'

function Details({ num }) {
  return (
    <PageSection color={'cream-dark'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Event Details
        </H2>
        <div className='mb-12 mt-4 py-2'>
          <H3>Location</H3>
          <p>
            <span className='font-semibold'>Riverview Lodge at Mahoney State Park.</span> The venue
            is located underneith the iconic lookout tower. &nbsp;
            <a href='maps.google.com' target={'_blank'} rel='noopener'>
              Here&apos;s a map
            </a>
            .
          </p>
        </div>
        <div className='mb-12 mt-4 py-2'>
          <H3>Time &amp; Date</H3>
          <p>
            <span className='font-semibold'>Saturday, April 9th, from 11am to 3:00pm ish.</span> We
            do not plan on having a formal itenerary. You&apos;re welcome to arrive when you like
            and stay as long as you&apos;d like.
          </p>
        </div>
        <div className='mb-12 mt-4 py-2'>
          <H3>Dress Code</H3>
          <p>
            <span className='font-semibold'>Come as you are.</span> We want you to be comfortable.
            This is brunch, after all.{' '}
          </p>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Details
