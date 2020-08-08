import styled from "styled-components"
import { Colors, FontSize, FontWeight, Media } from "../../assets/styles/const"
export const Wrapper = styled.footer`
  margin-top: 50px;
  background-color: ${Colors.DARK_GREY};
  color: ${Colors.WHITE};
  width: 100%;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  @media ${Media.TABLET} {
    padding: 30px;
  }
  h4 {
    margin: 0;
    font-size: ${FontSize.TEXT_SMALL};
  }
`
export const ListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin: 10px 0;
  }
  @media ${Media.MOBILE_L} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
export const ListHeader = styled.h3`
  margin: 5px 0;
  font-size: ${FontSize.TEXT_NORMAL};
  font-weight: ${FontWeight.REGULAR};
`
export const List = styled.ul`
  width: 200px;
  list-style: none;
`
export const ListItem = styled.li`
  margin: 5px 0;
  font-size: ${FontSize.TEXT_SMALL};

  @media ${Media.TABLET} {
    margin: 10px 0;
  }
  a {
    cursor: pointer;
    color: ${Colors.WHITE};
    &:hover {
      color: ${Colors.BLUE};
    }
  }
`
