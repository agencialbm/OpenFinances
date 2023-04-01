import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { TextCard } from '@/components/TextCard';
import {
  Content,
  SectionHeader,
  ContentTexto,
  SectionMain,
  Formulario,
  SectionForm
} from './styled';
import imgfundo from '../../assets/FundoHeader.png';
import { MultiplosCard } from '@/components/MultiplosCard';

import { FormPF } from '@/components/FormPF';

export function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(true);

  };
  console.log(isActive);

  return (
    <>
      <SectionHeader>
        <Header />
        <Content>
          <div className="texto01">
            <h2>
              Buscamos as melhores alternativas de negócios para os nossos
              clientes.
            </h2>
          </div>
          <div className="imgfundo">
            <img src={imgfundo} alt="" />
          </div>
        </Content>
        <ContentTexto>
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
      <SectionMain>
        <h2>Conheça nossas soluções de crédito para você e sua empresa</h2>
        <MultiplosCard />
      </SectionMain>
      <SectionForm>
        <Formulario>
          <FormPF />
          <div className="button">
            <button>Pessoa Física</button>
            <button

              onClick={handleActive}
            >
              Pessoa Jurídica
            </button>
          </div>
        </Formulario>
      </SectionForm>
      <Footer />
    </>
  );
}
