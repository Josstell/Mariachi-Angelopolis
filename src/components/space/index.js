import styled from 'styled-components'

const EmptySpace = styled.div`
  width: 100%;
  height: 20px;
  border: none;
  background-color: #ffffff00;
  /* background-color: ${(props) => props.theme.whiteLight}; */
  z-index: 1;
`

const Space = () => <EmptySpace />

export default Space
