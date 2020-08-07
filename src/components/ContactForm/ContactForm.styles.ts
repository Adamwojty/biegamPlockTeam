import styled from "styled-components"
import { Field, Form } from "formik"
import { FontSize, FontWeight, Media, Colors } from "../../assets/styles/const"

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 300px;

  @media ${Media.MOBILE_L} {
    max-width: 500px;
  }
`
export const Input = styled(Field)<{ error: string }>`
  max-width: 100%;
  padding: 10px 5px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: ${({ error }) =>
    error ? `2px solid ${Colors.ORANGE}` : `2px solid ${Colors.BLACK}`};
`
export const TextInput = styled(Input)`
  min-height: 250px;
  @media ${Media.MOBILE_L} {
    min-height: 400px;
  }
`
export const Label = styled.label`
  margin: auto 5px;
  font-size: ${FontSize.TEXT_SMALL};
  font-weight: ${FontWeight.SEMIBOLD};
`
export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 5px;
  border-radius: 10px;
  border: none;
  background-color: ${Colors.BLUE};
  color: ${Colors.WHITE};
  font-weight: ${FontWeight.SEMIBOLD};
`
export const Header = styled.header`
  width: 80%;
  h2 {
    font-size: ${FontSize.TEXT_NORMAL};
    margin: 0;
    @media ${Media.TABLET} {
      font-size: ${FontSize.TEXT_BIG};
    }
  }
  h3 {
    font-size: ${FontSize.TEXT_SMALL};
    @media ${Media.TABLET} {
      margin-top: 10px;
      font-size: ${FontSize.TEXT_NORMAL};
    }
  }
`
export const LabelWrapper = styled.div`
  height: 30px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  p {
    margin: auto 0;
  }
`
export const ErrorMsg = styled.p`
  font-size: ${FontSize.TEXT_SMALL};
`
