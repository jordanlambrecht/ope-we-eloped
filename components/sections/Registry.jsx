import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Link from 'next/link'

function Registry({ num }) {
  return (
    <PageSection color={'cream'} id='registry'>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Registry
        </H2>
        <p className='mt-1 mb-6'>
          Gifts are not expected and we are just excited to have you join us. We don’t have a formal
          registry, but you can contribute to cash funds if you’d like! These are set up via
          Zola.com and have been designated for things like our honeymoon, Jordan’s DIY Home Depot
          excursions &amp; vet bills for our zoo (SOS).{' '}
        </p>
        <p className='mb-6'>
          You’ll also see the option to donate to some organizations that are important to us, which
          include the Child Advocacy Center, Voices of Hope, and the National Harm Reduction
          Coalition.
        </p>
        <Link
          href={'https://www.zola.com/registry/opeweeloped'}
          passHref
          className='button'
          rel='noOpener'
          target={'_blank'}>
          
            View Registry &rarr;
          
        </Link>
      </InnerWrapper>
    </PageSection>
  );
}
export default Registry
