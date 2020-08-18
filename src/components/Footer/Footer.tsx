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
              <a
                href="http://www.jmelectric.pl/"
                target="blank"
                rel="noopener norefferer"
              >
                J&M Electric
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://www.pik.plo.pl/"
                target="blank"
                rel="noopener norefferer"
              >
                pik - Materiały Budowlane
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://www.mechanikazdrowia.com/?fbclid=IwAR1cLndy9IA9foZSVjIrEz9Q4JKKYv1jbc_AjOPjbYcRJ__nCH_2a1KziT0"
                target="blank"
                rel="noopener norefferer"
              >
                Mechanika Zdrowia
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
          </List>
        </div>
      </ListsWrapper>
      <h4>biegamPlockTeam &copy; 2020</h4>
    </Wrapper>
  </>
)

export default Footer
