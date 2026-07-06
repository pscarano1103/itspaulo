import { Container, Navigation, MenuButton } from "./styles";
import { NavLink, Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToProjects = () => {
    const section = document.getElementById("contact");

    section?.scrollIntoView({
      behavior: "smooth",
    });

    closeMenu();
  };
  return (
    <Container>
      <Link to="/" className="logo-scarano">
        Paulo Scarano
      </Link>

      <MenuButton
        type="button"
        onClick={() => setIsMenuOpen((state) => !state)}
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
      >
        <span />
        <span />
        <span />
      </MenuButton>

      <Navigation className={isMenuOpen ? "isMenuOpen" : ""}>
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
              onClick={closeMenu}
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
              onClick={closeMenu}
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
