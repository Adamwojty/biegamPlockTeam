import styled from "styled-components"
import { Colors, FontSize, FontWeight, Media } from "../../assets/styles/const"
export const Wrapper = styled.footer`
  margin-top: 20px;
  background-color: ${Colors.DARK_GREY};
  color: ${Colors.WHITE};
  width: 100%;
  padding: 20px 30px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  h4 {
    margin: 0;
    font-size: ${FontSize.TEXT_XSMALL};
  }
`
export const ListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  @media ${Media.MOBILE_L} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  div {
    width: 250px;
    margin: 10px 0;
    @media ${Media.MOBILE_L} {
      width: 33%;
    }
  }
`
export const ListHeader = styled.h3`
  margin: 5px 0;
  font-size: ${FontSize.TEXT_SMALL};
  font-weight: ${FontWeight.REGULAR};
`
export const List = styled.ul`
  list-style: none;
  @media ${Media.MOBILE_L} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`
export const ListItem = styled.li`
  margin: 10px 10px 5px 0;
  font-size: ${FontSize.TEXT_XSMALL};
  @media ${Media.MOBILE_L} {
    margin: 5px 0;
  }
  a {
    cursor: pointer;
    color: ${Colors.WHITE};
    &:hover {
      color: ${Colors.BLUE};
    }
  }
`
