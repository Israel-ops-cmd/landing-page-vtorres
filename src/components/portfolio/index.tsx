import * as S from "./style"
import { MessageCircle } from "lucide-react"

export function Portfolio() {
  const projects = [
    { id: 1, title: "Residência Alphaville", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Casa Contemporânea", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Projeto Horizon", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Residência Jardins", image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop" },
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
        <MessageCircle size={20} />
        Fale Conosco
      </S.CtaButton>
    </S.PortfolioContainer>
  )
}