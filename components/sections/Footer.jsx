import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import Link from 'next/link'
function Footer() {
  return (
    <footer>
      <PageSection>
        <InnerWrapper>
          <p>
            This site was hand-built by Jordan, who fundamentally believes in open and accessible
            education. As such, you&apos;re welcome to reuse, steal, and learn from the code{' '}
            <Link href='https://github.com/jordanlambrecht/ope-we-eloped' passHref>
              <a
                target={'_blank'}
                rel=' noreferrer'
                className='font-semibold border-b hover:opacity-80 duration-300'
              >
                here
              </a>
            </Link>
            .
          </p>
        </InnerWrapper>
      </PageSection>
    </footer>
  )
}
export default Footer
