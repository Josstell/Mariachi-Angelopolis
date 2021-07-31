import styled from 'styled-components'

const WrapperEvents = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80vh;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const ContainerText = styled.div`
  width: 47%;
  min-width: 300px;
  height: 100%;
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin-bottom: ${(props) => props.marginBottom};
    margin-left: 0px;
    margin-right: 0px;
  }
`

const WrapperTextP = styled.div`
  background-color: ${(props) => props.theme.gainsboro};
  width: 100%;
  height: 100%;
  padding: 20px 20px 20px 20px;
`
const TextP = styled.p`
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.whiteLight};
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-family: 'Helvetica Neue';
  font-weight: bold;
  margin: 0;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-bottom: 20px;
  line-height: 170%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`

const AboutSectionOne = ({ data }) => (
  <WrapperEvents>
    <ContainerText marginLeft="20px" marginRight="10px" marginBottom="20px">
      <WrapperTextP>
        <TextP>{data.text1}</TextP>
      </WrapperTextP>
    </ContainerText>
    <ContainerText marginLeft="10px" marginRight="20px">
      <WrapperTextP>
        <TextP>{data.text2}</TextP>
      </WrapperTextP>
    </ContainerText>
  </WrapperEvents>
)

export default AboutSectionOne
