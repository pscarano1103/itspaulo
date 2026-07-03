import { Button } from "../Button";
import HeroImg from "../../assets/heroAbout.png";
import { AboutInfo, AboutSection, ContainerButtons } from "./styles";
import { motion } from "motion/react";

export function AboutContent() {
  const scrollToProjects = () => {
    const section = document.getElementById("contact");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <AboutSection>
      <motion.img
        src={HeroImg}
        alt=""
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.2,
        }}
      />
      <AboutInfo>
        <p className="about-title">
          Desenvolvedor Front End apaixonado por interfaces modernas e
          atraentes.
        </p>
        <p className="about-desc">
          Sou Paulo Scarano, marido da Bruna e pai da Luísa, e encontro na
          combinação entre minha paixão por tecnologia e minha experiência em
          liderança a motivação diária para transformar designs incríveis em
          aplicativos e sites modernos, eficientes e escaláveis.
          <br />
          <br /> Com uma sólida trajetória em FrontEnd, dominando React, Styled
          Components e Node.js, meu foco é entregar soluções que não só
          impressionam visualmente, mas que também impulsionam resultados reais
          para os negócios. Acredito que o desenvolvimento vai muito além do
          código: é sobre criar experiências digitais que conectam pessoas e
          resolvem problemas, e é isso que me move em cada projeto que abraço.
        </p>

        <ContainerButtons>
          <Button onClick={scrollToProjects}>Vamos conversar</Button>
          <motion.a
            href="https://www.linkedin.com/in/opauloscarano/"
            target="_blank"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </motion.a>
          <motion.a
            href="https://github.com/pscarano1103"
            target="_blank"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <i class="fa-brands fa-github"></i>
          </motion.a>
        </ContainerButtons>
      </AboutInfo>
    </AboutSection>
  );
}
