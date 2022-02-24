import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import RSVP_Form from '@parts/RSVP_Form'
function Registry({ num }) {
  return (
    <PageSection color={'cream'} className={'min-h-screen'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          RSVP
        </H2>
        <p className='text-4xl mb-4 font-semibold'>
          Join us for Brunch on
          <br />
          April 9th at 11am to 3pm
        </p>
        <RSVP_Form />
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
