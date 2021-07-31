import styled from 'styled-components'

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  margin-bottom: 3vh;

  width: 90%;
  z-index: 1;
`
const LabelGroup = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${(props) => props.theme.gray};
`

const InputForm = styled.textarea`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.gray};
  outline: 0;
  font-size: 1.3rem;
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
  }
`
const TextAreaForm = ({ name, label, register }) => (
  <FormGroup className="form__group">
    <InputForm
      type="text"
      placeholder={label}
      name={name}
      className="form__field"
      id={name}
      rows="3"
      cols="80"
      required
      {...register}
    />
    <LabelGroup htmlFor={name} className="form__label">
      {label}
    </LabelGroup>
  </FormGroup>
)

export default TextAreaForm
