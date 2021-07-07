import styled from 'styled-components'
import Head from 'next/head'

// eslint-disable-next-line import/no-unresolved
import Header from '@components/Header/index'
import Footer from '../components/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const index = () => (
  <Container>
    <Head>
      <title>Mariachi Angelopolis</title>
      <meta
        name="Mariachi Angelopolis"
        content="Calidad y profesionalismo en cada uno de nuestros eventos."
      />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Header />
    <Footer />
  </Container>
)

export default index
