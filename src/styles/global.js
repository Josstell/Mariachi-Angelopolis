import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 html,
    body {
 
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif, Montserrat;
  background: #fff;
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
ul {
  list-style-type: none;
  font-family: Monserrat;
  font-weight:bold;
}
li {
  padding-bottom: 10px;
  margin-bottom: 0px;
  margin-left: 0px;
}

.item-header{
  flex-grow: 1;
  flex-shrink: 1;
}

.pointer {
        cursor: pointer;
      }


/*
spinner
*/
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}



`

export default GlobalStyle
