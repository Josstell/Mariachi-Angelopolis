import Head from 'next/head'
import Header from '../../components/Header/index'

import { useDispatch } from 'react-redux'

import SectionFullCon from '../../components/SectionFullCon'
import ContactSection from '../../components/ContactSection'
import Space from '../../components/space'

import { paginaContacto } from '../../helpers/data'
import { useEffect } from 'react'
import { CLEAR_MESSAGE_SUCCESS_ERROR } from '@redux/client/client.type'

const Index = ({ data, recaptchaRef }) => {
  const { headSEO, header, sectionFullCon } = data

  const dispatch = useDispatch()

  function resetMessage() {
    return new Promise(() =>
      setTimeout(
        () =>
          dispatch({
            type: CLEAR_MESSAGE_SUCCESS_ERROR,
          }),
        2000
      )
    )
  }

  useEffect(() => {
    resetMessage()
  }, [])

  return (
    <>
      <Head>
        <title>{headSEO.title}</title>
        <meta name={headSEO.meta.name} content={headSEO.meta.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        urlImage={header.backgroundImage}
        justify
        image
        objectPos="left bottom"
        contact="120vh"
      >
        <ContactSection
          title={header.title}
          textButton={header.textButton}
          recaptchaRef={recaptchaRef}
        />
      </Header>
      <Space />
      <SectionFullCon data={sectionFullCon} />
      <Space />
    </>
  )
}
export async function getStaticProps() {
  const data = paginaContacto

  return {
    props: {
      data,
    },
  }
}

export default Index
