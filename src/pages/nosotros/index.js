import Head from 'next/head'

import Header from '../../components/Header/index'
import ContentHeader from '../../components/ContentHeader'
import SectionFullIn from '../../components/SectionFullIn'
import AboutSectionOne from '../../components/AboutSectionOne'
import SectionFullAbout from '../../components/SectionFullAbout'
import Space from '../../components/space'

import { paginaNosotros } from '../../helpers/data'

const index = ({ data }) => {
  const { headSEO, header, sectionFullIn, aboutSectionOne, sectionFullAbout } =
    data

  return (
    <>
      <Head>
        <title>{headSEO.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={headSEO.desciption} />
        <meta name="twitter:card" value="summary" />
        <meta property="og:title" content={headSEO.og_title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={headSEO.url} />
        <meta
          property="og:image"
          content="https://www.mariachiangelopolis.com/images/nosotros/MariachiAngelopolisNosotros.png"
        />
        <meta property="og:description" content={headSEO.og_description} />
        <meta name="keywords" content={headSEO.keywords} />
        <meta
          name="google-site-verification"
          content="bgZ6zL07dTTdxAkybG0PAFhGj5ArxFBtSaff-orltqk"
        />
      </Head>
      <Header urlImage={header.backgroundImage} image objectPos="right bottom">
        <ContentHeader
          textWidth="70%"
          text={header.text}
          textButton={header.textButton}
          widthB="45%"
          heightB="50px"
          sizeTextButton="20px"
          sizeText="50px"
        />
      </Header>
      <Space />
      <SectionFullIn data={sectionFullIn} />
      <Space />

      <AboutSectionOne data={aboutSectionOne} />
      <Space />

      <SectionFullAbout data={sectionFullAbout} />
      <Space />
    </>
  )
}

export async function getStaticProps() {
  const data = paginaNosotros
  return {
    props: {
      data,
    },
  }
}
export default index
