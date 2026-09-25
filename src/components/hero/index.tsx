import * as S from "./style"
import backgroundHero from "../../assets/hero_pref.webp"

export function Hero() {
    return (
        <S.HeroContainer bgImage={backgroundHero}>
            <S.HeroContent>
                <S.Subtitle>Engenharia e Construção de Alto Padrão</S.Subtitle>
                <S.Title>
                    Transformando Projetos em <span>Realidade</span> com Rigor Técnico.
                </S.Title>
                <S.Description>
                    Engenharia e Construção de Alto Padrão para Obras Públicas e Grandes Projetos, entregando soluções completas em infraestrutura com total conformidade, transparência e excelência.
                </S.Description>
                <S.CtaButton 
                    href="https://wa.me/5584999999999?text=Olá,%20gostaria%20de%20orçamento%20para%20projeto." 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {/* SVG do WhatsApp */}
                    FALE COM UM ENGENHEIRO
                </S.CtaButton>
            </S.HeroContent>
        </S.HeroContainer>
    )
}