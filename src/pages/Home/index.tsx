import {  useState } from 'react'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { TextCard } from '@/components/TextCard'
import {
  Content,
  SectionHeader,
  ContentTexto,
  SectionMain,
  Formulario,
  SectionForm,
  ContainerButton,
  ButtonOne,
  ButtonTue,
  TitleMobile
} from './styled'
import imgfundo from '../../assets/FundoHeader.png'
import { MultiplosCard } from '@/components/MultiplosCard'

import { FormPF } from '@/components/FormPF'
import { FormPJ } from '@/components/FormPJ'
import WhatsAPP from '@/components/WhatsAPP'
import { TermosCookies } from '@/components/Termos&Cookies'


export function Home() {
  const [isActive, setIsActive] = useState(true)

  const handleActiveOne = () => {
    setIsActive(true)
  }

  const handleActiveTue = () => {
    setIsActive(false)
  }



  return (
    <>
      <SectionHeader>
        <Header />
        <Content >
          <div className="texto01" >
            <h2 data-aos="fade-right">
              Buscamos as melhores alternativas de negócios para os nossos
              clientes.
            </h2>
          </div>
          <div className="imgfundo" >
            <img  src={imgfundo} alt="" />
          </div>
          <div className="linkSobre" id='sobre'>

          </div>
        </Content>
        <ContentTexto  data-aos="fade-up" >
          <TextCard
            title="Missão"
            description="Nossa missão é atuar na indicação dos melhores players financeiros do mercado para os nossos clientes por meio de operações customizadas."
          />
          <TextCard
            title="Visão"
            description="Ter uma visão responsável e holística do negócio e do mercado de atuação dos nossos clientes, valorizando a melhor experiência."
          />
          <TextCard
            title="Valores"
            description="Construir relacionamentos duradouros e transparentes, buscando a melhor alternativa de negócios para os nossos clientes."
          />
        </ContentTexto>
      </SectionHeader>
      <SectionMain id='solucoes' >
        <h2  data-aos="fade-up" >Conheça nossas soluções de crédito para você e sua empresa</h2>
        <MultiplosCard/>
      </SectionMain>
      <SectionForm id='faleconosco'>
        <Formulario>
          {isActive ? <FormPF /> : <FormPJ />}
          <ContainerButton>
            <TitleMobile>
            <h2>Fale conosco</h2>
            <p>Preencha o formulário e saiba mais.</p>
            </TitleMobile>
            <ButtonOne isActive={isActive} onClick={handleActiveOne} data-aos="zoom-in">
              Pessoa Física
            </ButtonOne>

            <ButtonTue isActive={isActive} onClick={handleActiveTue} data-aos="zoom-in">
              Pessoa Jurídica
            </ButtonTue>

          </ContainerButton>
        </Formulario>
      </SectionForm>

      <Footer />
      <TermosCookies/>
      <WhatsAPP />
    </>
  )
}
