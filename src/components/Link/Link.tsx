import styled from "styled-components"
import { Link } from "gatsby"
import { FontWeight, FontSize } from "../../assets/styles/const"

const StyledLink = styled(Link)`
  border-radius: 10px;
  display: block;
  font-weight: ${FontWeight.SEMIBOLD};
  font-size: ${FontSize.TEXT_NORMAL};
  padding: 14px 0;
  width: 200px;
  max-height: 50px;
  text-align: center;
`
export default StyledLink
