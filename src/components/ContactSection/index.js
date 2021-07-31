/* eslint-disable no-useless-escape */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

// import ReCAPTCHA from 'react-google-recaptcha'

import InputBeau from '../FormComponents/InputForm'
import TextAreaForm from '../FormComponents/TextAreaForm'
import CheckBox from '../FormComponents/CheckBox'
import { ButtonProps } from '../../styles/Button'

import styled from 'styled-components'
import { sendEmailAction } from '@redux/client/client.action'
import {
  ADD_MESSAGE_SUCCESS_ERROR_SUCCESS,
  CLEAR_ALL_DATA,
} from '@redux/client/client.type'
import Spinner from '@components/Spinner'
import Link from 'next/link'

const WrapperContact = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  z-index: 1;
  padding-bottom: 0;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  @media screen and (max-width: 330px) {
    justify-content: flex-start;
  }
`

const TextH2 = styled.h2`
  width: 45%;
  text-align: center;
  /* border: 1px solid white;*/
  color: ${(props) => props.theme.white};
  color: ${(props) => props.color};

  font-size: 33px;
  font-weight: bold;

  /* border: 2px solid red; */

  @media screen and (max-width: 900px) {
    padding-top: 0vh;
    font-size: 20px;
    text-align: center;
    width: 100%;
    height: auto;
    margin-left: 0;
  }
  @media screen and (max-width: 600px) {
    padding-top: 0;
    margin-top: 0vh;
    font-size: 20px;

    height: auto;
  }
`

const SectionForm = styled.div`
  width: 45%;
  height: 85vh;
  flex-grow: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  margin: 0;
  overflow-y: auto;

  @media screen and (max-width: 900px) {
    width: 80%;
    flex-direction: column;
  }

  @media screen and (max-width: 780px) {
    padding-left: 20vw;
    padding-top: 10vh;
    padding-bottom: 20px;

    width: 90%;
    height: 80vh;
    flex-direction: column;
  }
  @media screen and (max-width: 620px) {
    padding-left: 2vw;
    padding-top: 0vh;
    padding-bottom: 20px;
    height: 90vh;

    margin-top: -10px;
    width: 90%;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.4);
  }
  @media screen and (max-width: 300px) {
    width: 90%;
    height: 200vh;
    flex-direction: column;
    padding-left: 2vw;
    padding-bottom: 20px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

const Label = styled.label`
  color: ${(props) => props.theme.whiteSmoke};
`
const Span = styled.span`
  margin-left: 10px;
  color: ${(props) => props.color};
`

const SpanErorr = styled.span`
  margin-left: 10px;
  margin-left: ${(props) => props.left};

  font-weight: bold;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
`

const ButtonQuery = styled(ButtonProps)`
  font-size: 24px;
  width: 40%;
  height: 7vh;
  font-weight: 400;
  :disabled {
    background-color: ${(props) => props.theme.gray};
    cursor: none;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 18px;

    height: 10vh;
    width: 40vw;
  }

  @media only screen and (max-width: 600px) {
    font-size: 15px;
    height: 10vh;
    width: 60vw;
  }
`

const SpanES = styled.span`
  color: ${(props) => props.theme.whiteSmoke};
  color: ${(props) => props.color};
  font-size: 1vw;
  font-weight: 900;
  @media only screen and (max-width: 600px) {
    margin-top: 5vh;
    font-size: 2vh;
    width: 60%;
    height: 10%;
  }
`

// const keyRecatch = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

const ContactSection = ({ title, textButton, recaptchaRef }) => {
  const [checkBox, setCheckBox] = useState(false)

  const dispatch = useDispatch()
  const { loadingSendEmail, messageS } = useSelector((state) => state.sendEmail)
  const { loadingAddContact, messageA } = useSelector(
    (state) => state.addContact
  )
  const { loadingaddGoogleSheet, messageG } = useSelector(
    (state) => state.addGoogleSheet
  )

  const { success, error } = useSelector((state) => state.messageSuccesError)

  // const onSubmitWithReCAPTCHA = async (e) => {
  //   e.preventDefault()
  //   console.log('entramos')

  //   console.log('token: ', token)

  //   // apply to form data
  // }

  // const recaptchaRef = useRef()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data2, e) => {
    const token = await recaptchaRef.current.executeAsync()
    if (token) {
      dispatch(sendEmailAction(data2))
      e.target.reset()
    }
  }

  useEffect(() => {
    if (messageS?.message && messageA?.job_id && messageG?.message) {
      dispatch({
        type: ADD_MESSAGE_SUCCESS_ERROR_SUCCESS,
        payload: messageS,
      })
      dispatch({
        type: CLEAR_ALL_DATA,
      })
      window.location = '#'
    } else if (messageS?.errorS || messageA?.errorA || messageG?.errorG) {
      dispatch({
        type: ADD_MESSAGE_SUCCESS_ERROR_SUCCESS,
        payload: messageS?.errorS || messageA?.errorA || messageG?.errorG,
      })

      dispatch({
        type: CLEAR_ALL_DATA,
      })
      window.location = '#'
    }
  }, [messageS, messageA, messageG])

  return (
    <WrapperContact>
      <TextH2 className="item-contact">{title}</TextH2>

      <SectionForm className="item-contact">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBeau
            name="tel"
            label="Teléfono"
            marginBottom="1vh"
            register={register('tel', {
              required: true,
              pattern: /^[0-9\b]+$/i,
              minLength: 10,
              maxLength: 10,
            })}
          />
          {errors.tel?.type === 'pattern' && (
            <SpanErorr color="red" size="10px" left="0px">
              Por favor introduce solo numeros del 0-9. <br />
            </SpanErorr>
          )}
          {(errors.tel?.type === 'minLength' ||
            errors.tel?.type === 'maxLength') && (
            <SpanErorr color="red" size="10px" left="0px">
              El numéro tiene que ser de 10 cifras. <br />
            </SpanErorr>
          )}
          <InputBeau
            name="email"
            label="Email"
            register={register('email', {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
            })}
          />

          {errors.email?.type === 'pattern' && (
            <SpanErorr color="red" size="10px" left="0px">
              Hubo un error en su correo, favor de revizarlo. <br />
              <br />
            </SpanErorr>
          )}

          <TextAreaForm
            name="message"
            label="Mensaje"
            register={register('message', {
              required: true,
              minLength: 20,
            })}
          />
          {errors.message?.type === 'minLength' && (
            <SpanErorr color="red" size="10px" left="0px">
              Su mensage es muy corto, favor de ser más especifico, gracias.{' '}
              <br />
              <br />
            </SpanErorr>
          )}

          <Label>
            <CheckBox
              checkBox={checkBox}
              setCheckBox={setCheckBox}
              value
              register={register('politic', {
                required: 'Favor de confirmar.',
              })}
            />
          </Label>
          <Span color="white">
            Has leido la{' '}
            <Link href="/privacity-policy">
              <span className="pointer">politica de privacidad</span>
            </Link>
            <br /> <br />
          </Span>
          {errors.politic?.type === 'required' && !checkBox && (
            <SpanErorr color="red" size="10px" left="0px">
              {errors.politic.message} <br />
            </SpanErorr>
          )}

          {/* <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={keyRecatch} /> */}

          <ButtonQuery
            type="submit"
            disabled={
              !(
                !loadingSendEmail &&
                !loadingAddContact &&
                !loadingaddGoogleSheet
              )
            }
          >
            {textButton}
          </ButtonQuery>
          {(loadingSendEmail || loadingAddContact || loadingaddGoogleSheet) && (
            <Spinner />
          )}
          {success?.message ? <SpanES>{success?.message}</SpanES> : null}
          {error?.errGral ? <SpanES color="red">{error.errGral}</SpanES> : null}
        </form>
      </SectionForm>
      <style jsx>{`
        .item-contact {
          flex-grow: 1;
        }
      `}</style>
    </WrapperContact>
  )
}

export default ContactSection
