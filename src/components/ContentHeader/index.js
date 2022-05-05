import styled, { css } from 'styled-components'
import { AButtonProps } from '../../styles/Button'

const WrapperContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  padding-left: 10vh;
  /* border: 3px solid green; */

  @media only screen and (max-width: 768px) {
    justify-content: flex-start;

    padding-left: 5vh;
  }
  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    font-size: 84px;
    padding-left: 2vh;
  }
`

const TitleH1 = styled.h2`
  width: 100%;
  color: ${(props) => props.theme.mediumBlue};
  font-family: 'Helvetica Neue';
  font-size: 48px;
  font-weight: bold;
  padding-top: 10%;
  margin: 0;

  /* border: 3px solid blue; */

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
    width: 80%;
  }
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    width: 80%;
    padding-top: 2%;
  }
  @media only screen and (max-width: 600px) {
    margin: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 6vh;

    font-size: 28px;
    text-align: center;
  }
`
const TextProps = styled.h1`
  width: 70%;
  color: ${(props) => props.theme.black};
  font-family: 'Helvetica Neue';
  font-size: 20px;
  font-size: ${(props) => props.sizeText};
  font-weight: bold;
  margin: 0;
  padding-top: 2%;
  padding-bottom: 2%;
  ${({ textWidth }) =>
    textWidth &&
    css`
      width: 70%;
      color: ${(props) => props.theme.whiteSmoke};
      line-height: 150%;
      margin-bottom: 5vh;
    `}
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    width: 70%;
    padding-top: 8%;
    padding-bottom: 5%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    text-align: center;
    padding-top: 4vh;
    width: 100%;
    padding-left: 3vw;
    padding-right: 3vw;
  }
  /* border: 3px solid blue; */
`

const ButtonQuery = styled(AButtonProps)`
  width: 24%;
  height: 8%;
  font-weight: 400;
  padding-top: 5px;

  @media only screen and (max-width: 1024px) {
    font-size: 24px;
    width: 30%;
    height: 7%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 25px;
    width: 60%;
    height: 10%;
    padding-top: 1.8vh;
  }
`
const Span = styled.span`
  color: ${(props) => props.theme.mediumBlue};
  color: ${(props) => props.color};
  font-size: 1vw;
  font-weight: 900;
  @media only screen and (max-width: 600px) {
    margin-top: 5vh;
    font-size: 2vh;
    width: 60%;
    height: 10%;
  }
`

const messageWhats = `Más%20detalles%20sobre%20sus%20servicios,%20por%20favor...`

const ContentHeader = ({
  title,
  text,
  textButton,
  textWidth,
  sizeText,
  success,
  error,
}) => (
  <WrapperContent>
    {success?.message ? <Span>{success?.message}</Span> : null}
    {error?.errGral ? <Span color="red">{error.errGral}</Span> : null}
    <TitleH1>{title}</TitleH1>
    <TextProps textWidth={textWidth} sizeText={sizeText}>
      {text}
    </TextProps>
    <ButtonQuery
      type="button"
      href={`https://wa.me/5212226768956?text=${messageWhats}`}
      target="_blank"
      rel="noreferrer"
    >
      {textButton}
    </ButtonQuery>
  </WrapperContent>
)

export default ContentHeader
