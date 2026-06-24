import { DescriptionSection, FeatureProjects, TitleSection } from "./styles";

export function WorkPage() {
  return (
    <div className="container">
      <FeatureProjects>
        <TitleSection>Meus Projetos</TitleSection>
        <DescriptionSection>
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </DescriptionSection>
      </FeatureProjects>
    </div>
  );
}
