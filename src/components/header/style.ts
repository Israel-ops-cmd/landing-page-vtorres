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

  @media (max-width: 968px) {
    padding: 0 1.5rem;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  height: 55px;
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
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #E3AE57; 
    }
  }

  @media (max-width: 1024px) {
    display: none; /* Caso queira ocultar em telas menores ou preparar um menu mobile depois */
  }
`

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: linear-gradient(135deg, #fff2b2 0%, #e3ae57 50%, #aa7c11 100%);
  color: #0c0c0c;
  padding: 0.65rem 1.6rem;
  border-radius: 50px; /* Formato pílula idêntico aos demais botões */
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(227, 174, 87, 0.25);

  svg {
    fill: currentColor;
    width: 16px;
    height: 16px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(227, 174, 87, 0.4);
    filter: brightness(1.05);
  }
`