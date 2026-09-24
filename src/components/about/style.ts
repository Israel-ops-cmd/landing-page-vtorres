import styled from "styled-components"

export const AboutContainer = styled.section`
  width: 100%;
  padding: 7rem 2rem;
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 968px) {
    padding: 4rem 1.5rem;
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

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 3rem;
  }
`

export const ImageAreaWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`

export const FloatingTitle = styled.h2`
  position: absolute;
  left: -3.8rem; 
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

  @media (max-width: 968px) {
    left: 1rem;
    font-size: 3.5rem;
  }
`

export const ImageColumn = styled.div`
  position: relative;
  width: 360px;
  height: 480px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8);
  z-index: 1;

  @media (max-width: 968px) {
    width: 100%;
    height: 400px;
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

  img {
    width: 28px;
    height: auto;
    object-fit: contain;
    /* Adiciona brilho/sombra para destacar bem sobre a foto */
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8));
  }
`

export const LogoTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;

  span:first-child {
    color: #ffffff; /* Branco com sombra para legibilidade impecável */
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  }

  span:last-child {
    color: #000000; /* Detalhe em dourado sofisticado */
    font-size: 0.55rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
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

  @media (max-width: 968px) {
    padding-left: 0;
    &::before {
      display: none;
    }
  }
`

export const SectionTag = styled.span`
  color: #d4af37;
  font-size: 0.55rem;
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

/* Texto mais leve, fluido e com mais respiro (minimalista) */
export const Description = styled.p`
  color: #B5B5B5;
  font-size: 0.92rem;
  font-weight: 300;
  line-height: 1.7;
`

/* Botão com dourado refinado e transição limpa (sem amarelo chapado) */
export const CtaButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  background: transparent;
  color: #ffffff;
  border: 1px solid #D4AF37;
  padding: 0.8rem 2.2rem;
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
`