/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'

import styled, { css } from 'styled-components'

const MenuToogle = styled.div`
  display: block;
  position: relative;
  top: 10px;
  left: 50px;

  z-index: 10;

  -webkit-user-select: none;
  user-select: none;
  a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  a:hover {
    color: tomato;
  }

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  /*
 * Just a quick hamburger
 */
  span {
    display: block;
    width: 50px;
    height: 4px;
    margin-bottom: 6px;
    position: relative;

    background: #cdcdcd;

    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    ${({ light }) =>
      light &&
      css`
        background: ${(props) => props.theme.persianBlue};
      `}
  }

  span.line2 {
    width: 45px;
  }
  span.line3 {
    width: 40px;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
    width: 33px;
    margin-bottom: 4px;
  }

  input:checked ~ span.line1 {
  }

  /*
 * But let's hide the middle one.
 */
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
    width: 33px;
    margin-bottom: 4px;
  }

  /*
 * Ohyeah and the last one should go the other direction
 */
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
    margin-bottom: 4px;
  }

  /*
 * Make this absolute positioned
 * at the top left of the screen
 */
  ul {
    position: absolute;
    width: 300px;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    background: ${(props) => props.theme.gainsboro};
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  ul li {
    padding: 10px 0;
    font-size: 22px;
  }

  /*
 * And let's slide it in from the left
 */
  input:checked ~ ul {
    transform: none;
  }
`

const MenuHam = ({ light }) => (
  <nav>
    <MenuToogle id="menuToggle" light={light}>
      <input type="checkbox" />

      <span className="line1" />
      <span className="line2" />
      <span className="line3" />

      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">
            <a>Nosotros</a>
          </Link>
        </li>

        <li>
          <Link href="/contact">Contáctanos</Link>
        </li>
      </ul>
    </MenuToogle>
  </nav>
)

export default MenuHam
