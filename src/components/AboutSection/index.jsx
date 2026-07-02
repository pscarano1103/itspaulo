import {
  AboutContainer,
  AboutDescription,
  AboutSubTitle,
  InfoAbout,
  Link,
} from "./styles";

export function AboutSection() {
  return (
    <AboutContainer>
      <h2 className="title-section title-about">Quem sou?</h2>

      <InfoAbout>
        <AboutSubTitle>
          Desenvolvedor Front End apaixonado por interfaces modernas e
          atraentes.
        </AboutSubTitle>
        <AboutDescription>
          Desenvolvedor Front-end com experiência em criação de interfaces
          responsivas e modernas. Buscando oportunidades para aplicar minhas
          habilidades em React.js e bibliotecas de CSS, com foco em inovação e
          entrega de experiências digitais excepcionais.
        </AboutDescription>

        <Link to="/about">saiba mais</Link>
      </InfoAbout>
    </AboutContainer>
  );
}
