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
        <p className='mt-1 mb-6'>
          Gifts are not expected and we are just excited to have you join us. We don’t have a formal
          registry, but you can contribute to cash funds if you’d like! These are set up via
          Zola.com and have been designated for things like our honeymoon, Jordan’s DIY Home Depot
          excursions & vet bills for our zoo (SOS).{' '}
        </p>
        <p className='mb-6'>
          You’ll also see the option to donate to some organizations that are important to us, which
          include the Child Advocacy Center, Voices of Hope, and the National Harm Reduction
          Coalition.
        </p>
        <Link href={'https://www.zola.com/registry/opeweeloped'} passHref>
          <a className='button' rel='noOpener' target={'_blank'}>
            View Registry &rarr;
          </a>
        </Link>
        {/* <Registry_Charity />
        <Registry_Us />
        <Registry_Pets /> */}
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
