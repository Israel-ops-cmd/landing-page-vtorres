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
            <S.AboutImage src={aboutImg} alt="Sobre nossa construtora" />
            
            {/* Selo minimalista com a logo preta e o nome ao lado */}
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
          <S.SectionTag>Construtora Vtorres</S.SectionTag>
          <S.SectionTitle>Sobre nós</S.SectionTitle>
          
          <S.Description>
            Nossa missão é transformar sonhos em realidade. Com uma equipe dedicada e apaixonada pelo que faz, somos uma construtora comprometida em oferecer excelência em cada projeto que realizamos.
          </S.Description>

          <S.Description>
            Construímos não apenas estruturas, mas lares onde histórias são escritas e memórias são criadas. Cada obra que entregamos reflete a personalidade, o estilo de vida e o sucesso de nossos clientes.
          </S.Description>

          <S.Description>
            O que nos diferencia é o compromisso inegociável com a qualidade, transparência e satisfação, do primeiro contato até a entrega final da chave.
          </S.Description>

          <S.CtaButton href="#contato">
            Leia Mais
          </S.CtaButton>
        </S.TextColumn>
      </S.ContentWrapper>
    </S.AboutContainer>
  )
}