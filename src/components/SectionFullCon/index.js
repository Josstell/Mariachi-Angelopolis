import Image from 'next/image'
import { imageInicioFullUrl, toBase64, shimmer } from '../../helpers'
import styled from 'styled-components'

const WrapperInfo = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
`

const WrapperText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
`

const TextP = styled.p`
  color: ${(props) => props.theme.cyprus};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  text-align: center;
  font-size: 20px;
  font-family: Helvetica;
  font-weight: normal;
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`

const TextH2 = styled.h2`
  color: ${(props) => props.theme.cyprus};
  color: ${(props) => props.color};

  text-align: center;
  font-size: 38px;
  font-weight: bold;
  @media screen and (max-width: 900px) {
    font-size: 28px;
  }
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`

const SectionFullCon = ({ data }) => (
  <WrapperInfo>
    <Image
      loader={imageInicioFullUrl}
      src={data.backgroundImage.url}
      alt={data.backgroundImage.name}
      layout="fill"
      objectFit="cover"
      quality={70}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        shimmer('100%', '100%')
      )}`}
    />
    <WrapperText>
      <TextH2>{data.text}</TextH2>
      <TextP>Llamar</TextP>
      <TextP>{data.tel}</TextP>
      <TextP>Email</TextP>
      <TextP>{data.email}</TextP>
    </WrapperText>
  </WrapperInfo>
)

export default SectionFullCon
