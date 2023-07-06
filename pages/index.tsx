import Head from 'next/head'

import { cssGlobal, Tudo, Quadro, Titulo, Texto, Link, Conteudo, Botao, Navegacao, Cabecalho } from '../componentes/ComponentesStitches'
import { Pintura } from '../componentes/Pintura'
export default function Home() {
  { cssGlobal(); }
  return (
    <Tudo>
      <Head>
        <title>Portfolio - Renan Tielas</title>
      </Head>
      <Cabecalho />

      <Conteudo size={{ '@initial': 'larguramax_g', '@reducaotela_p': 'larguramax_p' }}>

        {/* <Quadro size={{ '@initial': 'larguramax_g', '@reducaotela_p': 'larguramax_p' }} >
          <Titulo as="h3">Quem é Renan Tielas?</Titulo>
          <Texto as="p">Sou uma pessoa que está buscando caminhos para desenvolver sites e tecnologias sociais virtuais junto à movimentos sociais.
            Formando em engenharia ambiental pela UFRJ, me desviei do curso "natural" da graduação para me formar e atuar com agroecologia, e posteriormente em desenvolvimento web.</Texto>
          <Texto as="p">Esse site diz pouco sobre quem sou, projetos realizados, tecnologias que ja utilizei, e o que estou buscando e desenvolvendo no momento. </Texto>

          <Texto as="p"> Enquanto isso, aprecie a arte generativa, ou brinque com ela clicando no botão ao lado!</Texto>
       
        </Quadro> */}
        <Pintura />

        <Navegacao>
          <Botao data-ativo={false}>Quem é Renan Tielas?</Botao>
          <Botao data-ativo={false}>Tecnologias e Metodologias</Botao>
          <Botao data-ativo={false}>Projetos Realizados</Botao>
          <Botao data-ativo={false}>Arte Generativa</Botao>
          <Botao data-ativo={false}>Tecnologia Social</Botao>
          <Botao data-ativo={false}>Contrate</Botao>



        </Navegacao>

      </Conteudo>
    </Tudo >
  )
}


