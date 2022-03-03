import H2 from '@typography/H2'
import H3 from '@typography/H3'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Image from 'next/image'
import Button_Filled_LArrow from '@parts/Button_Filled_LArrow'
import OurStory_Landing from '@sections/OurStory_Landing'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

function OurStory() {
  return (
    <main>
      <Head>
        <title>Our Story</title>
        <NextSeo
          title='Our Story'
          description='Bergen Johnston and Jordan Lambrecht got Secret Married on June 28th, 2020. Now they&apso;re celebrating with lunch.'
          openGraph={{
            url: 'https://www.opeweeloped.us',
            title: 'Our Story',
            type: 'website',
            locale: 'en_IE',
            site_name: 'Bergen + Jordan 4Ever',
            description:
              'Bergen Johnston and Jordan Lambrecht got Secret Married on June 28th, 2020. Now they&apso; celebrating with lunch.',
            images: [
              {
                url: '/img/jordan-lambrecht-bergen-johnston_01.jpg',
                width: 1080,
                height: 1080,
                alt: 'Bergen Johnston and Jordan Lambrecht',
                type: 'image/jpeg',
              },
            ],
            site_name: 'Ope We Eloped',
          }}
          twitter={{
            handle: '@jlambrecht265',
          }}
        />
      </Head>
      <OurStory_Landing />
      <PageSection color={'cream'}>
        <InnerWrapper>
          <div className='mb-12'>
            <Button_Filled_LArrow text='Back' url='/' />
          </div>

          <div className='mt-12'>
            <H3>How We Met</H3>

            <div>
              <p className='font-semibold italic'>Bergen:</p>
              <p className='mb-6'>
                As all great (millennial) love stories start - we matched on Tinder. It was summer
                2020, and there wasn’t much going on.{' '}
              </p>
              <p className='mb-6'>
                Except for a heated presidential election, an unprecedented worldwide health crisis,
                and everything was on fire. America’s morale (gauged by Twitter) was at an all-time
                low. You couldn’t buy toilet paper, nothing was worth showering for, and my mental
                health was a solid 2 out of 10. So I decided it was the perfect time to meet
                someone.{' '}
              </p>
              <p className='mb-6'>
                I downloaded Tinder and uploaded a photo of myself sitting on the floor of a New
                York City subway car devouring nachos. Then, I uploaded 5 additional photos that
                were just of my cats.{' '}
              </p>
              <p className='mb-6'>
                I swiped right on Jordan. He swiped right on me. I’m still not sure why he read my
                bio and thought, “this is definitely someone I should initiate an interaction with,”
                but I’m thankful he did.{' '}
              </p>
              <p className='mb-6'>
                We texted. I forgot to respond. He triple-texted. We decided to meet in-person. Then
                I rescheduled several times. 30 minutes after we were supposed to meet, I called him
                to say: “Hey, so, I’m not an ‘on-time’ person. I’m running super late, but I’m on my
                way.”{' '}
              </p>
              <p className='mb-6'>
                He laughed and said, “yeah, we’re gonna get along great. I actually haven’t left my
                house yet.”{' '}
              </p>
              <p>We stayed on the phone until we both pulled up at the Tavern.</p>
            </div>
          </div>
          <div className='mt-12'>
            <H3>How We Knew</H3>
            <div>
              <p className='font-semibold italic'>Bergen:</p>
              <p className='mb-6'>
                Right before I left my house, I shared my location with a close friend (as
                millennials do). I texted her to say that I was going on a date but definitely not
                looking for anything serious.{' '}
              </p>
              <p className='mb-6'>
                3 hours later I sent her a follow-up text saying, “actually this person is my
                soulmate.”{' '}
              </p>
              <p className='mb-6'>Our first date lasted like, 10 hours.</p>
            </div>
            <div>
              <p className='mt-12 font-semibold italic'>Jordan:</p>
              <p className='mb-6'>
                I knew from the second I pulled up to the bar and the tiniest human in the world got
                out of her equally small Honda Fit. The first thought that popped into my head was,
                “wow, she reverse-catfished me with those terrible Tinder photos." The second was,
                “This is the most radiant woman I’ve ever seen in my life." I mean, yeah, she’s
                stupidly hot, but that wasn’t necessarily the origin of the thought.
              </p>
              <p className='mb-6'>
                I instinctually have an uncannily good read of people. Humans come in a wide variety
                of personality flavors, but there’s a rare kind that I’ve only come across a handful
                of times in my life. It had bothered me for years trying to figure out how to define
                it, but it clicked the moment I met her. The closest term I’ve been able to find to
                define it is the French phrase ‘Joie De Vivre’, which means an exultation of spirit.
                When you look into her eyes long enough, there’s a flame. Bergen is a tiny human
                with a booming life force. It was as if there was an invisible, swirling energy
                manifesting outwards from an incredible presence.{' '}
              </p>
              <p className='mb-6'>
                You’d think that would equate to some boisterous tank of a human, but it doesn’t.
                She was/is calm, soft-spoken, and gentle. She laughed at my stupid jokes. She never
                broke eye contact once when I helplessly spilled out secrets I had never told anyone
                before. She pretended to like Fuji.
              </p>
              <p className='mb-6'>
                Three hours later, I got up and sent a text from the bathroom to my friend, “This is
                the best date I’ve ever been on, I think she might be my soulmate.”
              </p>
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
      <PageSection color='cream-light'>
        <div className='max-h-screen grid grid-cols-2 lg:grid-cols-4 gap-1 mt-8 '>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/bergen-jordan-courthouse-5.jpg'}
              src={'/img/bergen-jordan-courthouse-5.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/bergen-jordan-courthouse-3s.jpg'}
              src={'/img/bergen-jordan-courthouse-3.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-square'>
            <Image
              placeholder='blur'
              blurDataURL={'/img/bergen-jordan-courthouse-1.jpg'}
              src={'/img/bergen-jordan-courthouse-1.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
          <div className='relative w-full aspect-w-1 aspect-h-1'>
            <Image
              placeholder='blur'
              blurDataURL={'bergen-jordan-courthouse-4.jpg'}
              src={'/img/bergen-jordan-courthouse-4.jpg'}
              alt={'Jordan Lambrecht and Bergen Johnston'}
              layout={'fill'}
              objectFit={'cover'}
            />
          </div>
        </div>
        <InnerWrapper>
          <div className='mt-12'>
            <H3>How We Got Married</H3>
            <div>
              <p className='font-semibold italic'>Bergen:</p>
              <p className='mb-6'>It was summer 2021. </p>
              <p className='mb-6'>It was a Monday. </p>
              <p className='mb-6'>
                What started as “wouldn’t it be funny if we got married today,” suddenly became
                dead-serious when we realized that we actually wanted to get married - like, now. It
                was 2:30pm, and Jordan called the courthouse to see if it was possible to get
                married that afternoon. The person who answered probably thought we were insane.
                They said, “yeah, but you’d have to get here before 4pm.”{' '}
              </p>
              <p className='mb-6'>
                Then I asked Jordan if he actually wanted to get married today. He said yes. Then,
                he got down on both knees and asked me the same thing.{' '}
              </p>
              <p className='mb-6'>
                We texted 2 close friends and asked if they could meet us at the courthouse. We
                provided them with zero context, and they both showed up anyway, with no questions
                asked (except for “is it fine if I’m wearing jeans?”). We got married at 4:30pm.
                Mike bought us burrito bowls at Chipotle for dinner.{' '}
              </p>
              <p>Best Monday, ever.</p>
            </div>
            <div>
              <p className='mt-12 font-semibold italic'>Jordan:</p>
              <p className='mb-6'>
                Bergen is leaving out a critical part for my benefit. What she didn&apos;t mention
                is that I was having one of – not even exaggerating – the worst days of my life.
              </p>
              <p className='mb-6'>
                That&apos;s the kind of person she is and it&apos;s one of the things I love the
                most about her. She can take the most abhorrent things in the world and replace them
                with good. Everything she does adds a net gain to the universe.{' '}
              </p>
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
      <PageSection>
        <InnerWrapper>
          <div className='mb-12'>
            <Button_Filled_LArrow text='Back' url='/' />
          </div>
        </InnerWrapper>
      </PageSection>
    </main>
  )
}
export default OurStory
