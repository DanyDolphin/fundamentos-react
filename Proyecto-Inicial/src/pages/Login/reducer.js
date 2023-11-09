// Enumerable (Enum)
export const ACTIONS = {
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    EMAIL_BLUR: 'EMAIL_BLUR',
    UPDATE_PASSWORD: 'UDPATE_PASSWORD',
    PASSWORD_BLUR: 'PASSWORD_BLUR',
    VALIDATE_FORM: 'VALIDATE_FORM'
  }
  
export const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.UPDATE_EMAIL:
        return {...state, email: action.payload, emailIsValid: action.payload.includes("@")};
      case ACTIONS.EMAIL_BLUR:
        return {...state, email: state.email, emailIsValid: state.email.includes("@")};
      case ACTIONS.UPDATE_PASSWORD: 
        return {...state, password: action.payload, passwordIsValid: action.payload.trim().length > 6};
      case ACTIONS.PASSWORD_BLUR:
        return {...state, password: state.password, passwordIsValid: state.password.trim().length > 6};
      case ACTIONS.VALIDATE_FORM:
        return {...state, formIsValid: state.email.includes("@") && state.password.trim().length > 6}
      default:
        return state
    }
  }
  
export const initialState = {
    email: '',
    emailIsValid: null,
    password: '',
    passwordIsValid: null,
    formIsValid: null
}