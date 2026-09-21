import styled from "styled-components"
import heroBg from "../../assets/hero.webp"

export const HeroContainer = styled.section`
  margin-top: 80px;
  height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 4rem;
  box-sizing: border-box;
  overflow: hidden;

  background-image: 
    linear-gradient(90deg, #0c0c0c 40%, rgba(12, 12, 12, 0.75) 65%, rgba(12, 12, 12, 0.2) 100%), 
    url(${heroBg});
  
  background-size: cover;
  background-position: center;
`

export const HeroContent = styled.div`
  max-width: 680px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  z-index: 2;
`

export const Subtitle = styled.span`
  /* Dourado limpo e sofisticado no subtítulo */
  color: #d4af37;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  margin-bottom: 0.2rem;
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.15;

  span {
    /* Gradiente dourado moderno, brilhante e sem o tom alaranjado */
    background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Description = styled.p`
  color: #c4c4c4;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 0.8rem;
`

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Botão com o mesmo padrão de dourado nobre */
  background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
  color: #121212;
  padding: 0.95rem 2.2rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  width: fit-content;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.25);

  &:hover {
    filter: brightness(1.15);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  }
`