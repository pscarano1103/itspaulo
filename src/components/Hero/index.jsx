import Perfil from "../../assets/perfil.png";
import { Button } from "../Button";
import { ContainerButtons, ContainerInfo, Hero, ImagePerfil } from "./styles";
import { motion } from "motion/react";

export function HeroSection() {
  const scrollToProjects = () => {
    const section = document.getElementById("contact");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Hero>
      <ContainerInfo>
        <h1>
          Olá, eu sou o <br />
          Paulo Scarano
        </h1>
        <p>
          Eu transformo designs incríveis em aplicações impactantes e amo o que
          faço.
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
      </ContainerInfo>

      <ImagePerfil
        src={Perfil}
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
    </Hero>
  );
}
