
import { Button } from '../Button';
import { Icon } from '../Icon';
import { ContainerMultCard } from './styled';


export function MultiplosCard() {


  return (
    <ContainerMultCard >
      <Button  title="BNDES" >
        <Icon name="iconButtonCard" size={50} />
      </Button>
      <Button title="Capital de Giro">
        <Icon name="iconCapitalDeGiro" size={50} />
      </Button>
      <Button
        title="Antecipação de
Recebíveis"
      >
        <Icon name="iconAgenda" size={50} />
      </Button>
      <Button
        title="Financiamento
Imobiliário"
      >
        <Icon name="iconFinanciamento" size={50} />
      </Button>
      <Button title="Home Equity">
        <Icon name="iconHome" size={50} />
      </Button>
      <Button title="Auto Equity">
        <Icon name="iconAutoEquity" size={50} />
      </Button>
      <Button
        title="Portabilidade
de Crédito"
      >
        <Icon name="iconCredito" size={50} />
      </Button>
      <Button
        title="CDC - Financiamento de Veículos"
      >
        <Icon name="iconFinanciamentoVeiculo" size={50} />
      </Button>
      <Button title="Crédito Rural">
        <Icon name="iconCreditoRural" size={50} />
      </Button>
      <Button
        title="Operações de Comex, Câmbio, Finimp, ACC e ACE"
      >
        <Icon name="iconOperacoes" size={50} />
      </Button>
      <Button
        title="Operações Estruturadas no Mercado de Capital"
      >
        <Icon name="IconOperacoesEstru" size={50} />
      </Button>
      <Button title="Outras Soluções">
        <Icon name="iconOutrasSol" size={50} />
      </Button>
    </ContainerMultCard>
  );
}
