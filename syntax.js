export default {
  'code[class*="language-"]': {
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    whiteSpace: 'pre-wrap',
    wordWrap: 'normal',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontSize: '14px',
    color: '#76d9e6',
    textShadow: 'none',
  },
  'pre[class*="language-"]': {
    MozTabSize: '2',
    OTabSize: '2',
    tabSize: '2',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    whiteSpace: 'pre-wrap',
    wordWrap: 'normal',
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontSize: '14px',
    color: '#76d9e6',
    textShadow: 'none',
    background: '#2a2a2a',
    padding: '15px',
    borderRadius: '4px',
    border: '1px solid #e1e1e8',
    overflow: 'auto',
    position: 'relative',
  },
  ':not(pre)>code[class*="language-"]': {
    background: '#2a2a2a',
    padding: '0.15em 0.2em 0.05em',
    borderRadius: '.3em',
    border: '0.13em solid #7a6652',
    boxShadow: '1px 1px 0.3em -0.1em #000 inset',
  },
  'pre[class*="language-"] code': {
    whiteSpace: 'pre',
    display: 'block',
  },
  namespace: {
    Opacity: '.7',
  },
  comment: {
    color: 'slategray',
  },
  prolog: {
    color: 'slategray',
  },
  doctype: {
    color: 'slategray',
  },
  cdata: {
    color: 'slategray',
  },
  punctuation: {
    color: '#f8f8f2',
  },
  '.namespace': {
    Opacity: '.7',
  },
  property: {
    color: '#f92672',
  },
  tag: {
    color: '#f92672',
  },
  constant: {
    color: '#f92672',
  },
  symbol: {
    color: '#f92672',
  },
  deleted: {
    color: '#f92672',
  },
  boolean: {
    color: '#ae81ff',
  },
  number: {
    color: '#ae81ff',
  },
  selector: {
    color: '#a6e22e',
  },
  'attr-name': {
    color: '#a6e22e',
  },
  string: {
    color: '#a6e22e',
  },
  char: {
    color: '#a6e22e',
  },
  builtin: {
    color: '#a6e22e',
  },
  inserted: {
    color: '#a6e22e',
  },
  operator: {
    color: '#f8f8f2',
  },
  entity: {
    color: '#f8f8f2',
    cursor: 'help',
  },
  url: {
    color: '#f8f8f2',
  },
  '.language-css .token.string': {
    color: '#f8f8f2',
  },
  '.style .token.string': {
    color: '#f8f8f2',
  },
  variable: {
    color: '#f8f8f2',
  },
  atrule: {
    color: '#e6db74',
  },
  'attr-value': {
    color: '#e6db74',
  },
  function: {
    color: '#e6db74',
  },
  keyword: {
    color: '#66d9ef',
  },
  regex: {
    color: '#fd971f',
  },
  important: {
    color: '#fd971f',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  'pre[class*="language-"][data-line]': {
    position: 'relative',
    padding: '1em 0 1em 3em',
  },
  'pre[data-line] .line-highlight': {
    position: 'absolute',
    left: '0',
    right: '0',
    padding: '0',
    marginTop: '1em',
    background: 'rgba(255, 255, 255, 0.08)',
    pointerEvents: 'none',
    lineHeight: 'inherit',
    whiteSpace: 'pre',
  },
  'pre[data-line] .line-highlight:before': {
    content: 'attr(data-start)',
    position: 'absolute',
    top: '.4em',
    left: '.6em',
    minWidth: '1em',
    padding: '0.2em 0.5em',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    color: 'black',
    font: 'bold 65%/1 sans-serif',
    height: '1em',
    lineHeight: '1em',
    textAlign: 'center',
    borderRadius: '999px',
    textShadow: 'none',
    boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
  },
  'pre[data-line] .line-highlight[data-end]:after': {
    content: 'attr(data-end)',
    position: 'absolute',
    top: 'auto',
    left: '.6em',
    minWidth: '1em',
    padding: '0.2em 0.5em',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    color: 'black',
    font: 'bold 65%/1 sans-serif',
    height: '1em',
    lineHeight: '1em',
    textAlign: 'center',
    borderRadius: '999px',
    textShadow: 'none',
    boxShadow: '0 1px 1px rgba(255, 255, 255, 0.7)',
    bottom: '.4em',
  },
};
