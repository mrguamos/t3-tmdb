import { type AppType } from 'next/dist/shared/lib/utils'
import RootLayout from '../components/RootLayout'
import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NextNProgress
        color="rgb(94 234 212)"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  )
}

export default MyApp
