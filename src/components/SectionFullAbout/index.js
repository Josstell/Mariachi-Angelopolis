import Image from 'next/image'
import { imageInicioFullUrl, toBase64, shimmer } from '../../helpers'
import styled from 'styled-components'

const WrapperSectionFull = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  z-index: 1;
  /* You must set a specified height */

  @media only screen and (max-width: 768px) {
    width: auto;
  }
  @media only screen and (max-width: 600px) {
    width: auto;
  }
`

const WrapperText = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const TextP = styled.p`
  color: ${(props) => props.theme.whiteSmoke};
  width: 60%;
  line-height: 150%;
  font-size: 22px;
  font-family: Helvetica;
  font-weight: bold;
  margin: 0;
  padding-left: 5vw;
  padding-right: 5vw;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    width: 70%;
    padding-left: 10%;
    padding-right: auto;
  }
  @media only screen and (max-width: 600px) {
    font-size: 15px;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 25%;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
  }
`

const WrapperImageMove = styled.div`
  div > img {
    object-position: 0px;
  }

  @media only screen and (max-width: 600px) {
    div > img {
      object-position: 90% bottom;
    }
  }
`

const SectionFullAbout = ({ data }) => (
  <WrapperSectionFull>
    <WrapperImageMove>
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
    </WrapperImageMove>
    <WrapperText>
      <TextP>
        {data.text1}
        <br />
        <br />
        <br />
        {data.text2}
      </TextP>
    </WrapperText>
  </WrapperSectionFull>
)

export default SectionFullAbout
