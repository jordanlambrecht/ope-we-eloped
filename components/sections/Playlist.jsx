import H2 from '@typography/H2'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Spotify_Playlist from '@parts/Spotify_Playlist'

function Registry({ num }) {
  return (
    <>
      <PageSection color={'cream'}>
        <InnerWrapper>
          <H2 before={num} color={'black'}>
            Playlist
          </H2>
          <p>Choose your own adventure. Add some brunch-y tracks for us to play</p>
          <p className='italic text-sm mt-2'>
            Note: Any submissions of the &apos;Chicken Dance,&apos; the &apos;Cha Cha Slide,&apos;
            or anything written by Ed Sheeran will result in immediate denial of entry at the event.
            Not really. But maybe.
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
