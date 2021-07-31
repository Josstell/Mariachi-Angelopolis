/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import Image from 'next/image'

import { toBase64, shimmer } from '../../helpers'

import styled, { css } from 'styled-components'

const ContainerFooter = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  background-color: ${(props) => props.theme.whiteSmoke};
`

const WrapperRowFooter = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  @media only screen and (max-width: 768px) {
    flex-wrap: no-wrap;
  }
`
const SectionColumn = styled.div`
  display: flex;
  width: 30%;
  min-width: 25vw;
  flex-direction: column;
  align-items: ${({ alignCenter }) => (alignCenter ? 'center' : 'flex-start')};
  justify-content: space-between;
  ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding-left: ${paddingLeft};
    `}
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    width: 100vw !important;
    align-items: center;
    justify-content: center;
    padding-left: 1vh;
  }
`
const AddressH3 = styled.h3`
  color: ${(props) => props.theme.prussianBlue};
  font-size: 22px;
  font-family: Helvetica;
  font-weight: bold;
  line-height: 130%;
  ${({ marginZero }) =>
    marginZero &&
    css`
      margin: 0;
    `}

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    width: 80vw;
  }
`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

const ImageMargin = styled.div`
  margin-right: 20px;
`

const HorizontalLine = styled.hr`
  width: 90vw;
  color: ${(props) => props.blackLight};
  margin-bottom: 0;
  margin-top: 0;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`

const SectionPrivacity = styled.div`
  width: 100%;
  height: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 3vh;

  padding-bottom: 3vh;
  margin-top: 0;
  @media only screen and (max-width: 768px) {
    padding-left: 10vw;
    padding-right: 10vw;
    margin: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`

const TextP = styled.p`
  color: ${(props) => props.theme.prussianBlue};
  font-size: 15px;
  font-family: 'Helvética Neue';
  font-weight: lighter;
  margin: 0;
  padding-left: ${(props) => props.padding};
  padding-top: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`
const Strong = styled.strong`
  font-weight: 800;
`

const Footer = () => (
  <ContainerFooter>
    <WrapperRowFooter>
      <SectionColumn alignCenter>
        <div className="pointer">
          <Link href="/">
            <Image
              src="/mariachiangelopolis.png"
              alt="Mariachon inicio"
              width={212}
              height={100}
              quality={50}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(202, 112)
              )}`}
            />
          </Link>
        </div>
      </SectionColumn>

      <SectionColumn paddingLeft="5%">
        <AddressH3>
          Vía Atlixcayotl. Villa Escondida 5D Fraccionamiento Villas de Atlixco,
          San Andres Cholula, Puebla
        </AddressH3>
        <AddressH3>informes@mariachiangelopolis.com</AddressH3>
      </SectionColumn>
      <SectionColumn paddingLeft="15%">
        <IconsWrapper>
          <ImageMargin className="pointer">
            <Link href="/">
              <Image
                src="/face.png"
                alt="Mariachon inicio"
                width={40}
                height={40}
                quality={80}
              />
            </Link>
          </ImageMargin>
          <div className="pointer">
            <Link href="/">
              <Image
                src="/instagram.png"
                alt="Mariachon inicio"
                width={40}
                height={40}
                quality={80}
              />
            </Link>
          </div>
        </IconsWrapper>
        <div className="pointer">
          <Link href="/">
            <AddressH3 marginZero>Inicio</AddressH3>
          </Link>
        </div>
        <div className="pointer">
          <Link href="/about">
            <AddressH3 marginZero>Nosotros</AddressH3>
          </Link>
        </div>

        <div className="pointer">
          <Link href="/contact">
            <AddressH3 marginZero>Contactanos</AddressH3>
          </Link>
        </div>
      </SectionColumn>
    </WrapperRowFooter>

    <HorizontalLine />
    <SectionPrivacity>
      <TextP>
        Creado por <Strong>2F</Strong> / Todos derechos reservados
      </TextP>
      <div className="pointer">
        <Link href="/privacity-policy">
          <TextP>Aviso de privacidad</TextP>
        </Link>
      </div>
    </SectionPrivacity>
  </ContainerFooter>
)

export default Footer
