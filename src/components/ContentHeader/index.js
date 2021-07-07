import styled from 'styled-components'
import Button from '../Button'

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-bottom: 10%;
  z-index: 1;
`
const TitleH1 = styled.h1`
  color: ${(props) => props.theme.mediumBlue};
  font-size: 68px;
  font-family: 'Helvética Neue';
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`
const TextProps = styled.p`
  color: ${(props) => props.theme.black};
  font-size: 25px;
  font-family: 'Helvética ligt';
  font-weight: bold;
  margin: 0;
  margin-bottom: 20px;
`

const ContentHeader = () => (
  <WrapperContent>
    <TitleH1>Mariachi Angelópolis</TitleH1>
    <TextProps>
      Dale gala y emoción a tus eventos con la mejor música popular mexicana
    </TextProps>
    <Button>Informes</Button>
  </WrapperContent>
)

export default ContentHeader
