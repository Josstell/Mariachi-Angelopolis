import Image from 'next/image'
import Nav from '../Nav'

import styled from 'styled-components'
import { imageInicioFullUrl, toBase64, shimmer } from '../../helpers'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  height: ${(props) => props.height};

  @media only screen and (max-width: 1024px) {
    height: ${(props) => props.contact || '100vh'};

    background-color: rgba(0, 0, 0, 0.1);
  }
  @media only screen and (max-width: 600px) {
    height: ${(props) => props.contact || '100vh'};

    background-color: rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-height: 380px) {
    height: 200vh;

    background-color: rgba(0, 0, 0, 0.8);
  }
`
const WrapperChildren = styled.div`
  position: relative;

  width: 100%;
  height: 87vh;
  z-index: 1;
  margin: 0;

  @media only screen and (max-height: 600px) {
    height: 100vh;
  }

  @media only screen and (max-height: 380px) {
    height: 170vh;

    background-color: rgba(0, 0, 0, 0.8);
  }
  /* border: 2px solid red; */
`

const WrapperImageMove = styled.div`
  div > img {
    object-position: 00px -600px;
    object-position: ${(props) => props.objectPos};
  }

  @media only screen and (max-width: 1024px) {
    div > img {
      position: fixed !important;
      /* z-index: -1; */

      object-position: -0px -300px;
      object-position: ${(props) => props.objectPos};
    }
  }

  @media only screen and (max-width: 600px) {
    div > img {
      position: fixed !important;

      /* object-position: -200px; */
      object-position: right bottom;
      object-position: ${(props) => props.objectPos};
    }
  }
`

const Header = ({
  urlImage,
  children,
  justify,
  height,
  imagePos,
  objectPos,
  contact,
  light,
}) => (
  <Wrapper
    justify={justify}
    height={height}
    imagePos={imagePos}
    contact={contact}
  >
    <WrapperImageMove objectPos={objectPos}>
      <Image
        loader={imageInicioFullUrl}
        src={urlImage.url}
        alt={urlImage.name}
        layout="fill"
        objectFit="cover"
        quality={70}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer('100%', '100%')
        )}`}
      />
    </WrapperImageMove>
    <Nav style={{ zIndex: 10 }} light={light} />
    <WrapperChildren>{children}</WrapperChildren>
  </Wrapper>
)

export default Header
