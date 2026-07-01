import { Container, Navigation } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  const scrollToProjects = () => {
    const section = document.getElementById("contact");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <Link to="/" className="logo-scarano">
        Paulo Scarano
      </Link>

      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <a onClick={scrollToProjects}>Contato</a>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
}
