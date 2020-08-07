import * as yup from "yup"
import { ErrorMsg } from "../ContactForm.types"
export const validateSchema = yup.object().shape({
  name: yup.string().required(ErrorMsg.NAME_REQ),
  email: yup.string().required(ErrorMsg.EMAIL_REQ).email(ErrorMsg.EMAIL_WRG),
  message: yup.string().required(ErrorMsg.MESS_REQ).min(10, ErrorMsg.MESS_SHRT),
})
