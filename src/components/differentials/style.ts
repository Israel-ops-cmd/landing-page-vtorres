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
  gap: 0.6rem;
`

export const SectionTag = styled.span`
  color: #aa7c11;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px; 
`

export const SectionTitle = styled.h2`
  color: #121212;
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.7rem;
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
  border-radius: 0px; 
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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
  width: 42px;
  height: 42px;
  border-radius: 0px; 
  background-color: rgba(212, 175, 55, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4af37;
  margin-bottom: 0.5rem;
`

export const CardTitle = styled.h3`
  color: #ffffff;
  font-size: 1.35rem;
  font-weight: 500;
  letter-spacing: -0.2px;
  
  position: relative;
  padding-bottom: 1.2rem;
  margin-bottom: 0.2rem;

  /* LINHA MAIOR E UM POUCO MAIS GROSSA */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 120px; /* Aumentado de 45px para 65px */
    height: 3px; /* Aumentado de 2px para 3px */
    background: #d4af37;
    opacity: 0.9;
  }
`

export const CardDescription = styled.p`
  color: #ffffff; /* Alterado para branco puro */
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 300;
  opacity: 0.9; /* Leve ajuste de opacidade opcional para suavizar o branco puro no fundo escuro, ou remova se quiser 100% opaco */
`