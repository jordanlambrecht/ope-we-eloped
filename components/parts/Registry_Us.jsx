import H3 from '@typography/H3'
import Registry_Card from '@parts/Registry_Card'

function Registry_Us() {
  return (
    <div className='pt-8'>
      <H3>Us</H3>
      <p>yada yada yada</p>
      <div className='grid grid-cols-1 md:grid-cols-2 my-12 gap-y-4 gap-x-1 xl:gap-x-8'>
        <Registry_Card
          img={'/img/patrick.jpeg'}
          url={'https://www.zola.com/registry/collection-item/61bbe9fc4fbd6118d3bbd3c2'}
          header={'🏰 House Downpayment'}
          subheader={'we have snakes in our walls'}
        />
        <Registry_Card
          img={'/img/thisisfine.png'}
          url={'https://www.zola.com/registry/collection-item/6211e4e85b346e2a1638d6d6'}
          header={'🆘 Emergency Fund'}
          subheader={"we're very clumsy"}
        />
        <Registry_Card
          img={'/img/honeymoon.jpeg'}
          url={'https://www.zola.com/registry/collection-item/61bbe6174fbd6118d3bbd35a'}
          header={'🧖‍♀️ Honeymoon Fund'}
          subheader={'something'}
        />
        <Registry_Card
          img={'/img/diy.jpeg'}
          url={'https://www.zola.com/registry/collection-item/61bbe17c4fbd6118d3bbd2c5'}
          header={'🔨 🤕 DIY Fund'}
          subheader={'closely related to emergency fund'}
        />
      </div>
    </div>
  )
}
export default Registry_Us
