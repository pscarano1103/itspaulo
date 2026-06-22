import {
  Container,
  ContainerButtons,
  ContainerInfo,
  ImagePerfil,
  Hero,
  FeatureProjects,
  TitleSection,
  DescriptionSection,
  AboutSection,
  AboutSubTitle,
  AboutDescription,
  InfoAbout,
} from "./styles";
import Perfil from "../../assets/perfil.png";

import { Button } from "../../components/Button";

export function Home() {
  return (
    <Container>
      <Hero>
        <ContainerInfo>
          <h1>
            Olá, eu sou o <br />
            Paulo Scarano
          </h1>
          <p>
            Eu transformo designs incríveis em aplicações impactantes e amo o
            que faço.
          </p>

          <ContainerButtons>
            <Button>Ver Projetos</Button>
            <a
              href="https://www.linkedin.com/in/opauloscarano/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/opauloscarano/"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </ContainerButtons>
        </ContainerInfo>

        <ImagePerfil src={Perfil} />
      </Hero>

      <FeatureProjects>
        <TitleSection>Meus Projetos</TitleSection>
        <DescriptionSection>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </DescriptionSection>
      </FeatureProjects>

      <AboutSection>
        <TitleSection className="title-about">Sobre</TitleSection>

        <InfoAbout>
          <AboutSubTitle>
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.
          </AboutSubTitle>
          <AboutDescription>
            Desenvolvedor Front-end com experiência em criação de interfaces
            responsivas e modernas. Buscando oportunidades para aplicar minhas
            habilidades em React.js e JavaScript, com foco em inovação e entrega
            de experiências digitais excepcionais.
          </AboutDescription>

          <a href="">saiba mais</a>
        </InfoAbout>
      </AboutSection>
    </Container>
  );
}
