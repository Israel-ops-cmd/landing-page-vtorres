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

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  height: 50px;
  width: auto;
  border-radius: 50%;
  display: block;

  @media (max-width: 480px) {
    height: 42px;
  }
`

export const NavList = styled.ul<{ $isOpen: boolean }>`
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
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: rgba(18, 18, 18, 0.98);
    backdrop-filter: blur(12px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
    z-index: 999;

    li a {
      font-size: 1.25rem;
    }
  }
`

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background: linear-gradient(135deg, #fff2b2 0%, #e3ae57 50%, #aa7c11 100%);
  color: #0c0c0c;
  padding: 0.65rem 1.6rem;
  border-radius: 50px;
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

  @media (max-width: 480px) {
    /* Em celulares muito pequenos, podemos compactar o botão para mostrar só o ícone ou diminuir o padding */
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`

export const MobileContactButton = styled.a`
  display: none;

  @media (max-width: 1024px) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fff2b2 0%, #e3ae57 50%, #aa7c11 100%);
    color: #0c0c0c;
    padding: 0.75rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    margin-top: 1rem;
  }
`

export const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  span {
    width: 100%;
    height: 2px;
    background-color: #e0e0e0;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1).open {
      transform: translateY(9px) rotate(45deg);
    }
    &:nth-child(2).open {
      opacity: 0;
    }
    &:nth-child(3).open {
      transform: translateY(-9px) rotate(-45deg);
    }
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`