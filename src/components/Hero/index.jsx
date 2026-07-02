import Perfil from "../../assets/perfil.png";
import { Button } from "../Button";
import { ContainerButtons, ContainerInfo, Hero, ImagePerfil } from "./styles";

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
          <a href="https://www.linkedin.com/in/opauloscarano/" target="_blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/pscarano1103" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </ContainerButtons>
      </ContainerInfo>

      <ImagePerfil src={Perfil} />
    </Hero>
  );
}
