import { Container, Navigation } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
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
            <Link to="/">Sobre</Link>
          </li>
          <li>
            <Link to="/">Contato</Link>
          </li>
        </ul>
      </Navigation>
    </Container>
  );
}
