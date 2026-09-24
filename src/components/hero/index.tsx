import * as S from "./style"
import backgroundHero from "../../assets/hero_pref.webp"
import { MessageCircle } from "lucide-react"

export function Hero() {
    return (
        <S.HeroContainer bgImage={backgroundHero}>
            <S.HeroContent>
                <S.Subtitle>Engenharia e Construção de Alto Padrão</S.Subtitle>
                <S.Title>
                    Transformando Projetos em <span>Realidade</span> com Rigor Técnico.
                </S.Title>
                <S.Description>
                    Da fundação ao acabamento, a V Torres Engenharia entrega soluções completas em execução, reformas e infraestrutura com total transparência e excelência.
                </S.Description>
                <S.CtaButton href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} />
                    Fale com um Engenheiro
                </S.CtaButton>
            </S.HeroContent>
        </S.HeroContainer>
    )
}