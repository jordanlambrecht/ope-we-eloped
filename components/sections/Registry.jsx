import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Link from 'next/link'
import Registry_Charity from '@parts/Registry_Charity'
import Registry_Us from '@parts/Registry_Us'
import Registry_Pets from '@parts/Registry_Pets'

function Registry({ num }) {
  return (
    <PageSection color={'cream'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Registry
        </H2>
        <p>
          something something your presence is our present skjdfhksehksuef I dont know how to word
          this –bergen
        </p>
        <Link href={'https://www.zola.com/registry/opeweeloped'} passHref>
          <a className='button' rel='noOpener' target={'_blank'}>
            View Entire Registry &rarr;
          </a>
        </Link>
        <Registry_Charity />
        <Registry_Us />
        <Registry_Pets />
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
