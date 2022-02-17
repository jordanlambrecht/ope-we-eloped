import '../styles/globals.css'
import '../styles/typography.css'

function MyApp({ Component, pageProps }) {
  console.log(
    'Created by Jordan Lambrecht and Bergen Johnston in Lincoln, Nebraska.  This code is open-sourced in 2022 under an MIT licenes. The original github repo can be found here: https://github.com/jordanlambrecht/ope-we-eloped',
  )
  console.log('#BlackLivesMatter #ACAB')
  return <Component {...pageProps} />
}

export default MyApp
