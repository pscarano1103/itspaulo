import Santorini from "../assets/santoriniProject.png";
import Portfolio from "../assets/meuportfolio.png";
import Money from "../assets/convertMoney.png";
export const projects = [
  {
    image: Portfolio,
    title: "itsPaulo.com",
    description:
      "Portfólio desenvolvido para apresentar minha trajetória, habilidades e projetos como desenvolvedor Front-end. Construído com React, Styled Components e Motion, o projeto prioriza performance, responsividade e uma experiência moderna, com animações suaves, navegação intuitiva e interface refinada. Além do design, a aplicação reflete meu cuidado com arquitetura, componentização, acessibilidade e boas práticas de desenvolvimento.",
    status: "Concluído",
    technologies: "React JS, Styled Components, JavaScript, Motion",
    liveDemo: "https://itspaulo.com",
    gitHub: "https://github.com/pscarano1103/itspaulo",
  },
  {
    image: Santorini,
    title: "Santorini Autocenter",
    description:
      "Site institucional, desenvolvido para a Santorini Autocenter. Uma oficina mecânica situada em Leiria, Porugal. Este projeto foipensado para gerar maior presença digital e também integrar solicitação de orçamentos via integração com WhatsApp. ",
    status: "Concluído",
    technologies: "HTML5, CSS3, JavaScript",
    liveDemo: "https://santoriniautocenter.com",
    gitHub: "https://github.com/pscarano1103/santorini",
  },
  {
    image: Money,
    title: "Convert Money",
    description:
      "Projeto desenvolvido em aula do curso de Desenvolvedor Full Stack do Devclub. Converta valores em real para Dólar, Euro ou Bitcoin, utilizando acotação em tempo real de cada moeda selecionada, isso porque o projeto faz o consumo de uma API que busca as cotações em tempo real.",
    status: "Concluído",
    technologies: "HTML5, CSS3, JavaScript",
    liveDemo: "https://pscarano1103.github.io/DevClub---ConvertMoney/",
    gitHub: "https://github.com/pscarano1103/DevClub---ConvertMoney",
  },
];
