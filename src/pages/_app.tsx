import { type AppType } from 'next/dist/shared/lib/utils'
import RootLayout from '../components/RootLayout'
import '../styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}

export default MyApp
