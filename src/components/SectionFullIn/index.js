import styled from 'styled-components'
import { AButtonProps } from '../../styles/Button'
import { imageInicioFullUrl, toBase64, shimmer } from '../../helpers'
import Image from 'next/image'

const WrapperInfo = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
`

const WrapperText = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const TextP = styled.p`
  color: ${(props) => props.theme.whiteSmoke};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  text-align: center;
  font-size: 25px;
  font-family: Helvetica;
  font-weight: bold;
  margin: 0;
  padding-left: 20vw;
  padding-right: 20vw;
  margin-bottom: ${(props) => props.marginB};
`

const ButtonQuery = styled(AButtonProps)`
  font-size: 24px;
  width: 20vw;
  font-weight: 400;

  @media only screen and (max-width: 1024px) {
    font-size: 20px;

    height: 40px;
  }

  @media only screen and (max-width: 600px) {
    height: 10%;
    width: 40%;
  }
`
const messageWhats = `Más%20detalles%20sobre%20sus%20servicios,%20por%20favor...`

const SectionFullIn = ({ data }) => (
  <WrapperInfo>
    <Image
      loader={imageInicioFullUrl}
      src={data.backgroundImage.url}
      alt={data.backgroundImage.name}
      layout="fill"
      objectFit="cover"
      quality={10}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer('100%', '100%')
      )}`}
    />
    <WrapperText>
      <TextP color="#00000090" width="100%" marginB="8vh">
        {data.text}
      </TextP>

      <ButtonQuery
        type="button"
        href={`https://wa.me/5212226768956?text=${messageWhats}`}
        target="_blank"
        rel="noreferrer"
      >
        {data.buttonText}
      </ButtonQuery>
    </WrapperText>
  </WrapperInfo>
)

export default SectionFullIn
