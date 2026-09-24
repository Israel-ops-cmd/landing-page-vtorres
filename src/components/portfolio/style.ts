import styled from "styled-components"

export const PortfolioContainer = styled.section`
  width: 100%;
  padding: 6rem 4rem;
  background-color: #0c0c0c;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
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
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 3px;
`

export const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 2.3rem;
  font-weight: 450;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  width: 100%;
  max-width: 1350px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.div`
  position: relative;
  border-radius: 0px; /* Cantos totalmente retos, exatamente como na referência */
  overflow: hidden;
  height: 400px;
  background-color: #141414;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  cursor: pointer;

  &:hover img {
    transform: scale(1.04);
  }

  &:hover div {
    opacity: 1;
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
`

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 55%, rgba(12, 12, 12, 0.85) 100%);
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  box-sizing: border-box;
`

export const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.2px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`

export const CtaButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  /* Retornado o gradiente dourado clássico da identidade */
  background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
  color: #0c0c0c; /* Texto escuro para contrastar perfeitamente com o fundo dourado */
  padding: 0.9rem 2.4rem;
  border-radius: 50px; /* Formato pílula redondinho nas pontas */
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }
`