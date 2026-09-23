import styled from "styled-components"

export const PortfolioContainer = styled.section`
  width: 100%;
  padding: 5rem 4rem;
  background-color: #0c0c0c;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
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
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
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
  /* Força exatamente 4 colunas na mesma linha em telas grandes */
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1400px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const ProjectCard = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  height: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
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
  background: linear-gradient(180deg, transparent 50%, rgba(12, 12, 12, 0.9) 100%);
  display: flex;
  align-items: flex-end;
  padding: 1.25rem;
  opacity: 0.85;
  transition: opacity 0.3s ease;
  box-sizing: border-box;
`

export const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1rem; /* Diminuído levemente para acomodar nomes maiores */
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limita o texto a no máximo 2 linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`

export const CtaButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
  color: #0c0c0c;
  padding: 1rem 2rem;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
  }
`