import styled from "styled-components"

export const PortfolioContainer = styled.section`
  width: 100%;
  background-color: #0c0c0c; /* Fundo preto elegante igual ao da referência */
  padding: 6rem 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    gap: 3rem;
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
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1300px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.div`
  position: relative;
  height: 480px; /* Altura vertical imponente igual à referência */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover img {
    transform: scale(1.08); /* Efeito de zoom suave ao passar o rato */
  }

  &:hover div {
    opacity: 1;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(12, 12, 12, 0.9) 0%,
    rgba(12, 12, 12, 0.3) 50%,
    transparent 100%
  );
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  opacity: 0.8;
  transition: opacity 0.3s ease;
`

export const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
`

export const CtaButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: #00875f; /* Verde estilo WhatsApp da referência */
  color: #ffffff;
  padding: 1rem 2.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 135, 95, 0.3);

  &:hover {
    background-color: #00a36c;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 135, 95, 0.4);
  }
`