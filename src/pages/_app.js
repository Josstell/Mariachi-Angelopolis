import { useRef } from 'react'

import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import Head from 'next/head'

import Script from 'next/script'

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
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
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
