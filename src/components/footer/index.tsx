import React from "react"
import * as S from "./style"
import logoVTorres from "../../assets/logo_vtorres.webp"

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        {/* Coluna 1: Logo em imagem webp e Descrição */}
        <S.LogoArea>
          <img src={logoVTorres} alt="V Torres Engenharia" />
          <span>Construtora de Alto Padrão.</span>
        </S.LogoArea>

        {/* Coluna 2: Navegue */}
        <S.FooterColumn>
          <h4>Navegue</h4>
          <S.FooterLinkList>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#serviços">Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#sobre">Sobre nós</a></li>
            <li><a href="#avaliacoes">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </S.FooterLinkList>
        </S.FooterColumn>

        {/* Coluna 3: Redes Sociais */}
        <S.FooterColumn>
          <h4>Acompanhe nas redes sociais</h4>
          <S.FooterLinkList>
            <li>
              <a href="https://www.instagram.com/v.torresconstrutora" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://wa.me/5584987970076?text=Olá,%20gostaria%20de%20orçamento%20para%20construção." target="_blank" rel="noopener noreferrer">
                Whatsapp
              </a>
            </li>
          </S.FooterLinkList>
        </S.FooterColumn>

        {/* Coluna 4: Endereço */}
        <S.FooterColumn>
          <h4>Endereço</h4>
          <p>
            Rua Olinto Meira, 1018<br />
            Alecrim, Natal - RN<br />
            CEP: 59.030-180
          </p>
        </S.FooterColumn>
      </S.FooterContent>

      <S.Divider />

      <S.CopyrightText>
        V Torres Construtora - 2026 © Todos os direitos reservados.
      </S.CopyrightText>
    </S.FooterContainer>
  )
}