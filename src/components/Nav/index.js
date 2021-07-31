import Link from 'next/link'
import Image from 'next/image'
import MenuHam from '../MenuHam'
import { toBase64, shimmer } from '../../helpers'

import styled from 'styled-components'

const WrapperNav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 12%;
  z-index: 10;
`
const MenuHamburger = styled.div`
  width: 40%;
  margin: 0;
`
const LogoContainer = styled.div`
  width: 60%;
  padding-left: 2rem;
  :hover {
    cursor: pointer;
  }
`

function Nav({ light }) {
  return (
    <WrapperNav>
      <MenuHamburger>
        <MenuHam light={light} />
      </MenuHamburger>
      <Link href="/">
        <LogoContainer>
          <Image
            src="/Logotipo_Mesa_de_trabajo.png"
            alt="Mariachon inicio"
            width={202}
            height={112}
            quality={50}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(202, 112)
            )}`}
          />
        </LogoContainer>
      </Link>
    </WrapperNav>
  )
}

export default Nav
