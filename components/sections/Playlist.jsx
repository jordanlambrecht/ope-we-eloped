import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Spotify_Playlist from '@parts/Spotify_Playlist'

function Registry({ num }) {
  return (
    <>
      <PageSection color={'cream-light'}>
        <InnerWrapper>
          <H2 before={num} color={'black'}>
            Playlist
          </H2>
          <p>
            We spent too much money on hashbrowns and can&apos;t afford a legetiment DJ, so
            we&apos;re crowd-sourcing our music instead. Add some tracks for us to play while we all
            eat the afformentioned hashbrowns. Remember, it&apos;s brunch, so there won&apos;t be a
            lot of dancing.{' '}
          </p>
          <p className='italic text-sm'>
            Note: any submission of the Chicken Dance, the Cha Cha Slide, or anything written by Ed
            Sheeran will result in immediate denial of entry at the event. Not really. But maybe.
          </p>
        </InnerWrapper>
        <InnerWrapper className='max-h-screen py-8 sm:py-20'>
          <Spotify_Playlist />
        </InnerWrapper>
      </PageSection>
    </>
  )
}
export default Registry
