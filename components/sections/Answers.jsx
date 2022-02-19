import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'

function Registry({ num }) {
  return (
    <PageSection color={'cream-dark'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Answers
        </H2>
        <ul>
          <li>
            <p className='font-semibold mb-0 pb-0'>Kids?</p> <p className='mt-0'>No.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0'>Speeches?</p> <p className='mt-0'>No.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0'>Photo Booth</p> <p className='mt-0'>Yes.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0'>Drunk Driving?</p> <p className='mt-0'>No.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0'>Cold Out?</p> <p className='mt-0'>Maybe.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0'>Hashtag?</p> <p className='mt-0'>#OpeWeEloped</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0'>Can I do...</p> <p className='mt-0'>Probably.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0'>McDonalds Hashbrowns?</p>{' '}
            <p className='mt-0'>Yes.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0'>Booze?</p> <p className='mt-0'>Free.</p>
          </li>
          <li>
            <p className='font-semibold mb-0 pb-0'>Awkward Glass Clinking?</p>{' '}
            <p className='mt-0'>No.</p>
          </li>
        </ul>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
