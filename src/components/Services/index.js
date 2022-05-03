/* eslint-disable no-useless-escape */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Image from 'next/image'

// import axios from 'axios'

// import ReCAPTCHA from 'react-google-recaptcha'

import { imageInicioFullUrl, toBase64, shimmer } from '../../helpers'

import { ButtonProps } from '../../styles/Button'
import styled from 'styled-components'
import InputBeau from '../FormComponents/InputForm'
import CheckBox from '../FormComponents/CheckBox'

import { sendEmailAction } from '@redux/client/client.action'
import Spinner from '@components/Spinner'
import {
  ADD_MESSAGE_SUCCESS_ERROR_SUCCESS,
  CLEAR_ALL_DATA,
} from '@redux/client/client.type'
import Link from 'next/link'

const WrapperServices = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  padding-top: 12vh;
  padding-bottom: 15vh;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    height: auto;
  }
`

const WrapperServInt = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const TitleH2 = styled.h2`
  color: ${(props) => props.theme.whiteSmoke};
  font-size: 50px;
  font-family: 'Helvética Neue';
  font-weight: bold;
  margin: 0;
  @media only screen and (max-width: 900px) {
    font-size: 35px;
  }
`
const SectionServices = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  margin: 0;
  padding-left: 1vw;
  padding-right: 1vw;
`

const Service = styled.div`
  display: flex;
  width: 400px;
  height: 50vh;
  background-color: rgba(255, 255, 255, 0.8);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-top: 50px;

  @media only screen and (max-width: 1024px) {
    height: auto;
    padding-top: 5%;
    padding-bottom: 5%;
  }
  @media only screen and (max-width: 600px) {
    width: 70%;
    height: auto;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const TitleH3 = styled.h3`
  color: ${(props) => props.theme.summerSky};
  font-size: 48px;
  font-family: 'Helvetica Neue';
  font-weight: bold;
  margin: 0;
  @media only screen and (max-width: 1024) {
    font-size: 40px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`

const ButtonQuery = styled(ButtonProps)`
  font-family: 'Helvetica Neue';
  font-size: 23px;
  width: 55%;
  font-weight: 400;

  @media only screen and (max-width: 1024) {
    height: 40px;
  }
  @media only screen and (max-width: 768px) {
    height: 35px;
  }
  @media only screen and (max-width: 600) {
    height: 30px;
  }
`

const WrapperImageMove = styled.div`
  div > img {
    object-position: 0px;
  }

  @media only screen and (max-width: 1024px) {
    div > img {
      object-position: -1100px 00px;
    }
  }

  @media only screen and (max-width: 600px) {
    div > img {
      object-position: 77% bottom;
    }
  }
`

const ModalInform = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  visibility: hidden;
  opacity: 0;
  overflow: hiden;
  transition: 0.64s ease-in-out;
  .popup-inner {
    position: relative;
    bottom: -100vw;
    right: -100vh;
    display: flex;
    align-items: center;
    max-width: 800px;
    max-height: 600px;
    width: 60%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.8);
    transform: rotate(32deg);
    transition: 0.64s ease-in-out;
    z-index: 1;
  }

  .popup-inner > .popup__photo {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 40%;
    height: 100%;
    overflow: hidden;
  }
  .popup-inner > .popup__photo > img {
    width: auto;
    height: 100%;
  }

  .popup-inner > .popup__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    height: 100%;
    padding: 4rem;
    overflow-y: auto;
  }

  .popup-inner > .popup__text > h1 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: #0a0a0a;
  }
  .popup-inner > .popup__text > p {
    font-size: 0.875rem;
    color: #686868;
    line-height: 1.5;
  }
  :target {
    visibility: visible;
    opacity: 1;
  }
  :target > .popup-inner {
    bottom: 0;
    right: 0;
    transform: rotate(0);
  }

  .popup-inner > .popup__close {
    position: absolute;
    right: -1rem;
    top: -1rem;
    width: 3rem;
    height: 3rem;
    font-size: 0.875rem;
    font-weight: 300;
    border-radius: 100%;
    background-color: ${(props) => props.theme.summerSky};
    z-index: 4;
    color: #fff;
    line-height: 3rem;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    .popup-inner {
      flex-direction: column;
    }
    .popup-inner {
      width: 70%;
      height: 80%;
    }
    .popup-inner > .popup__text {
      width: 100%;
      height: 70%;
      padding: 1vh;
      overflow-y: auto;
    }
    .popup-inner > .popup__photo {
      width: 100%;
      height: 30%;
      /* border: 1px solid red; */
    }
  }

  @media screen and (max-height: 368px) {
    .popup-inner {
      width: 70%;
      height: 100%;
      overflow-y: auto;
    }
  }
`

const SectionForm = styled.div`
  width: 100%;
  height: 200vh;
  flex-grow: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  margin: 0;
  margin-top: 10vh;
  margin-bottom: 5vh;

  /* border: 1px solid red; */

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
    padding-left: 0;
    padding-top: 0vh;
    padding-bottom: 0;
    height: auto;

    flex-direction: column;
  }
  @media screen and (max-width: 300px) {
    width: 90%;
    height: 200vh;
    flex-direction: column;
    padding-left: 2vw;
    padding-bottom: 20px;
    margin-top: 10px;
  }
`

const Label = styled.label`
  color: ${(props) => props.theme.whiteSmoke};
`
const Span = styled.span`
  margin-left: 10px;
  margin-left: ${(props) => props.left};

  font-weight: bold;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
`

const ButtonForm = styled(ButtonProps)`
  font-size: 24px;
  width: 60%;
  height: 5vh;
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
    margin-top: 5vh;
    font-size: 15px;
    height: 7vh;
    width: 55vw;
  }
`

// const ContainerCaptcha = styled.div`
//   position: absolute;
//   left: 105%;
//   bottom: -15%;
//   div > div > div {
//     position: relative !important;
//   }
//   @media only screen and (max-width: 600px) {
//     left: 50%;
//     bottom: 5%;
//     div > div > div {
//     }
//   }
//   @media only screen and (max-height: 350px) {
//     left: 38%;
//     bottom: -5%;
//     div > div > div {
//     }
//   }
// `

// const keyRecatch = process.env.NEXT_PUBLIC_RECAPTCHA_KEY

const Services = ({ data, recaptchaRef }) => {
  const [checkBox, setCheckBox] = useState(false)
  const [show, setShow] = useState(false)
  const [serviceDetail, setServiceDetail] = useState({})

  const showModal = (service) => {
    if (show) {
      setShow(!show)
      window.location = '#'
    } else {
      setShow(!show)
      setServiceDetail(service)

      window.location = '#popup'
    }
  }

  // const recaptchaRef = useRef()

  const dispatch = useDispatch()
  const { loadingSendEmail, messageS } = useSelector((state) => state.sendEmail)
  const { loadingAddContact, messageA } = useSelector(
    (state) => state.addContact
  )
  const { loadingaddGoogleSheet, messageG } = useSelector(
    (state) => state.addGoogleSheet
  )

  // const onSubmitWithReCAPTCHA = async (e) => {
  //   e.preventDefault()
  //   console.log('entramos')
  //   const token = await recaptchaRef.current.executeAsync()

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
      let detailsClientAndService = {}
      detailsClientAndService = {
        ...data2,
        serviceDetail,
      }

      dispatch(sendEmailAction(detailsClientAndService))
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
    <>
      <WrapperServices>
        <WrapperImageMove>
          <Image
            loader={imageInicioFullUrl}
            src={data.backgroundImage.url}
            alt={data.backgroundImage.name}
            layout="fill"
            objectFit="cover"
            quality={70}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer('100%', '100%')
            )}`}
          />
        </WrapperImageMove>
        <WrapperServInt>
          <TitleH2>{data.title}</TitleH2>
          <SectionServices>
            {data.services.map((serv, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Service key={index}>
                <TitleH3>{serv.title}</TitleH3>
                <ul>
                  <li>{serv.details[0]}</li>
                  {/* <li>{serv.details[1]}</li> */}
                  <li>{serv.details[2]}</li>
                </ul>

                <ButtonQuery
                  fontSize="20px"
                  height="7vh"
                  onClick={() => showModal(serv)}
                >
                  {data.buttonText}
                </ButtonQuery>
              </Service>
            ))}
          </SectionServices>
        </WrapperServInt>
      </WrapperServices>
      {/* <ReCAPTCHA ref={recaptchaRef} size="invisible" sitekey={keyRecatch} /> */}

      <ModalInform id="popup">
        <div className="popup-inner">
          <div className="popup__photo">
            <img
              src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?ixlib=rb-0.3.5&s=9980646201037d28700d826b1bd096c4&auto=format&fit=crop&w=700&q=80"
              alt=""
            />
          </div>
          <div className="popup__text">
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
                  <Span color="red" size="10px" left="0px">
                    Por favor introduce solo numeros del 0-9. <br />
                  </Span>
                )}
                {(errors.tel?.type === 'minLength' ||
                  errors.tel?.type === 'maxLength') && (
                  <Span color="red" size="10px" left="0px">
                    El numéro tiene que ser de 10 cifras. <br />
                  </Span>
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
                  <Span color="red" size="10px" left="0px">
                    Hubo un error en su correo, favor de revizarlo. <br />
                    <br />
                  </Span>
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
                  <Span color="red" size="10px" left="0px">
                    {errors.politic.message} <br />
                  </Span>
                )}

                {/* <ContainerCaptcha>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={recatch}
                  />
                </ContainerCaptcha> */}

                <ButtonForm
                  type="submit"
                  onSubmit={handleSubmit(onSubmit)}
                  disabled={
                    !(
                      !loadingSendEmail &&
                      !loadingAddContact &&
                      !loadingaddGoogleSheet
                    )
                  }
                >
                  Informes
                </ButtonForm>
                {(loadingSendEmail ||
                  loadingAddContact ||
                  loadingaddGoogleSheet) && <Spinner />}
              </form>
            </SectionForm>
          </div>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="popup__close" href="#" onClick={showModal}>
            X
          </a>
        </div>
      </ModalInform>
    </>
  )
}

export default Services
