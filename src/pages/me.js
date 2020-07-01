import { css } from '@emotion/core';
import Container from 'components/Container';
import Layout from 'components/Layout';
import { useTheme } from 'components/Theming';
import { graphql } from 'gatsby';
import React from 'react';
import { IconContext } from 'react-icons';
import {
  DiAngularSimple,
  DiDocker,
  DiFirebase,
  DiGit,
  DiGo,
  DiJenkins,
  DiJira,
  DiLinux,
  DiMarkdown,
  DiNginx,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiReact,
  DiVim,
  DiVisualstudio,
} from 'react-icons/di';

import { rhythm } from '../lib/typography';

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.primary};  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary});  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.secondary}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
        </h1>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site} noSubscribeForm>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
          .portfolio-icon {
            margin: 1.2em
          }
        `}
      >
        <IconContext.Provider value={{ color: theme.colors.primary, style: { verticalAlign: 'middle' }, className: "portfolio-icon", size: "3em" }}>
          <div> 
            <h2>My current stack most used technologies</h2>
              <DiPostgresql/>
              <span>Postgres</span>
              <DiAngularSimple />
              <span>Angular</span>
              <DiNodejs/> 
              <span>Node</span>
              <DiNginx /> 
              <span>Nginx</span>
              <DiPython />
              <span>Python</span>
              <DiDocker/> 
              <span>Docker</span>
            <h2>My Tools</h2>
              <DiLinux />
              <span>Linux</span>
              <DiVim/> 
              <span>Vim</span>
              <DiGit/>
              <span>Git</span>
              <DiJira/>
              <span>Jira</span>
              <DiVisualstudio /> 
              <span>VsCode</span>
              <h2>How I deploy</h2>
              <DiJenkins />
              <span>Jenkins</span>
              <DiDocker />
              <span>Docker</span>
            <h2>How I document</h2>
              <DiMarkdown/> 
              <span>Markdown</span>
            <h2>How I prototype</h2>
              <DiFirebase/> 
              <span>Firebase</span>
            <h2>I also enjoy</h2>
            <DiReact/> 
            <span>React</span>
            <DiGo /> 
            <span>Go</span>
          </div>
        </IconContext.Provider>
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
