import { HeroSection } from "../../components/Hero";
import { AboutSection } from "../../components/AboutSection";
import { ProjectsSection } from "../../components/ProjectSection";
import { Contato } from "../../components/Contato";
import { ContainerSobre } from "./styles";

import PageTransition from "../../components/PageTransition";

export function Home() {
  return (
    <PageTransition>
      <ContainerSobre className="container">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <Contato />
      </ContainerSobre>
    </PageTransition>
  );
}
