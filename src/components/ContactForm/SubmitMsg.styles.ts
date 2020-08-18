import styled from "styled-components"
import { FontSize, Media, Colors } from "../../assets/styles/const"
export const MsgWrapper = styled.div`
  width: 280px;
  background-color: ${Colors.BLUE};
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  color: ${Colors.WHITE};
  @media ${Media.MOBILE_L} {
    width: 350px;
  }
  h3 {
    font-size: ${FontSize.HEADER_NORMAL};
    margin: 5px 0 15px;
  }
  p {
    font-size: ${FontSize.TEXT_SMALL};
  }
  a {
    display: block;
    text-align: right;
    margin: 20px 0 0;
    color: ${Colors.WHITE};
  }
`
export const Background = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.6;
`
export const Wrapper = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
`
