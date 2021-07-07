import styled from 'styled-components'

const ButtonProps = styled.button`
  display: block;
  color: ${(props) => props.theme.white};
  font-size: 30px;
  width: 40%;
  height: 10vh;
  background-color: ${(props) => props.theme.summerSky};
  border-radius: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
`
const Button = ({ children }) => <ButtonProps>{children}</ButtonProps>

export default Button
