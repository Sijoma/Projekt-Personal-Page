import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
// import ThemeToggler from './ThemeToggler'
import { bpMaxSM } from '../../lib/breakpoints'
import MobileMenu from './MobileMenu'
import Links from './Links'

import Container from '../Container'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 20px 0;
        background: ${theme.colors.primary};  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, ${theme.colors.primary}, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, ${theme.colors.primary}, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          `}
        >
          <Link
            to="/"
            aria-label="go to homepage"
            css={css`
              color: white;
              &:hover {
                color: white;
                text-decoration: none;
              }
            `}
          >
            {siteTitle}
          </Link>
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              align-items: center;
              a {
                text-decoration: none;
                color: ${theme.colors.white};
                margin-left: 16px;
                margin-right: 16px;
              }
              .active {
                font-weight: 800;
                color: ${theme.colors.goldenrod}
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
