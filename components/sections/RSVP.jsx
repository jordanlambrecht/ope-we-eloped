import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import RSVP_Form from '@parts/RSVP_Form'
import H3 from '@typography/H3'
function Registry({ num }) {
  return (
    <PageSection color={'cream'} className={'min-h-screen'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          RSVP
        </H2>
        <H3 className='text-4xl mb-4 font-semibold'>
          Join us for Brunch on
          <br />
          April 9th <br className='md:hidden' /> at 11am to 3pm
        </H3>
        <RSVP_Form />
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
