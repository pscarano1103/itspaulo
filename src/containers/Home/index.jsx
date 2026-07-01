import {
  ContainerButtons,
  ContainerInfo,
  ImagePerfil,
  Hero,
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
import { Contato } from "../../components/Contato";
import { projects } from "../../utils/infoCard";

export function Home() {
  const scrollToProjects = () => {
    const section = document.getElementById("contact");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
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
            <Button onClick={scrollToProjects}>Vamos conversar</Button>
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
      </AboutSection>

      <FeatureProjects id="projects">
        <h2 className="title-section">Meus Projetos</h2>
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

      <Contato />
    </div>
  );
}
