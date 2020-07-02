import { createTheming } from '@callstack/react-theme-provider';
import { darken, lighten } from 'polished';

import colors from '../lib/colors';

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.green,
      secondary: lighten(0.05,colors.green),
      text: colors.black,
      invertedText: colors.white,
      bodyBg: colors.gray,
      headerBg: colors.green,
      link: colors.green,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: colors.green,
      secondary: darken(0.3, colors.green),
      text: colors.white,
      invertedText: colors.black,
      bodyBg: colors.black,
      headerBg: colors.black,
      link: lighten(0.05, colors.green),
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
