import React from "react"
import { Formik, Field } from "formik"
import { InputName, InputType, InputPlaceholders } from "./ContactForm.types"
import {
  Input,
  FormWrapper,
  TextInput,
  Label,
  Button,
} from "./ContactForm.styles"
import { validateSchema } from "./actions/validateSchema"
import { encode } from "./actions/encode"
import { postMsg } from "./actions/postMsg"

const ContactForm: React.FC = () => (
  <>
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={validateSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={(values, { setSubmitting }) => {
        // fetch("/", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
        //   body: encode({
        //     "form-name": "contact",
        //     ...values,
        //   }),
        // })
        postMsg(
          encode({
            "form-name": "contact",
            ...values,
          })
        )
        // .then(() => {
        //   alert("Success!")
        //   setSubmitting(false)
        // })
        // .catch(error => {
        //   alert("Error: Please Try Again!")
        //   setSubmitting(false)
        // })
      }}
    >
      {({ errors, isSubmitting }) => (
        <FormWrapper
          data-netlify="true"
          name="contact-form"
          data-netliy-honeypot="bot-field"
        >
          <Field type="hidden" name="bot-field" />
          <Field type="hidden" name="form-name" value="contact-form" />
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
