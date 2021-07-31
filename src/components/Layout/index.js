import styled from 'styled-components'

import Footer from '../Footer'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Layout = ({ children }) => (
  <Container>
    {children}
    <Footer />
  </Container>
)

export default Layout
