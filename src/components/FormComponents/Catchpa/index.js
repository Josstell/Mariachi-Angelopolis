import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  //   validateCaptcha,
} from 'react-simple-captcha'

import InputBeau from '../InputForm'

import { useEffect } from 'react'
import styled from 'styled-components'

const Recatchers = styled.div`
  margin-top: 3vh;
`

const Catchpa = () => {
  useEffect(() => {
    loadCaptchaEnginge(6, 'rgba(0,0,0,0)', 'white')
  }, [])

  //   const doSubmit = () => {
  //     let user_captcha = document.getElementById('user_captcha_input').value

  //     if (validateCaptcha(user_captcha) === true) {
  //       alert('Captcha Matched')
  //       loadCaptchaEnginge(6)
  //       document.getElementById('user_captcha_input').value = ''
  //     } else {
  //       alert('Captcha Does Not Match')
  //       document.getElementById('user_captcha_input').value = ''
  //     }
  //   }

  return (
    <>
      <Recatchers>
        <LoadCanvasTemplate
          reloadText="Recargar el Captcha"
          reloadColor="gray"
        />
      </Recatchers>

      <InputBeau
        id="user_captcha_input"
        name="user_captcha_input"
        label="Introducir el catchpa"
      />
    </>
  )
}

export default Catchpa
