import * as S from "./style"
import { MessageCircle } from "lucide-react"

import imagem1 from "../../assets/imagem_1.webp"
import imagem2 from "../../assets/imagem_2.webp"
import imagem3 from "../../assets/imagem_3.webp"
import hero_pref from "../../assets/hero_pref.webp"

export function Portfolio() {
  const projects = [
    { id: 1, title: "Pórtico de Brejinho", image: imagem1 },
    { id: 2, title: "Quadra do Colégio Over", image: imagem2 },
    { id: 3, title: "Projeto Horizon", image: imagem3 },
    { id: 4, title: "Prefeitura de Curral de Cima", image: hero_pref },
  ]

  return (
    <S.PortfolioContainer id="portfolio">
      <S.HeaderWrapper>
        <S.SectionTag>Obras Recentes</S.SectionTag>
        <S.SectionTitle>Conheça nosso portfólio</S.SectionTitle>
      </S.HeaderWrapper>

      <S.ProjectsGrid>
        {projects.map((project) => (
          <S.ProjectCard key={project.id}>
            <S.ProjectImage src={project.image} alt={project.title} />
            <S.ProjectOverlay>
              <S.ProjectTitle>{project.title}</S.ProjectTitle>
            </S.ProjectOverlay>
          </S.ProjectCard>
        ))}
      </S.ProjectsGrid>

      <S.CtaButton href="https://wa.me/" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} />
        Fale Conosco
      </S.CtaButton>
    </S.PortfolioContainer>
  )
}