import theme from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export const vulcan = {
  ...theme,
  prism: {
    style: okaidia
  },
  font: 'Monospace, sans-serif',
  // fontSizes: [16, 24, 32, 48, 64, 96, 128],
  fontSizes: ['0.75em', '1em', '1.5em', '2em', '3em'],
  colors: {
    text: '#33414F',
    background: 'white',
  },
  h1: {
    textTransform: 'uppercase',
    fontWeight: 900,
  },
  ol: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '32px',
    },
  },
  ul: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '32px',
    },
  },
  p: {
    fontSize: '16px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '32px',
    },
  },
};
