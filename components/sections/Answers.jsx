import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'

function Registry({ num }) {
  return (
    <PageSection color={'cream-light'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Answers
        </H2>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
