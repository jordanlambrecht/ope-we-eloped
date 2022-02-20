import H3 from '@typography/H3'
import Registry_Card from '@parts/Registry_Card'
import { useState } from 'react'

function Registry_Pets() {
  const regItems = [
    <Registry_Card
      key={'max'}
      img={'/img/max.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbddda4fbd6118d3bbd24f'}
      header={'🐶 Maxwell'}
      subheader={'Slumber Pup'}
    />,
    <Registry_Card
      key={'pickles'}
      img={'/img/pickles.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbde174fbd6118d3bbd257'}
      header={'🦁 Pickles'}
      subheader={'Snarky Snow Horse'}
    />,
    <Registry_Card
      key={'fuji'}
      img={'/img/fuji.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbde4c7788887cb540ff77'}
      header={'🐻‍❄️ FujiFilm'}
      subheader={'Snarky Snow Horse'}
    />,

    <Registry_Card
      key={'fish'}
      img={'/img/fish.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbdef008bfb42ac87796e0'}
      header={'🐯 Fishstix'}
      subheader={'Snarky Snow Horse'}
    />,
    <Registry_Card
      key={'coco'}
      img={'/img/coco.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbdf4f4fbd6118d3bbd27c'}
      header={'👸 coco'}
      subheader={'Snarky Snow Horse'}
    />,
    <Registry_Card
      key={'chanel'}
      img={'/img/chanel.jpeg'}
      url={'https://www.zola.com/registry/collection-item/61bbe0fe08bfb42ac8779728'}
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
    <div className='pt-8'>
      <H3>Pets</H3>
      <p>yada yada yada</p>
      <div className='grid grid-cols-2 lg:grid-cols-3 my-12 gap-4 sm:gap-0 xl:gap-8'>
        {shuffledPets.map((pet, index) => {
          return <spsan key={index}>{pet}</spsan>
        })}
      </div>
    </div>
  )
}
export default Registry_Pets
