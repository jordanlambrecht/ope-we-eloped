import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import Link from 'next/link'
function Footer() {
  return (
    <footer>
      <PageSection>
        <InnerWrapper>
          <p className='max-w-2xl'>
            This site was built by hand by Jordan, who fundamentally believes in open and accessible
            education. As such, you&apos;re welcome to reuse, steal, and learn from the code{' '}
            <Link
              href='https://github.com/jordanlambrecht/ope-we-eloped'
              passHref
              target={'_blank'}
              rel=' noreferrer'
              className='font-semibold duration-300 border-b hover:opacity-80'
            >
              here
            </Link>
            .
          </p>
        </InnerWrapper>
      </PageSection>
    </footer>
  )
}
export default Footer
