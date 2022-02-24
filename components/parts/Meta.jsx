import React from 'react'
import { NextSeo } from 'next-seo'

const Meta = () => {
  return (
    <>
      <NextSeo
        title='Bergen + Jordan 4Ever'
        description='Bergen Johnston and Jordan Lambrecht got Secret Married on June 28th, 2020. Now they&apso; celebrating with lunch.'
        openGraph={{
          url: 'https://www.opeweeloped.us',
          type: 'website',
          locale: 'en_IE',
          site_name: 'Bergen + Jordan 4Ever',
          title: 'Home',
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
          cardType: 'summary_large_image',
        }}
      />
    </>
  )
}
export default Meta
