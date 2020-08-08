import React from "react"
import { Link } from "gatsby"
import {
  Wrapper,
  ListHeader,
  List,
  ListItem,
  ListsWrapper,
} from "./Footer.styles"
import { Routes } from "../../config/routes"

const Footer: React.FC = () => (
  <>
    <Wrapper>
      <ListsWrapper>
        <div>
          <ListHeader>informacje:</ListHeader>
          <List>
            <ListItem>
              <Link to={Routes.ABOUT}>o nas</Link>
            </ListItem>
            <ListItem>
              <Link to={Routes.COMPETITIONS}>zawody</Link>
            </ListItem>
            <ListItem>
              <Link to={Routes.AWARDS}>osiągnięcia</Link>
            </ListItem>
            <ListItem>
              <Link to={Routes.BLOG}>blog</Link>
            </ListItem>
            <ListItem>
              <Link to={Routes.CONTACT}>kontakt</Link>
            </ListItem>
          </List>
        </div>
        <div>
          <ListHeader>sponsorzy:</ListHeader>
          <List>
            <ListItem>
              <a href="/" target="blank">
                Sponsor 1
              </a>
            </ListItem>
            <ListItem>
              <a href="/" target="blank">
                Sponsor 1
              </a>
            </ListItem>
            <ListItem>
              <a href="/" target="blank">
                Sponsor 1
              </a>
            </ListItem>
          </List>
        </div>
        <div>
          <ListHeader>social media:</ListHeader>
          <List>
            <ListItem>
              <a
                href="https://www.facebook.com/biegamP%C5%82ock-team-276934665749060"
                target="blank"
              >
                facebook
              </a>
            </ListItem>
            <ListItem>
              <a href="/" target="blank">
                endomondo
              </a>
            </ListItem>
          </List>
        </div>
      </ListsWrapper>
      <h4>biegamPlockTeam &copy; 2020</h4>
    </Wrapper>
  </>
)

export default Footer
