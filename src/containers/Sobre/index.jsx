import { Button } from "../../components/Button";
import { Contato } from "../../components/Contato";
import { ContainerButtons } from "../Home/styles";
import { Hability } from "../../components/Hability/styles";
import {
  AboutInfo,
  AboutSection,
  ContainerSobre,
  HabilitiesInfo,
  HabilitiesSection,
  ImageHero,
} from "./styles";
import HeroImg from "../../assets/heroAbout.png";
export function Sobre() {
  const scrollToProjects = () => {
    const section = document.getElementById("contact");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <ContainerSobre className="container">
        <ImageHero>
          <img src={HeroImg} alt="" />
        </ImageHero>
        <AboutSection>
          <h2 className="title-section">Sobre mim</h2>
          <AboutInfo>
            <p className="about-title">
              Desenvolvedor Front End apaixonado por interfaces modernas e
              atraentes.
            </p>
            <p className="about-desc">
              Sou Paulo Scarano, marido da Bruna e pai da Luísa, e encontro na
              combinação entre minha paixão por tecnologia e minha experiência
              em liderança a motivação diária para transformar designs incríveis
              em aplicativos e sites modernos, eficientes e escaláveis. Com uma
              sólida trajetória em FrontEnd, dominando React, Styled Components
              e Node.js, meu foco é entregar soluções que não só impressionam
              visualmente, mas que também impulsionam resultados reais para os
              negócios. Acredito que o desenvolvimento vai muito além do código:
              é sobre criar experiências digitais que conectam pessoas e
              resolvem problemas, e é isso que me move em cada projeto que
              abraço.
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
          </AboutInfo>
        </AboutSection>

        <HabilitiesSection>
          <h2 className="title-section">Minhas Habilidades</h2>

          <HabilitiesInfo>
            <p className="hability-desc">
              Estou em constante evolução. Acredito que aprender é apenas o
              primeiro passo; o verdadeiro crescimento acontece quando colocamos
              o conhecimento em prática. Cada tecnologia abaixo representa horas
              de estudo, experimentação e projetos desenvolvidos com dedicação.
            </p>

            <div className="habilities-colection">
              <Hability>React</Hability>
              <Hability>HTML5</Hability>
              <Hability>StyledComponents</Hability>
              <Hability>NodeJS</Hability>
              <Hability>Javascript</Hability>
              <Hability>Express</Hability>
              <Hability>Vite</Hability>
            </div>
          </HabilitiesInfo>
        </HabilitiesSection>
      </ContainerSobre>

      <Contato />
    </>
  );
}
