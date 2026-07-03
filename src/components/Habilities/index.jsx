import { Hability } from "../Hability";
import { HabilitiesInfo, HabilitiesSection } from "./styles";

export function Habilities() {
  return (
    <HabilitiesSection
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
      <h2 className="title-section">Minhas Habilidades</h2>

      <HabilitiesInfo>
        <p className="hability-desc">
          Estou em constante evolução. Acredito que aprender é apenas o primeiro
          passo; o verdadeiro crescimento acontece quando colocamos o
          conhecimento em prática. Cada tecnologia abaixo representa horas de
          estudo, experimentação e projetos desenvolvidos com dedicação.
        </p>

        <div className="habilities-colection">
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
          >
            React
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.5,
            }}
          >
            HTML5
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.6,
              duration: 0.5,
            }}
          >
            StyledComponents
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.9,
              duration: 0.5,
            }}
          >
            NodeJS
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 1.2,
              duration: 0.5,
            }}
          >
            Javascript
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 1.5,
              duration: 0.5,
            }}
          >
            Express
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 1.8,
              duration: 0.5,
            }}
          >
            Vite
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 2.1,
              duration: 0.5,
            }}
          >
            Git/ GitHub
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 2.4,
              duration: 0.5,
            }}
          >
            Mongo DB
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 2.7,
              duration: 0.5,
            }}
          >
            Docker
          </Hability>
          <Hability
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 3,
              duration: 0.5,
            }}
          >
            Figma
          </Hability>
        </div>
      </HabilitiesInfo>
    </HabilitiesSection>
  );
}
