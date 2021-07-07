import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 html,
    body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Montserrat;
  background: ${(props) => props.whiteSmoke};
}

a {
  color: rgb(218, 215, 215);
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

* {
  box-sizing: border-box;
}
`

export default GlobalStyle
