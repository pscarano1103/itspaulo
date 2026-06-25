import {
  CardItem,
  DescriptionProject,
  ImageArea,
  ImageProject,
  InfoProject,
  LinksProject,
  SpecsProject,
  TableSpecs,
  TitleProject,
} from "./styles";

export function ProjectCard({ project }) {
  return (
    <CardItem>
      <ImageArea>
        <ImageProject src={project.image} />
      </ImageArea>
      <InfoProject>
        <TitleProject>{project.title}</TitleProject>
        <DescriptionProject>{project.description}</DescriptionProject>

        <SpecsProject>
          <p>PROJECTS INFO</p>
          <TableSpecs>
            <tbody>
              <tr>
                <td>
                  <span>Status</span>
                </td>
                <td className="item2">
                  <span>{project.status}</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span>Technologies</span>
                </td>
                <td className="item2">
                  <span>{project.technologies}</span>
                </td>
              </tr>
            </tbody>
          </TableSpecs>
        </SpecsProject>

        <LinksProject>
          <a href={project.liveDemo} target="_blank">
            Live Demo <i class="fa-solid fa-location-arrow"></i>
          </a>
          <a href={project.gitHub} target="_blank">
            See on Github <i class="fa-brands fa-github"></i>
          </a>
        </LinksProject>
      </InfoProject>
    </CardItem>
  );
}
