import styled from 'styled-components'
import Image from 'next/image'
import Nav from '../Nav'
import ContentHeader from '../ContentHeader'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  margin-bottom: 20px;
`

const Header = () => (
  <Wrapper>
    <Image
      src="/mariachi_angelopolis.png"
      alt="Mariachon inicio"
      layout="fill"
      objectFit="cover"
      quality={80}
    />
    <Nav />
    <ContentHeader />
  </Wrapper>
)

export default Header
