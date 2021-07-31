import { ButtonProps } from '../../styles/Button'

const Button = ({ children, fontSize, height, width }) => (
  <ButtonProps fontSize={fontSize} height={height} width={width}>
    {children}
  </ButtonProps>
)

export default Button
