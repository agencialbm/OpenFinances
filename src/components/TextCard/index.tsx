import { ContainerText } from './styled';

interface ITextCard {
  title: string
  description: string
}
export function TextCard({ title, description }: ITextCard) {
  return (
    <ContainerText>
      <h2>{title}</h2>
      <p>{description}</p>
    </ContainerText>
  );
}
