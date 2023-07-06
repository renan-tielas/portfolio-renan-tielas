import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'
import josefinSans from './fonts/JosefinSans-Regular.ttf'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      gray100: 'hsl(206,22%,99%)',
      gray200: 'hsl(206,12%,97%)',

      background: '#fff',


      amarelo: '#ffd248',
      marrom: '#3e2705',

    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      0: '2px',
      1: '2px',
      2: '5px',
      3: '10px',
      4: '15px',
      5: '20px',
      6: '30px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
    },
    fonts: {
      system: 'system-ui',
      josefinSans: 'Josefin Sans',
    },
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    reducaotela_p: '(max-width: 600px)',
    reducaotela_m: '(max-width: 900px)',
  },

},

)
export const TemaColorido = createTheme({
  colors: {
    background: '#fff',
    hiContrast: 'hsl(206,10%,5%)',
    loContrast: 'white',

    amarelo: '#ffd248',
    marrom: '#3e2705',

  }
});
//implement how to use globalCss with stictches





// export const estiloGlobal = globalCss({
//   '*': { margin: 0, padding: 0 },
//   '@font-face': {
//     fontFamily: 'josefinSans',
//     src: 'local("Josefin Sans"), url("./fonts/JosefinSans-Regular.ttf")',
//   }
// });