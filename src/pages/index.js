import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'

// eslint-disable-next-line import/no-unresolved
import Header from '@components/Header/index'
import SectionFull from '../components/SectionFull'
import EventSection from '../components/EventSection'
import Services from '../components/Services'
import ContentHeader from '../components/ContentHeader'
import Space from '../components/space'

import { paginaInicio } from '../helpers/data'

import { SET_URL } from '@redux/client/client.type'

const domainURl = process.env.DOMAIN_URL

const Index = ({ data, urlDomain, recaptchaRef }) => {
  const { headSEO, header, sectionFull, eventSection, services } = data
  const { success, error } = useSelector((state) => state.messageSuccesError)

  const dispatch = useDispatch()

  dispatch({
    type: SET_URL,
    payload: urlDomain,
  })

  return (
    <>
      <Head>
        <title>{headSEO.title}</title>
        <meta name={headSEO.meta.name} content={headSEO.meta.content} />
        <meta
          name="google-site-verification"
          content="bgZ6zL07dTTdxAkybG0PAFhGj5ArxFBtSaff-orltqk"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header urlImage={header.backgroundImage} image light>
        <ContentHeader
          title={header.title}
          text={header.text}
          textButton={header.textButton}
          success={success}
          error={error}
        />
      </Header>
      <Space />
      <SectionFull data={sectionFull} />
      <Space />

      <EventSection data={eventSection} />
      <Space />

      <Services data={services} recaptchaRef={recaptchaRef} />
      <Space />
    </>
  )
}

export async function getStaticProps() {
  const data = paginaInicio
  const urlDomain = domainURl
  return {
    props: {
      data,
      urlDomain,
    },
  }
}

export default Index
