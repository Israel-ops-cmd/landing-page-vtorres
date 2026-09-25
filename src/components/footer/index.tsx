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
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
            <li><a href="#sobre">Sobre nós</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </S.FooterLinkList>
        </S.FooterColumn>

        {/* Coluna 3: Redes Sociais */}
        <S.FooterColumn>
          <h4>Acompanhe nas redes sociais</h4>
          <S.FooterLinkList>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://wa.me/5584999999999" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
          </S.FooterLinkList>
        </S.FooterColumn>

        {/* Coluna 4: Endereço */}
        <S.FooterColumn>
          <h4>Endereço</h4>
          <p>
            Av. Exemplo de Castro, 1000 - Sala 501<br />
            Bairro Nobre, Cidade - Estado<br />
            CEP: 00000-000
          </p>
        </S.FooterColumn>
      </S.FooterContent>

      <S.Divider />

      <S.CopyrightText>
        V Torres Engenharia - 2026 © Todos os direitos reservados.
      </S.CopyrightText>
    </S.FooterContainer>
  )
}