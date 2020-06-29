import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';

import { useTheme } from '../Theming';
import ThemeToggler from './ThemeToggler';

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/blog" activeClassName="active" aria-label="View page">
        Blog
      </Link>
      <Link to="/me" activeClassName="active" aria-label="View page">
        Me
      </Link>
      <Link to="/cv" activeClassName="active" aria-label="View page">
        CV
      </Link>
      <Link to="/contact" activeClassName="active" aria-label="View page">
        Get in touch
      </Link>

      <ThemeToggler
        css={{css}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
