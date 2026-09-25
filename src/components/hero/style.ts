import styled from "styled-components"

interface HeroContainerProps {
  bgImage: string;
}

export const HeroContainer = styled.section<HeroContainerProps>`
  width: 100%;
  height: 100vh;
  min-height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  box-sizing: border-box;
  overflow: hidden;

  /* Suavização de fontes global para dar o aspecto minimalista */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* Imagem de fundo importada dos assets */
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;

  /* Gradiente lateral ajustado para maior suavidade */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      #0c0c0c 0%, 
      #0c0c0c 38%, 
      rgba(12, 12, 12, 0.85) 50%, 
      rgba(12, 12, 12, 0.2) 75%, 
      transparent 100%
    );
    z-index: 1;
  }

  @media (max-width: 968px) {
    padding: 0 1.5rem;
    &::before {
      background: linear-gradient(
        180deg, 
        rgba(12, 12, 12, 0.95) 0%, 
        rgba(12, 12, 12, 0.8) 100%
      );
    }
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Subtitle = styled.span`
  color: #aa7c11;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2.5px;
`

export const Title = styled.h1`
  color: #ffffff;
  /* Reduzido levemente de 3rem para 2.75rem e ajustado o peso para 600, trazendo sofisticação e minimalismo */
  font-size: 2.75rem;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.5px;

  span {
    color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 2.1rem;
  }
`

export const Description = styled.p`
  color: #ffffff;
  font-size: 1.05rem;
  line-height: 1.7;
  font-weight: 300; /* Fonte mais leve para dar o toque minimalista da referência */
  max-width: 600px;
`

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem; /* Ajustado para acomodar perfeitamente o ícone do WhatsApp */
  background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
  color: #0c0c0c;
  padding: 0.9rem 2.2rem;
  border-radius: 50px; /* Formato pílula idêntico ao Contact */
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  letter-spacing: 0.5px;
  text-align: center;
  width: fit-content;
  margin-top: 0.5rem;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  svg {
    fill: currentColor;
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }
`