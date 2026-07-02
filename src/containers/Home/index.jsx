import { HeroSection } from "../../components/Hero";
import { AboutSection } from "../../components/AboutSection";
import { ProjectsSection } from "../../components/ProjectSection";
import { Contato } from "../../components/Contato";
import { ContainerSobre } from "./styles";

export function Home() {
  return (
    <ContainerSobre className="container">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <Contato />
    </ContainerSobre>
  );
}
