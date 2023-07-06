import { styled, css, globalCss } from '../stitches.config'


const cssGlobal = globalCss({
    body: {
        margin: 0,
        padding: 0,
        fontFamily: "josefinSans, sans-serif",
    },


    '@font-face': [
        {
            fontFamily: 'josefinSans',
            src: 'local("josefinSans"), url("/fonts/JosefinSans-Regular.ttf")',
        },

    ],


});


const Tudo = styled('div', {
    // padding: 0,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // fontFamily: '$josefinSans',
})

const Cabecalho = styled('div', {
    height: '100px',
    // backgroundColor: 'red',
    // justifyContent: 'center',

})

const Conteudo = styled('div', {
    marginX: 'auto',
    // paddingX: '$3',
    borderColor: '#f87979',
    backgroundColor: '$background',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    // flexDirection: 'row',
    variants: {
        size: {
            larguramax_p: {
                maxWidth: '600px',
            },

            larguramax_g: {
                maxWidth: '70%',

            },
        },
    }
});

const Navegacao = styled('nav', {

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    // marginLeft: '25%',
    variants: {
        size: {
            larguramax_p: {
                maxWidth: '300px',
            },
            larguramax_m: {
                maxWidth: '585px',
            },

        },
    },
})

const Botao = styled('button', {

    backgroundColor: '$background',
    width: '240px',
    height: '40px',
    border: 'none',
    borderBottom: '4px solid $amarelo',
    borderRadius: '4px',
    fontSize: '13px',
    '&:hover': {
        borderBottom: '6px  solid $amarelo',
        transition: 'all 0.2s cubic-bezier(.08,.62,.92,1)',
        // boxShadow: '0px 1px 0px 0px silver',
    },
})



const Quadro = styled('div', {
    paddingY: '$4',
    backgroundColor: '$background',
    // borderTop: '4px solid $amarelo',
    borderBottom: '4px solid $amarelo',
    borderRadius: '4px',
    textAlign: 'justify',
    fontFamily: '$josefinSans',


    variants: {
        size: {
            larguramax_p: {
                maxWidth: '100%',
            },
            larguramax_g: {
                maxWidth: '46%',
            },

        },
    },
})


const OutroComponenteStitches = styled('div', {
    backgroundColor: 'gainsboro',
    borderRadius: '9999px',
    fontSize: '13px',
    padding: '10px 15px',
});


const Titulo = styled('p', {
    fontFamily: '$josefinSans',
    color: '$hiContrast',
    marginBottom: '$2',
})

const Texto = styled('p', {
    fontFamily: '$josefinSans',
    color: '$hiContrast',
})

const Link = styled('a', {
    fontFamily: '$josefinSans',
    textDecoration: 'none',
    color: '$purple600',
})




// Referencia estilização Stitches
// const Botao = styled('button', {
//         backgroundColor: 'gainsboro',
//         borderRadius: '9999px',
//         fontSize: '13px',
//         padding: '10px 15px',
//         '&:hover': {
//             backgroundColor: 'lightgray',
//         },


//         '&[data-active="true"]': {
//             boxShadow: '0 0 0 3px royalblue',
//         },
//         '& + button': {
//             marginLeft: '10px',
//         },

//         '&[data-roxo]': {
//             boxShadow: '0 0 0 3px gray400',
//         },

//         [`& ${OutroComponenteStitches}`]: {
//             marginLeft: '5px',
//         },

//         variants: {
//             outlined: {
//                 true: {
//                     borderColor: 'red',
//                 },
//             },
//         },
//     });


export { cssGlobal, OutroComponenteStitches, Botao, Tudo, Quadro, Texto, Link, Conteudo, Navegacao, Cabecalho, Titulo }





