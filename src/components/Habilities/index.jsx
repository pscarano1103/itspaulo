import { Hability } from "../Hability";
import { HabilitiesInfo, HabilitiesSection } from "./styles";

export function Habilities() {
  return (
    <HabilitiesSection>
      <h2 className="title-section">Minhas Habilidades</h2>

      <HabilitiesInfo>
        <p className="hability-desc">
          Estou em constante evolução. Acredito que aprender é apenas o primeiro
          passo; o verdadeiro crescimento acontece quando colocamos o
          conhecimento em prática. Cada tecnologia abaixo representa horas de
          estudo, experimentação e projetos desenvolvidos com dedicação.
        </p>

        <div className="habilities-colection">
          <Hability>React</Hability>
          <Hability>HTML5</Hability>
          <Hability>StyledComponents</Hability>
          <Hability>NodeJS</Hability>
          <Hability>Javascript</Hability>
          <Hability>Express</Hability>
          <Hability>Vite</Hability>
          <Hability>Git/ GitHub</Hability>
          <Hability>Mongo DB</Hability>
          <Hability>Docker</Hability>
          <Hability>Figma</Hability>
        </div>
      </HabilitiesInfo>
    </HabilitiesSection>
  );
}
