import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  background-color: #0a0a0a;

  .logo-scarano {
    font-size: 32px;
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 1.2px;
  }
`;
export const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 32px;
  }

  ul li {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.15);
    }
  }

  ul li a {
    font-size: 16px;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #d3e97a;
    }
  }
`;
