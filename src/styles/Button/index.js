/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const ButtonProps = styled.button`
  display: block;
  color: ${(props) => props.theme.white};
  font-family: 'Helvetica Neue';
  font-weight: lighter;
  font-size: 30px;
  width: 100%;
  height: 10%;
  background-color: ${(props) => props.theme.summerSky};
  border-radius: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  border: none;
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.summerSkyLight};
  }
`

export const AButtonProps = styled.a`
  color: white;
  background-color: ${(props) => props.theme.summerSky};
  padding-top: 1.8vh;
  padding-bottom: 1vh;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  margin-top: 1vh;
  margin-bottom: 1vh;
  cursor: pointer;
  border-radius: 30px;
  border: none;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.summerSkyLight};
  }
`
