import { useRef } from 'react'

import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import * as theme from '../config/theme'

import Layout from '../components/Layout'

import ReCAPTCHA from 'react-google-recaptcha'

const keyRecatch = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  const recaptchaRef = useRef()

  return (
    <Provider store={store}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={keyRecatch} />

          <Component {...pageProps} recaptchaRef={recaptchaRef} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
