import { combineReducers } from 'redux'
import * as types from './client.type'

// INITIAL TIMER STATE
const initialSendEmail = {
  loadingSendEmail: false,
  messageS: {},
  errorS: {},
  URL: '',
}

// SENDEMAIL REDUCER
const sendEmailReducer = (state = initialSendEmail, { type, payload }) => {
  switch (type) {
    case types.REQUEST_SEND_EMAIL:
      state = {
        ...state,
        loadingSendEmail: true,
      }
      break

    case types.SUCCESS_SEND_EMAIL:
      state = {
        ...state,
        loadingSendEmail: false,
        messageS: payload,
      }
      break

    case types.FAILURE_SEND_EMAIL:
      state = {
        ...state,
        loadingSendEmail: false,
        errorS: {
          payload,
          errGral: 'Hubo un error en la red, favor de intentar más tarde :/',
        },
      }
      break

    case types.CLEAR_ALL_DATA:
      state = initialSendEmail
      break

    default:
      break
  }
  return state
}

// INITIAL TIMER STATE
const initialAddContact = {
  loadingAddContact: false,
  messageA: {},
  errorA: {},
}

// SENDEMAIL REDUCER

const addContactReducer = (state = initialAddContact, { type, payload }) => {
  switch (type) {
    case types.REQUEST_ADD_CONTACT:
      state = {
        ...state,
        loadingAddContact: true,
      }
      break

    case types.SUCCESS_ADD_CONTACT:
      state = {
        ...state,
        loadingAddContact: false,
        messageA: payload,
      }
      break

    case types.FAILURE_ADD_CONTACT:
      state = {
        ...state,
        loadingAddContact: false,
        errorA: {
          payload,
          errGral: 'Hubo un error en la red, favor de intentar más tarde :/',
        },
      }
      break
    case types.CLEAR_ALL_DATA:
      state = initialAddContact
      break

    default:
      break
  }
  return state
}

// INITIAL TIMER STATE
const initialaddGoogleSheet = {
  loadingaddGoogleSheet: false,
  messageG: {},
  errorG: {},
}

// addGoogleSheet REDUCER

const addGoogleSheetReducer = (
  state = initialaddGoogleSheet,
  { type, payload }
) => {
  switch (type) {
    case types.REQUEST_ADD_CONTACT_TO_GOOGLE_SHEET:
      state = {
        ...state,
        loadingaddGoogleSheet: true,
      }
      break

    case types.SUCCESS_ADD_CONTACT_TO_GOOGLE_SHEET:
      state = {
        ...state,
        loadingaddGoogleSheet: false,
        messageG: payload,
      }
      break

    case types.FAILURE_ADD_CONTACT_TO_GOOGLE_SHEET:
      state = {
        ...state,
        loadingaddGoogleSheet: false,
        errorG: {
          payload,
          errGral: 'Hubo un error en la red, favor de intentar más tarde :/',
        },
      }
      break
    case types.CLEAR_ALL_DATA:
      state = initialaddGoogleSheet
      break

    default:
      break
  }
  return state
}

const initialMessageSuccesError = {
  success: {},
  error: {},
}

export const messageSuccesErrorReducer = (
  state = initialMessageSuccesError,
  { type, payload }
) => {
  switch (type) {
    case types.ADD_MESSAGE_SUCCESS_ERROR_SUCCESS:
      state = {
        ...state,
        success: payload,
      }
      break
    case types.ADD_MESSAGE_SUCCESS_ERROR_ERROR:
      state = {
        ...state,
        error: payload,
      }
      break
    case types.CLEAR_MESSAGE_SUCCESS_ERROR:
      state = initialMessageSuccesError
      break

    default:
      break
  }
  return state
}

export const urlDomainReducer = (
  state = { domainUrl: '' },
  { type, payload }
) => {
  switch (type) {
    case types.SET_URL:
      state = payload
      break
    default:
      break
  }
  return state
}

const reducers = {
  sendEmail: sendEmailReducer,
  addContact: addContactReducer,
  addGoogleSheet: addGoogleSheetReducer,
  messageSuccesError: messageSuccesErrorReducer,
  urlDomain: urlDomainReducer,
}

export default combineReducers(reducers)
