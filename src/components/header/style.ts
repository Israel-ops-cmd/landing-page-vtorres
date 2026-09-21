import styled from "styled-components"

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  background-color: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(227, 174, 87, 0.2);
  z-index: 1000;
  box-sizing: border-box;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  height: 65px; /* Logo maior e com mais destaque */
  width: auto;
  border-radius: 50%;
  display: block;
`

export const NavList = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  align-items: center;

  li a {
    color: #e0e0e0;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #E3AE57; /* Dourado ao passar o mouse */
    }
  }
`

export const ContactButton = styled.a`
  background: linear-gradient(135deg, #fce38a 0%, #e3ae57 50%, #c9933b 100%); /* Gradiente dourado brilhante */
  color: #1a1a1a;
  padding: 0.75rem 1.75rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(227, 174, 87, 0.3);

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(227, 174, 87, 0.5);
  }
`