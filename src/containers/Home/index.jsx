import {
  ContainerButtons,
  ContainerInfo,
  ImagePerfil,
  Hero,
  TitleSection,
  AboutSection,
  AboutSubTitle,
  AboutDescription,
  InfoAbout,
  Link,
  FeatureProjects,
  DescriptionSection,
  CardContainer,
} from "./styles";
import Perfil from "../../assets/perfil.png";

import { Button } from "../../components/Button";
import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../utils/infoCard";

export function Home() {
  return (
    <div className="container">
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
            <Button>Vamos conversar</Button>
            <a
              href="https://www.linkedin.com/in/opauloscarano/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/pscarano1103" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </ContainerButtons>
        </ContainerInfo>

        <ImagePerfil src={Perfil} />
      </Hero>

      <AboutSection>
        <TitleSection className="title-about">Quem sou?</TitleSection>

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

          <Link to="/">saiba mais</Link>
        </InfoAbout>
      </AboutSection>

      <FeatureProjects id="projects">
        <TitleSection>Meus Projetos</TitleSection>
        <DescriptionSection>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </DescriptionSection>

        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </CardContainer>
      </FeatureProjects>
    </div>
  );
}
