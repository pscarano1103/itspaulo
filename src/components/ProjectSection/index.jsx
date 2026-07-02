import { projects } from "../../utils/infoCard";
import { ProjectCard } from "../ProjectCard";
import { CardContainer, DescriptionSection, FeatureProjects } from "./styles";

export function ProjectsSection() {
  return (
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
  );
}
