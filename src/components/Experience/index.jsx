import {
  ExperienceDesc,
  ExperienceHead,
  ExperienceItem,
  Experiencelist,
  ExperienceSection,
} from "./styles";

export function Experience() {
  return (
    <ExperienceSection>
      <h2 className="title-section">Minha Experiência</h2>

      <Experiencelist>
        <ExperienceItem>
          <ExperienceHead>
            <p className="exp-title">Desenvolvedor Freelancer</p>
            <p className="exp-time">Dez 2025 - Atual</p>
          </ExperienceHead>

          <ExperienceDesc>
            <p className="exp-desc">
              Desenvolvi sites institucionais responsivos 100%, garantindo
              excelente experiência de usuário em múltiplos dispositivos e
              navegadores, o que elevou o engajamento e a satisfação dos
              clientes.
            </p>
            <p className="exp-desc">
              Entreguei projetos alinhados com protótipos Figma, reduzindo
              retrabalho em 30% e acelerando o ciclo de desenvolvimento através
              da integração eficiente entre design e desenvolvimento.
            </p>
            <p className="exp-desc">
              Implementei layouts mobile-first otimizados, melhorando a
              performance e usabilidade em dispositivos móveis, fator crucial
              para o aumento da conversão em sites.
            </p>
            <p className="exp-desc">
              Utilizei tecnologias modernas HTML5, CSS3 e JavaScript para
              construir interfaces interativas e acessíveis.
            </p>
            <p className="exp-desc">
              Gerenciei versionamento de código com Git e GitHub, garantindo
              controle de versões e colaboração eficaz em equipe.
            </p>
          </ExperienceDesc>
        </ExperienceItem>

        <ExperienceItem>
          <ExperienceHead>
            <p className="exp-title">Suporte e liderança em TI</p>
            <p className="exp-time">Jan 2013 - Dez 2025</p>
          </ExperienceHead>

          <ExperienceDesc>
            <p className="exp-desc">
              Profissional com experiência consolidada em liderança de equipes e
              suporte técnico, atuando em ambientes que demandam alta
              responsabilidade, cumprimento rigoroso de prazos e foco na
              satisfação do cliente. Ao longo da carreira, desenvolvi
              habilidades essenciais como coordenação de times, comunicação
              efetiva e gestão de processos que garantem a qualidade
              operacional.
            </p>
          </ExperienceDesc>
        </ExperienceItem>
      </Experiencelist>
    </ExperienceSection>
  );
}
