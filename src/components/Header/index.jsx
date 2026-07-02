import { Container, Navigation } from "./styles";
import { NavLink, Link } from "react-router-dom";

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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sobre
            </NavLink>
          </li>
          <li>
            <a onClick={scrollToProjects} className="contato-cta">
              Contato
            </a>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
}
