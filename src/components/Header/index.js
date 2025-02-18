import React from 'react';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';

import { StaticQuery, graphql } from 'gatsby';
import Nav from '../Nav';
import { SiteTitle, Label } from './styles';
import Evaluates2RoundedCornersImage from '../img-components/e2-rounded-corners.img';
import mediaQuery from '../../utils/mediaQuery';

export const HeaderContainer = styled.header`
  background-color: ${props =>
    props.path === '/' ? 'rgba(0,0,0,0)' : '#000032'};

  transition: top 1s linear;
  transition: opacity 0 linear;
  top: 0;
  padding: calc(15px + 1vw);
  position: fixed;
  width: 100%;
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
  grid-template-areas: 'nav title social search';
  grid-template-columns: auto 1fr auto auto;
  font-weight: bold;
  ${mediaQuery.minNetbook} {
    grid-template-areas: 'title nav social search';
  }

  header {
    transition: ${props => props.theme.shortTrans};
  }
`;

const StyledLabel = styled(Label)`
  font-family: 'e2-Raleway-Bold';
`;

const ColoredHeader = styled.div``;

const StyledDImage = styled.div`
  min-width: calc(45px + 1vw);
  min-height: calc(45px + 1vw);
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divStyle: {},
      window: undefined,
    };
  }

  componentDidMount() {
    this.setState({ window: window, divStyle: this.state.divStyle });
    var prevScrollpos = window.pageYOffset;
    var fromTopPx = 250;
    window.onscroll = function() {
      var scrolledFromtop = window.scrollY;
      if (scrolledFromtop > fromTopPx) {
        this.setState({
          divStyle: {},
          window: this.state.window,
        });
      } else {
        this.setState({
          divStyle: {},
          window: this.state.window,
        });
      }
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementsByTagName('header')[0].style.top = '0px';
      } else {
        document.getElementsByTagName('header')[0].style.top = '-300px';
      }
      prevScrollpos = currentScrollPos;
    }.bind(this);
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query LOGO_IMAGE_QUERY {
            file(relativePath: { eq: "e2-rounded-corners.png" }) {
              childImageSharp {
                fixed(width: 1000) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
        `}
        render={data => (
          <Headroom css="z-index: 20;">
            <ColoredHeader>
              <HeaderContainer path={this.props.path}>
                <SiteTitle to="/" rel="home">
                  <StyledDImage>
                    <Evaluates2RoundedCornersImage />
                  </StyledDImage>
                  <StyledLabel>
                    (evaluates2) test deploy gatsby-plugin-cname
                  </StyledLabel>
                </SiteTitle>
                <Nav />
              </HeaderContainer>
            </ColoredHeader>
          </Headroom>
        )}
      />
    );
  }
}

export default Header;
