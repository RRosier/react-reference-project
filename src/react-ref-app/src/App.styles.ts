import { stylesheet } from "typestyle";

export const appStyles = stylesheet({
  App: {
    textAlign: 'center'
  },

  'App-logo': {
    height: '40vmin',
    pointerEvents: 'none'
  },

  // '@media (prefers-reduced-motion: no-preference)': {
  //   'App-logo': {
  //     animation: 'App-logo-spin infinite 20s linear'
  //   }
  // },

  'App-header': {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },

  'App-link': {
    color: '#61dafb'
  },

  // '@keyframes App-logo-spin': {
  //   'from': {
  //     transform: 'rotate(0deg)',
  //   }
  //   'to': {
  //     'transform: rotate(360deg)'
  //   }
  // }
});
