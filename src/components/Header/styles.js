import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 30px 60px;
  background: transparent;
  gap: 20px;

  .logo-scarano {
    font-size: 32px;
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 1.2px;
  }

  @media (max-width: 1023px) {
    padding: 24px 24px;
  }

  @media (max-width: 767px) {
    align-items: flex-start;
    padding: 20px 18px;
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;

  span {
    width: 24px;
    height: 2px;
    background: #d3e97a;
    margin: 5px 0;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 32px;
    align-items: center;
  }

  ul li a {
    font-size: 16px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #d3e97a;
    }
  }

  .contato-cta {
    background-color: #444;
    color: #d3e97a;
    padding: 10px 14px;
    border-radius: 28px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #d3e97a;
      color: #0a0a0a;
    }
  }

  .active {
    color: #d3e97a;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: auto;
    display: none;
    background: ${({ theme }) =>
      theme.colors?.background ?? "rgba(17, 17, 17, 0.9)"};
    padding: 1.5rem 0;

    &.isMenuOpen {
      display: block;
    }

    ul {
      flex-direction: column;
      gap: 32px;
      height: auto;
    }

    ul li a {
      font-size: 20px;
    }

    .contato-cta {
      background-color: transparent;
      color: #c7c7c7;
      padding: 0px 0px;
      border-radius: 28px;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: transparent;
        color: #d3e97a;
      }
    }
  }
`;
