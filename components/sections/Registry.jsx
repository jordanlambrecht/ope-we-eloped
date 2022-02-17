import { useState } from 'react'
import H2 from '@typography/H2'
import H3 from '@typography/H3'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Link from 'next/link'

import Registry_Card from '@parts/Registry_Card'

function Registry({ num }) {
  const regItems = [
    <Registry_Card
      key={'max'}
      img={'/img/max.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
      header={'🐶 Maxwell'}
      subheader={'Slumber Pup'}
    />,
    <Registry_Card
      key={'pickles'}
      img={'/img/pickles.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
      header={'🦁 Pickles'}
      subheader={'Snarky Snow Horse'}
    />,
    <Registry_Card
      key={'fuji'}
      img={'/img/fuji.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
      header={'🐻‍❄️ FujiFilm'}
      subheader={'Snarky Snow Horse'}
    />,

    <Registry_Card
      key={'fish'}
      img={'/img/fish.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
      header={'🐯 Fishstix'}
      subheader={'Snarky Snow Horse'}
    />,
    <Registry_Card
      key={'coco'}
      img={'/img/coco.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
      header={'👸 coco'}
      subheader={'Snarky Snow Horse'}
    />,
    <Registry_Card
      key={'chanel'}
      img={'/img/chanel.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
      header={'🐆 Chanel'}
      subheader={'Snarky Snow Horse'}
    />,
  ]

  const [shuffledPets, setShuffle] = useState(Shuffle(regItems))
  function Shuffle(arr) {
    let j, x, index
    for (index = arr.length - 1; index > 0; index--) {
      j = Math.floor(Math.random() * (index + 1))
      x = arr[index]
      arr[index] = arr[j]
      arr[j] = x
    }
    return arr
  }
  return (
    <PageSection color={'cream-light'}>
      <InnerWrapper>
        <H2 before={num} color={'black'}>
          Registry
        </H2>
        <p>
          something something your presence is our present skjdfhksehksuef I dont know how to word
          this –bergen
        </p>
        <Link href={'https://www.zola.com/registry/bergenandjordan'} passHref>
          <a className='button' rel='noOpener' target={'_blank'}>
            View Entire Registry &rarr;
          </a>
        </Link>
        <div className='pt-12'>
          <H3>Charities</H3>
          <p>yada yada yada</p>
          <div className='grid grid-cols-1 lg:grid-cols-4 my-12 gap-8'>
            <Registry_Card
              img={'/img/charity.jpeg'}
              url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
              header={'Charity Name'}
              subheader={"Bergen's Charity choice"}
            />
            <Registry_Card
              img={'/img/charity.jpeg'}
              url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
              header={'Charity Name'}
              subheader={"Jordan's Charity choice"}
            />
          </div>
        </div>
        <div className='pt-8'>
          <H3>Us</H3>
          <p>yada yada yada</p>
          <div className='grid grid-cols-1 lg:grid-cols-4 my-12 gap-8'>
            <Registry_Card
              img={'/img/charity.jpeg'}
              url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
              header={'🏰 House Downpayment'}
              subheader={'sosmething'}
            />
            <Registry_Card
              img={'/img/diy.jpeg'}
              url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
              header={'🔨 🤕 DIY Fund'}
              subheader={'something'}
            />
            <Registry_Card
              img={'/img/honeymoon.jpeg'}
              url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
              header={'🧈 Honeymoon Fund'}
              subheader={'something'}
            />
          </div>
        </div>
        <div className='pt-8'>
          <H3>Pets</H3>
          <p>yada yada yada</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 my-12 gap-2 lg:gap-8'>
            {shuffledPets.map((pet) => {
              return pet
            })}
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Registry
