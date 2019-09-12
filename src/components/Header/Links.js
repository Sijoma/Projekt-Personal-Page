import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      {/* <Link to="#" activeClassName="active" aria-label="View page">
        Blog
      </Link> */}
      <Link to="#" activeClassName="active" aria-label="View page">
        Über uns
      </Link>
      <Link to="#" activeClassName="active" aria-label="View page">
        Kontakt
      </Link>

      <ThemeToggler
        css={{css}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
