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

  /* Imagem de fundo importada dos assets */
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;

  /* Gradiente lateral: Lado esquerdo 100% preto sólido, lado direito transparente */
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
  z-index: 2; /* Garante que o texto fica acima do gradiente preto */
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Subtitle = styled.span`
  color: #aa7c11;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;

  span {
    color: #d4af37;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`

export const Description = styled.p`
  color: #E2E2E2;
  font-size: 1.1rem;
  line-height: 1.6;
`

export const CtaButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
  color: #0c0c0c;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  width: fit-content;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
  }
`