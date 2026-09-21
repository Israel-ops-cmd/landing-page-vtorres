import * as S from "./style"
import logoImg from "../../assets/logo_vtorres.webp"

export function Header() {
    return (
        <S.HeaderContainer>
            <S.LogoWrapper>
                <S.LogoImg src={logoImg} alt="Logo V Torres Engenharia" />
            </S.LogoWrapper>

            <S.NavList>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#serviços">Serviços</a></li>
                <li><a href="#portifolio">Portifolio</a></li>
                <li><a href="#contato">Contato</a></li>
            </S.NavList>

            <S.ContactButton href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                Fale Conosco
            </S.ContactButton>
        </S.HeaderContainer>
    )
}