import { css } from '@emotion/core';
import Container from 'components/Container';
import Layout from 'components/Layout';
import { useTheme } from 'components/Theming';
import { graphql } from 'gatsby';
import React from 'react';

import { rhythm } from '../lib/typography';

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
        })}>☎ You can get in touch with me on any social platform. Github, Twitter etc.</h2>
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
