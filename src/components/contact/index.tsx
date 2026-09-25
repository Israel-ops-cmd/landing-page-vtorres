import * as S from "./style"

export function Contact() {
    return (
        <S.ContactContainer id="contato">
            {/* Fitas posicionadas estrategicamente para invadir o topo e fazer a sobreposição moderna */}
            <S.RibbonsWrapper>
                <S.Ribbon className="ribbon-1">
                    <span>engenharia de <strong>EXCELÊNCIA</strong></span>
                    <span>•</span>
                    <span>projetos de <strong>ALTO PADRÃO</strong></span>
                    <span>•</span>
                    <span>engenharia de <strong>EXCELÊNCIA</strong></span>
                    <span>•</span>
                    <span>projetos de <strong>ALTO PADRÃO</strong></span>
                </S.Ribbon>
                <S.Ribbon className="ribbon-2">
                    <span>compromisso com <strong>PRAZOS</strong></span>
                    <span>•</span>
                    <span>solidez e <strong>TECNOLOGIA</strong></span>
                    <span>•</span>
                    <span>compromisso com <strong>PRAZOS</strong></span>
                    <span>•</span>
                    <span>solidez e <strong>TECNOLOGIA</strong></span>
                </S.Ribbon>
            </S.RibbonsWrapper>

            <S.ContactBackground>
                {/* Imagem de fachada moderna com iluminação quente ao entardecer (Alta Definição) */}
                <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85" 
                    alt="Projeto executado pela VTorres" 
                />
                <S.OverlayGradient />
            </S.ContactBackground>

            <S.ContentWrapper>
                {/* Mantido o espaçamento minimalista original */}
                <S.SectionTag>C o n t a t o</S.SectionTag>
                
                <S.SectionTitle>
                    Pronto para tirar o seu projeto do papel com segurança e rigor técnico?
                </S.SectionTitle>

                <S.SectionDescription>
                    Conte com a experiência da VTorres para executar sua obra com excelência, transparência e cumprimento absoluto de prazos. Fale diretamente com nossa equipe de engenharia.
                </S.SectionDescription>

                <S.WhatsAppButton 
                    href="https://wa.me/5584999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20projeto/construção." 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    FALAR COM ENGENHEIRO VIA WHATSAPP
                </S.WhatsAppButton>
            </S.ContentWrapper>
        </S.ContactContainer>
    )
}