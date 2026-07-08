import { projects } from "../../utils/infoCard";
import { ProjectCard } from "../ProjectCard";
import { CardContainer, DescriptionSection, FeatureProjects } from "./styles";

export function ProjectsSection() {
  return (
    <FeatureProjects
      id="projects"
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <h2 className="title-section">Meus Projetos</h2>
      <DescriptionSection>
        Aqui estão alguns dos projetos selecionados que demonstram minha paixão
        pelo desenvolvimento front-end.
      </DescriptionSection>

      <CardContainer>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </CardContainer>
    </FeatureProjects>
  );
}
