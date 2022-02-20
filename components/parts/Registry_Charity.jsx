import H3 from '@typography/H3'
import Registry_Card from '@parts/Registry_Card'

function Registry_Charity() {
  return (
    <div className='pt-12'>
      <H3>Charities</H3>
      <p>yada yada yada</p>
      <div className='grid grid-cols-1 md:grid-cols-3 my-12 2xlgap-x-8 gap-y-4'>
        <Registry_Card
          img={'/img/harmreduction.png'}
          url={'https://www.zola.com/registry/collection-item/6211dd2e43737100c4eb2b3f'}
          header={'National Harm Reduction Coalition'}
          subheader={"Bergen's Charity choice"}
        />
        <Registry_Card
          img={'/img/voicesofhope.png'}
          url={'https://www.zola.com/registry/collection-item/61bbe9b47788887cb5410139'}
          header={'Voices of Hope'}
          subheader={"Bergen's Charity choice"}
        />
        <Registry_Card
          img={'/img/cac.png'}
          url={'https://www.zola.com/registry/collection-item/6211dd1c9acf05662603d9a0'}
          header={'Child Advocacy Center'}
          subheader={"Jordan's Charity choice"}
        />
      </div>
    </div>
  )
}
export default Registry_Charity
