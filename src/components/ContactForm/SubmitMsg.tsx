import React from "react"
import { Link } from "gatsby"
import { MsgWrapper, Background, Wrapper } from "./SubmitMsg.styles"

interface MsgInterface {
  active: boolean
  setModalActive: (value: boolean | ((prevVar: boolean) => boolean)) => void
}

const SubmitMsg: React.FC<MsgInterface> = ({ active, setModalActive }) => {
  return (
    <Wrapper active={active}>
      <Background />
      <MsgWrapper>
        <h3>Twoja wiadomość została wysłana!</h3>
        <p>Postaram się skontaktować z tobą jak najszybciej</p>
        <Link onClick={() => setModalActive(!active)} to="/">
          powrót...
        </Link>
      </MsgWrapper>
    </Wrapper>
  )
}
export default SubmitMsg
