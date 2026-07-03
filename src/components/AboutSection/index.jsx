import {
  AboutContainer,
  AboutDescription,
  AboutSubTitle,
  InfoAbout,
  Link,
} from "./styles";

export function AboutSection() {
  return (
    <AboutContainer
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
    >
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
