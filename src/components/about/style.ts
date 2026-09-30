import styled from "styled-components"

export const AboutContainer = styled.section`
  width: 100%;
  padding: 7rem 2rem;
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem 10rem; /* Aumentado o padding inferior para o botão respirar */
  }
`

export const ContentWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 3rem;
  }
`

export const ImageAreaWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`

export const FloatingTitle = styled.h2`
  position: absolute;
  left: -4.8rem; 
  z-index: 3;
  color: #ffffff;
  font-size: 4.8rem;
  font-weight: 500; 
  line-height: 0.88;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  letter-spacing: -1px;
  opacity: 0.95;

  /* No telemóvel/tablet removemos o título flutuante para limpar a interface e dar foco à foto e ao conteúdo */
  @media (max-width: 1024px) {
    display: none; 
  }
`

export const ImageColumn = styled.div`
  position: relative;
  width: 360px;
  height: 480px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
  z-index: 1;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    height: 380px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const LogoOverlay = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 2;
  background: rgba(12, 12, 12, 0.7);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  backdrop-filter: blur(4px);

  img {
    width: 28px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));
  }
`

export const LogoTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;

  span:first-child {
    color: #ffffff;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  span:last-child {
    color: #D4AF37;
    font-size: 0.55rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  padding-left: 2rem;
  max-width: 540px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background: linear-gradient(180deg, #d4af37 0%, transparent 100%);
  }

  @media (max-width: 1024px) {
    padding-left: 0;
    max-width: 100%;
    &::before {
      display: none;
    }
  }
`

export const SectionTag = styled.span`
  color: #d4af37;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
`

export const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 2.3rem;
  font-weight: 300;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const Description = styled.p`
  color: #B5B5B5;
  font-size: 0.92rem;
  font-weight: 300;
  line-height: 1.7;

  strong {
    color: #ffffff;
    font-weight: 400;
  }
`

export const CtaButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  background: transparent;
  color: #ffffff;
  border: 1px solid #D4AF37;
  padding: 0.9rem 2.2rem;
  border-radius: 4px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 0.8rem;
  text-decoration: none;
  text-align: center;
  width: fit-content;
  transition: all 0.3s ease;

  &:hover, &:active {
    background: rgba(212, 175, 55, 0.15);
    border-color: #F3E5AB;
    color: #F3E5AB;
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(212, 175, 55, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%; /* Botão com largura total no telemóvel para facilitar o toque com o polegar */
  }
`