import * as yup from "yup"

export const validateSchema = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required().min(10),
  })
  .defined()
