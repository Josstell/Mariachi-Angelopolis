import styled from 'styled-components'

export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  margin-bottom: 3vh;
  width: 90%;
  z-index: 1;
  @media screen and (max-width: 680px) {
    margin-top: 10px;
    margin-bottom: 3vh;
  }
  @media screen and (max-width: 480px) {
    margin-top: 10px;
    margin-bottom: 3vh;
  }
`
export const LabelGroup = styled.label`
  position: absolute;
  font-size: 1rem;
  font-size: ${(props) => props.fontSize};

  top: 0;
  display: block;
  transition: 0.2s;
  color: ${(props) => props.theme.gray};
  @media screen and (max-width: 680px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`

export const InputForm = styled.input.attrs(({ text }) => ({
  type: text,
}))`
  font-size: 1rem;
  font-size: ${(props) => props.fontSize};

  width: 100%;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.gray};
  outline: 0;
  color: ${(props) => props.theme.white};

  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${(props) => props.theme.primary};
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 1px;
    border-image: linear-gradient(
      to right,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
    );
    border-image-slice: 1;

    &:required,
    &:invalid {
      box-shadow: none;
    }
    @media screen and (max-width: 680px) {
      padding: 4px 0;

      &:placeholder-shown ~ .form__label {
        font-size: 1rem;
        cursor: text;
        top: 15px;
      }
    }
    @media screen and (max-width: 480px) {
      padding: 4px 0;

      &:placeholder-shown ~ .form__label {
        font-size: 1rem;
        cursor: text;
        top: 15px;
      }
    }
  }
`
