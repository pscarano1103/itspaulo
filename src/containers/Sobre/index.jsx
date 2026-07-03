import { Contato } from "../../components/Contato";
import { AboutContent } from "../../components/AboutContent";
import { Experience } from "../../components/Experience";
import { Habilities } from "../../components/Habilities";
import { ContainerSobre } from "./styles";
import PageTransition from "../../components/PageTransition";

export function Sobre() {
  return (
    <PageTransition>
      <ContainerSobre className="container">
        <AboutContent />
        <Habilities />
        <Experience />
        <Contato />
      </ContainerSobre>
    </PageTransition>
  );
}
