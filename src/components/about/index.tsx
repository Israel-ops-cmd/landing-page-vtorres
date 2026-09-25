import * as S from "./style"
import aboutImg from "../../assets/hero_pref.webp"
import logoVtorres from "../../assets/logo_vtorres.webp"

export function About() {
  return (
    <S.AboutContainer id="sobre">
      <S.ContentWrapper>
        <S.ImageAreaWrapper>
          <S.FloatingTitle>
            <span>Cons</span>
            <span>tru</span>
            <span>tora</span>
          </S.FloatingTitle>

          <S.ImageColumn>
            <S.AboutImage src={aboutImg} alt="Infraestrutura e obras executadas pela Construtora VTorres" />
            
            {/* Selo minimalista com a logo e o nome ao lado */}
            <S.LogoOverlay>
              <img src={logoVtorres} alt="Logo Vtorres" />
              <S.LogoTextInfo>
                <span>V Torres</span>
                <span>Construtora</span>
              </S.LogoTextInfo>
            </S.LogoOverlay>
          </S.ImageColumn>
        </S.ImageAreaWrapper>

        <S.TextColumn>
          <S.SectionTag>Engenharia e Solidez</S.SectionTag>
          <S.SectionTitle>Sobre nós</S.SectionTitle>
          
          <S.Description>
            A <strong>Construtora VTorres</strong> consolida sua trajetória na execução de projetos de engenharia civil com alto rigor técnico, pautada pela eficiência, segurança estrutural e cumprimento rigoroso de prazos.
          </S.Description>

          <S.Description>
            Atuamos de forma integrada no desenvolvimento de obras de infraestrutura e projetos institucionais, transformando planejamento estratégico em estruturas duráveis e de alto impacto para a sociedade.
          </S.Description>

          <S.Description>
            Nosso diferencial competitivo reside na transparência operacional, na conformidade normativa absoluta e na gestão técnica qualificada do primeiro planejamento à entrega final.
          </S.Description>

          <S.CtaButton href="#contato">
            Conheça Nossos Projetos
          </S.CtaButton>
        </S.TextColumn>
      </S.ContentWrapper>
    </S.AboutContainer>
  )
}