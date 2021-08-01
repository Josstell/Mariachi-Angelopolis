import Image from 'next/image'

import Space from '../space'
import { imageInicioFullUrl, toBase64, shimmer } from '../../helpers'

import styled from 'styled-components'

const WrapperEvents = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80vh;
  z-index: 1;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 900px) {
    height: auto;
  }
`

const ContainerText = styled.div`
  width: 47%;
  height: 100%;
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  background-color: ${(props) => props.theme.whispersBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 900px) {
    width: 90%;

    margin-left: 20px;
    margin-right: 20px;
  }
`
const TextPAndBackground = styled.div`
  width: 47%;
  height: 100%;

  position: relative;

  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media only screen and (max-width: 900px) {
    width: 90%;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`

const WrapperText = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
const TextP = styled.p`
  color: ${(props) => props.theme.black};
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-family: 'Helvetica Neue';
  font-weight: bold;
  margin: 0;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 20px;
  line-height: 170%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    font-size: 15px;
    padding-left: 10vw;
    padding-right: 10vw;
  }
`

const CuadroInner = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.whiteLight};
  @media only screen and (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`

const TextH2 = styled.h2`
  color: ${(props) => props.theme.black};
  font-family: 'Montserrat';
  font-size: 60px;
  font-weight: bold;
  /*  padding-left: 22vh;
  padding-right: 22vh; */
  @media only screen and (max-width: 1024px) {
    font-size: 50px;
    padding-left: 1vh;
    padding-right: 1vh;
  }
  @media only screen and (max-width: 900px) {
    font-size: 40px;
    padding-left: 1vh;
    padding-right: 1vh;
  }
`

const EventSection = ({ data }) => (
  <>
    <WrapperEvents>
      <TextPAndBackground marginLeft="20px" marginRight="10px">
        <Image
          loader={imageInicioFullUrl}
          src={data[0].backgroundImage.url}
          alt={data[0].backgroundImage.name}
          layout="fill"
          objectFit="cover"
          quality={50}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer('100%', '100%')
          )}`}
        />
        <WrapperText>
          <CuadroInner>
            <TextH2>{data[0].title}</TextH2>
            <TextP>
              {data[0].text1}
              <br />
              <br />
              {data[0].text2}
            </TextP>
          </CuadroInner>
        </WrapperText>
      </TextPAndBackground>
      <ContainerText marginLeft="10px" marginRight="20px">
        <CuadroInner>
          <TextH2>{data[1].title}</TextH2>
          <TextP>
            {data[1].text1}
            <br />
            <br />
            {data[1].text2}
          </TextP>
        </CuadroInner>
      </ContainerText>
    </WrapperEvents>
    <Space />

    <WrapperEvents>
      <TextPAndBackground marginLeft="20px" marginRight="10px">
        <Image
          loader={imageInicioFullUrl}
          src={data[3].backgroundImage.url}
          alt={data[3].backgroundImage.name}
          layout="fill"
          objectFit="cover"
          quality={10}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer('100%', '100%')
          )}`}
        />
        <WrapperText>
          <CuadroInner>
            <TextH2>{data[3].title}</TextH2>
            <TextP>
              Para ese día tan especial, celebrando una nueva etapa de la vida y
              un proyecto en común con tu pareja.
              <br />
              <br />
              Una buena organización, vestuarios, invitados y por supuesto un
              buen mariachi con el profesionalismo que nos distingue.
            </TextP>
          </CuadroInner>
        </WrapperText>
      </TextPAndBackground>
      <ContainerText marginLeft="10px" marginRight="20px">
        <CuadroInner>
          <TextH2>{data[2].title}</TextH2>
          <TextP>
            {data[2].text1}
            <br />
            <br />
            {data[2].text2}
          </TextP>
        </CuadroInner>
      </ContainerText>
    </WrapperEvents>
  </>
)

export default EventSection
