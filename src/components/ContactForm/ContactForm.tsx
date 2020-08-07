import React from "react"
import { Formik } from "formik"
import { InputName, InputType, InputPlaceholders } from "./ContactForm.types"
import {
  Input,
  FormWrapper,
  TextInput,
  Label,
  Button,
} from "./ContactForm.styles"
import { validateSchema } from "./actions/validateSchema"
const ContactForm: React.FC = () => (
  <>
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      validationSchema={validateSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ errors, isSubmitting }) => (
        <FormWrapper
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <Label htmlFor={InputType.NAME}>{InputPlaceholders.NAME}</Label>
          <Input
            type={InputType.NAME}
            name={InputName.NAME}
            error={errors.name}
          />
          <Label htmlFor={InputType.EMAIL}>{InputPlaceholders.EMAIL}</Label>
          <Input
            type={InputType.EMAIL}
            name={InputName.EMAIL}
            error={errors.email}
          />
          <Label htmlFor={InputType.MESSAGE}>{InputPlaceholders.MESSAGE}</Label>
          <TextInput
            type={InputType.MESSAGE}
            name={InputName.MESSAGE}
            component={InputType.MESSAGE}
            placeholder="..."
            error={errors.message}
          />

          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </FormWrapper>
      )}
    </Formik>
  </>
)

export default ContactForm
