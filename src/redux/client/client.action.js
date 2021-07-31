/* eslint-disable prefer-template */
import axios from 'axios'
import {
  FAILURE_ADD_CONTACT,
  FAILURE_ADD_CONTACT_TO_GOOGLE_SHEET,
  FAILURE_SEND_EMAIL,
  REQUEST_ADD_CONTACT,
  REQUEST_ADD_CONTACT_TO_GOOGLE_SHEET,
  REQUEST_SEND_EMAIL,
  SUCCESS_ADD_CONTACT,
  SUCCESS_ADD_CONTACT_TO_GOOGLE_SHEET,
  SUCCESS_SEND_EMAIL,
} from './client.type'

export const addcontactAction = (datatoAddContact) => (dispatch, getState) => {
  dispatch({
    type: REQUEST_ADD_CONTACT,
  })

  const { urlDomain } = getState()

  axios
    .put(`${urlDomain}/api/email/addcontact`, datatoAddContact)
    .then((cliente) => {
      dispatch({
        type: SUCCESS_ADD_CONTACT,
        payload: cliente.data,
      })
    })
    .catch((err) => {
      dispatch({
        type: FAILURE_ADD_CONTACT,
        payload: err.data,
      })
    })
}

export const addcontactToGoogleSheetAction =
  (datatoAddContact) => (dispatch, getState) => {
    dispatch({
      type: REQUEST_ADD_CONTACT_TO_GOOGLE_SHEET,
    })

    const datatoGoogleSheet = {
      first_name: datatoAddContact.contacts[0].first_name,
      phone: datatoAddContact.contacts[0].phone_number,
      email: datatoAddContact.contacts[0].email,
      service: datatoAddContact.contacts[0].service,
      message: datatoAddContact.contacts[0].message,
    }

    const { urlDomain } = getState()

    axios
      .post(`${urlDomain}/api/google-sheet/add`, datatoGoogleSheet)
      .then((cliente) => {
        dispatch({
          type: SUCCESS_ADD_CONTACT_TO_GOOGLE_SHEET,
          payload: cliente.data,
        })
      })
      .catch((err) => {
        dispatch({
          type: FAILURE_ADD_CONTACT_TO_GOOGLE_SHEET,
          payload: err.data,
        })
      })
  }

export const sendEmailAction =
  (detailsClientAndService) => (dispatch, getState) => {
    const datatoAddContact = {
      contacts: [
        {
          first_name: detailsClientAndService.first_name || '',
          message: detailsClientAndService.message || '',
          email: detailsClientAndService.email,
          phone_number: detailsClientAndService.tel,
          whatsapp: detailsClientAndService.tel,
          service: detailsClientAndService?.serviceDetail?.title || '',
        },
      ],
    }

    dispatch({
      type: REQUEST_SEND_EMAIL,
    })

    const { urlDomain } = getState()

    axios
      .post(`${urlDomain}/api/email/one`, detailsClientAndService)
      .then(async (response) => {
        dispatch({
          type: SUCCESS_SEND_EMAIL,
          payload: response.data,
        })
        await dispatch(addcontactAction(datatoAddContact))
        await dispatch(addcontactToGoogleSheetAction(datatoAddContact))
      })
      .catch((err) => {
        dispatch({
          type: FAILURE_SEND_EMAIL,
          payload: err.data,
        })
      })
  }
