import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site} noSubscribeForm="true">
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
      <h2
        css={css({
          marginBottom: rhythm(0.3),
          transition: 'all 150ms ease',
          ':hover': {
            color: theme.colors.primary,
          },
        })}>☎️ You can get in touch with me on any social platform. Github, Twitter etc.</h2>
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
