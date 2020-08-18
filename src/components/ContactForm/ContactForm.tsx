import * as React from "react"
import { Formik, Field } from "formik"
import { InputName, InputType, InputLabels } from "./ContactForm.types"
import {
  Input,
  FormWrapper,
  TextInput,
  Label,
  Button,
  Header,
  LabelWrapper,
  ErrorMsg,
} from "./ContactForm.styles"
import SubmitMsg from "./SubmitMsg"
import { validateSchema } from "./actions/validateSchema"
import { encode } from "./actions/encode"
import { postMsg } from "./actions/postMsg"

const ContactForm: React.FC = () => {
  const [modalActive, setModalActive] = React.useState<boolean>(false)
  return (
    <section>
      <SubmitMsg active={modalActive} setModalActive={setModalActive} />
      <Header>
        <h2>
          Masz jakieś pytania? Checsz do nas dołączyć lub umówić się na wspólny
          trening?
        </h2>
        <h3>Napisz do nas!</h3>
      </Header>
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
          const body = encode({
            "form-name": "contact-form",
            ...values,
          })
          postMsg(body)
          setModalActive(!modalActive)
          setTimeout(() => {
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ errors, isSubmitting }) => (
          <FormWrapper
            data-netlify={true}
            name="contact-form"
            data-netliy-honeypot="bot-field"
          >
            <LabelWrapper>
              <Label htmlFor={InputType.NAME}>{InputLabels.NAME}</Label>
              <ErrorMsg>{errors.name}</ErrorMsg>
            </LabelWrapper>
            <Input
              type={InputType.NAME}
              name={InputName.NAME}
              error={errors.name}
            />
            <LabelWrapper>
              <Label htmlFor={InputType.EMAIL}>{InputLabels.EMAIL}</Label>
              <ErrorMsg>{errors.email}</ErrorMsg>
            </LabelWrapper>
            <Input
              type={InputType.EMAIL}
              name={InputName.EMAIL}
              error={errors.email}
            />
            <LabelWrapper>
              <Label htmlFor={InputType.MESSAGE}>{InputLabels.MESSAGE}</Label>
              <ErrorMsg>{errors.message}</ErrorMsg>
            </LabelWrapper>
            <TextInput
              type={InputType.MESSAGE}
              name={InputName.MESSAGE}
              component={InputType.MESSAGE}
              error={errors.message}
              placeholder="..."
            />

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>

            <Field type="hidden" name="form-name" value="contact-form" />
          </FormWrapper>
        )}
      </Formik>
    </section>
  )
}

export default ContactForm
