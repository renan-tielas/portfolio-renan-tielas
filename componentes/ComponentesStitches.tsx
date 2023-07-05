import { styled, css } from '../stitches.config'

const Tudo = styled('div', {
    padding: 0,
    backgroundColor: '$background',
    justifyContent: 'center',

})


const Conteudo = styled('div', {
    // marginX: 'auto',
    // paddingX: '$3',
    borderColor: '#f87979',
    backgroundColor: '$amarelo',
    width: '100%',
    variants: {
        size: {
            larguramax_p: {
                maxWidth: '600px',
            },
            larguramax_m: {
                maxWidth: '90%',
            },
            larguramax_g: {
                maxWidth: '90%',

            },
        },
    }
});

const Navegacao = styled('nav', {

    display: 'flex',
    direction: 'column',
    justifyContent: 'space-between',

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
    backgroundColor: 'gainsboro',
    width: '80px',
    borderRadius: '2px',
    fontSize: '13px',
})



const Quadro = styled('div', {
    backgroundColor: '$background',
    borderTop: '2px solid $amarelo',
    borderBottom: '2px solid $amarelo',
    variants: {
        size: {
            larguramax_p: {
                maxWidth: '100%',
            },
            larguramax_g: {
                maxWidth: '585px',
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



const Texto = styled('p', {
    fontFamily: '$system',
    color: '$hiContrast',
})

const Link = styled('a', {
    fontFamily: '$system',
    textDecoration: 'none',
    color: '$purple600',
})





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


export { OutroComponenteStitches, Botao, Tudo, Quadro, Texto, Link, Conteudo, Navegacao }





