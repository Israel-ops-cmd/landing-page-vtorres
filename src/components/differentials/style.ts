import styled from "styled-components"

export const DifferentialsContainer = styled.section`
  width: 100%;
  background-color: #f4f4f4;
  padding: 9rem 4rem 6rem 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
  
  /* O corte assimétrico idêntico à referência:
     - Começa mais alto na esquerda (0 2vw)
     - Desce até um ponto mais baixo deslocado para a esquerda (35% 5vw)
     - Sobe suavemente até o canto superior direito (100% 1.5vw)
  */
  clip-path: polygon(0 2vw, 35% 5vw, 100% 1.5vw, 100% 100%, 0 100%);
  margin-top: -3.5vw;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 7rem 1.5rem 4rem 1.5rem;
    clip-path: polygon(0 1.5vw, 35% 3.5vw, 100% 1vw, 100% 100%, 0 100%);
    margin-top: -2.5vw;
  }
`

export const HeaderWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SectionTag = styled.span`
  color: #aa7c11;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2.5px;
`

export const SectionTitle = styled.h2`
  color: #121212;
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`

export const Card = styled.div`
  background-color: #0c0c0c;
  border-radius: 8px;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: rgba(212, 175, 55, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4af37;
`

export const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 600;
`

export const CardDescription = styled.p`
  color: #c4c4c4;
  font-size: 1rem;
  line-height: 1.6;
`