import ContentHeader from '@components/ContentHeader'
import Head from 'next/head'
import styled from 'styled-components'

import Header from '@components/Header'
import { privacity } from '@helpers/data'
import Space from '@components/space'

const ContainerText = styled.div`
  background-color: ${(props) => props.theme.whiteSmoke};
  width: 97%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 10%;
  padding-right: 10%;
  text-align: justify;
  z-index: 1;
`

const Ol = styled.ol`
  width: 90%;
  text-align: left !important;
  padding-left: 0;
`

const index = ({ data }) => {
  const { headSEO, header, avisoPrivacidad } = data

  return (
    <>
      <Head>
        <title>{headSEO.title}</title>
        <meta name={headSEO.meta.name} content={headSEO.meta.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header urlImage={header.backgroundImage} image objectPos="right bottom">
        <ContentHeader
          textWidth="50%"
          text={header.text}
          textButton={header.textButton}
          widthB="45%"
          heightB="50px"
          sizeTextButton="20px"
        />
      </Header>
      <Space />
      <ContainerText>
        <h1>{avisoPrivacidad.title}</h1>
        <h3>{avisoPrivacidad.subtitle1}</h3>
        <p>{avisoPrivacidad.text1}</p>
        <p>{avisoPrivacidad.text2}</p>
        <p>{avisoPrivacidad.text3} </p>
        <h3>{avisoPrivacidad.subtitle2}</h3>
        <p>{avisoPrivacidad.text4} </p>
        <p>{avisoPrivacidad.text5}</p>
        <Ol>
          <li>{avisoPrivacidad.datosPerso[0]}</li>
          <li>{avisoPrivacidad.datosPerso[1]}</li>
          <li>{avisoPrivacidad.datosPerso[2]}</li>
          <li>{avisoPrivacidad.datosPerso[3]}</li>
          <li>{avisoPrivacidad.datosPerso[4]}</li>
          <li>{avisoPrivacidad.datosPerso[5]}</li>
        </Ol>
        <p>{avisoPrivacidad.text6} </p>
        <p>{avisoPrivacidad.text7} </p>

        <Ol>
          <li>{avisoPrivacidad.requisitos[0]} </li>
          <li>{avisoPrivacidad.requisitos[1]} </li>
          <li>{avisoPrivacidad.requisitos[2]} </li>
          <li>{avisoPrivacidad.requisitos[3]} </li>
        </Ol>

        <p>{avisoPrivacidad.text8} </p>
        <p>{avisoPrivacidad.text9} </p>
        <p>{avisoPrivacidad.text10} </p>
        <p>{avisoPrivacidad.text11} </p>
        <p>{avisoPrivacidad.text12} </p>
        <p>{avisoPrivacidad.text13} </p>
      </ContainerText>
      <Space />
    </>
  )
}

export async function getStaticProps() {
  const data = privacity

  return {
    props: {
      data,
    },
  }
}

export default index
