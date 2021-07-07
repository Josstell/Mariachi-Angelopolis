import Image from 'next/image'
import styled, { css } from 'styled-components'

const WrapperFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.gainsboro};
  width: 100%;
  min-height: 50vh;
`
const SectionColumn = styled.div`
  display: flex;
  width: 33%;
  min-width: 28rem;
  flex-direction: column;
  align-items: ${({ alignCenter }) => (alignCenter ? 'center' : 'flex-start')};
  justify-content: space-between;
  ${({ paddingLeft }) =>
    paddingLeft &&
    css`
      padding-left: ${paddingLeft};
    `}
`
const AddressH3 = styled.h3`
  color: ${(props) => props.theme.prussianBlue};
  font-size: 22px;
  font-family: 'Helvética';
  font-weight: bold;
  line-height: 130%;
  ${({ marginZero }) =>
    marginZero &&
    css`
      margin: 0;
    `}
`

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
`

const ImageMargin = styled.div`
  margin-right: 20px;
`

const Footer = () => (
  <WrapperFooter>
    <SectionColumn alignCenter>
      <Image
        src="/mariachiangelopolis.png"
        alt="Mariachon inicio"
        width={202}
        height={112}
        quality={80}
      />
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
        <ImageMargin>
          <Image
            src="/face.png"
            alt="Mariachon inicio"
            width={40}
            height={40}
            quality={80}
          />
        </ImageMargin>
        <Image
          src="/instagram.png"
          alt="Mariachon inicio"
          width={40}
          height={40}
          quality={80}
        />
      </IconsWrapper>
      <AddressH3 marginZero>Inicio</AddressH3>
      <AddressH3 marginZero>Nosotros</AddressH3>
      <AddressH3 marginZero>Contactanos</AddressH3>
    </SectionColumn>
  </WrapperFooter>
)

export default Footer
