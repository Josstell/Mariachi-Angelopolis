import styled from 'styled-components'
import Image from 'next/image'

const WrapperNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 12%;
  z-index: 1;
`
const MenuHamburger = styled.div`
  width: 40%;
  padding-left: 2rem;
`
const LogoContainer = styled.div`
  width: 60%;
  padding-left: 2rem;
`

function Nav() {
  return (
    <WrapperNav>
      <MenuHamburger>
        <h1>menu</h1>
      </MenuHamburger>
      <LogoContainer>
        <Image
          src="/mariachiangelopolis.png"
          alt="Mariachon inicio"
          width={202}
          height={112}
          quality={80}
        />
      </LogoContainer>
    </WrapperNav>
  )
}

export default Nav
