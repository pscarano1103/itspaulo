import { Container, Navigation } from "./styles";
import { NavLink, Link } from "react-router-dom";
import { motion } from "motion/react";

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
          <motion.li
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Sobre
            </NavLink>
          </motion.li>
          <motion.li
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <a onClick={scrollToProjects} className="contato-cta">
              Contato
            </a>
          </motion.li>
        </ul>
      </Navigation>
    </Container>
  );
}
