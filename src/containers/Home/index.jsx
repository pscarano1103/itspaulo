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
  CardItem,
  ImageProject,
  InfoProject,
  TitleProject,
  DescriptionProject,
  SpecsProject,
  TableSpecs,
  ImageArea,
  LinksProject,
} from "./styles";
import Perfil from "../../assets/perfil.png";
import Projeto1 from "../../assets/projeto-image1.png";

import { Button } from "../../components/Button";

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
            <Button>Ver Projetos</Button>
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

          <Link to="/work">saiba mais</Link>
        </InfoAbout>
      </AboutSection>

      <FeatureProjects id="projects">
        <TitleSection>Meus Projetos</TitleSection>
        <DescriptionSection>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </DescriptionSection>

        <CardContainer>
          <CardItem>
            <ImageArea>
              <ImageProject src={Projeto1} />
            </ImageArea>
            <InfoProject>
              <TitleProject>
                Promotional landing page for our favorite show
              </TitleProject>
              <DescriptionProject>
                Teamed up with a designer to breathe life into a promotional
                webpage for our beloved show, Adventure Time. Delivered a fully
                responsive design with dynamic content capabilities, seamlessly
                integrating a newsletter feature to keep fans updated with the
                latest adventures.
              </DescriptionProject>

              <SpecsProject>
                <p>PROJECTS INFO</p>
                <TableSpecs>
                  <tbody>
                    <tr>
                      <td>
                        <span>Year</span>
                      </td>
                      <td className="item2">
                        <span>2026</span>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <span>Technologies</span>
                      </td>
                      <td className="item2">
                        <span>HTML, CSS, Javascript</span>
                      </td>
                    </tr>
                  </tbody>
                </TableSpecs>
              </SpecsProject>

              <LinksProject>
                <a href="">
                  Live Demo <i class="fa-solid fa-location-arrow"></i>
                </a>
                <a href="">
                  See on Github <i class="fa-brands fa-github"></i>
                </a>
              </LinksProject>
            </InfoProject>
          </CardItem>
        </CardContainer>
      </FeatureProjects>
    </div>
  );
}
