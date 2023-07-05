import Head from 'next/head'
import StitchesLogo from '../componentes/StitchesLogo'
import { Tudo, Quadro, Texto, Link, Conteudo, Botao, Navegacao } from '../componentes/ComponentesStitches'
import { estiloGlobal } from '../stitches.config'
export default function Home() {
  estiloGlobal();
  return (
    <Tudo>
      <Head>
        <title>Portfolio - Renan Tielas</title>
      </Head>
      <Conteudo size={{ '@initial': 'larguramax_g', '@reducaotela_p': 'larguramax_p' }}>

        <Quadro size={{ '@initial': 'larguramax_g', '@reducaotela_p': 'larguramax_p' }} >
          <Texto as="h3">Quem é Renan Tielas?</Texto>
          <Texto as="p">Sou uma pessoa que está buscando caminhos para desenvolver sites e tecnologias sociais virtuais junto à movimentos sociais.
            Formando em engenharia ambiental pela UFRJ, me desviei do curso "natural" da graduação para me formar e atuar com agroecologia, e posteriormente em desenvolvimento web.</Texto>
          <Texto as="p">Esse site diz pouco sobre quem sou, projetos realizados, tecnologias que ja utilizei, e o que estou buscando e desenvolvendo no momento. </Texto>

          <Texto as="p"> Enquanto isso, aprecie a arte generativa, ou brinque com ela clicando no botão ao lado!</Texto>
          {/* <Botao outlined data-active={true}>ativo</Botao> */}
        </Quadro>

        <Navegacao>
          <Botao data-ativo={true}>Web</Botao>
          <Botao data-ativo={false}>ativo</Botao>

        </Navegacao>

      </Conteudo>
    </Tudo>
  )
}


