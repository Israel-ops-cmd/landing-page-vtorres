import * as S from "./style"

const servicesData = [
    {
        title: "Construção",
        description: "Especializados em execução residencial e infraestrutura de alto padrão, oferecemos soluções completas, da fundação ao acabamento, garantindo obras sólidas e de alta qualidade."
    },
    {
        title: "Obras Turnkey",
        description: "Deixe tudo por nossa conta. Do projeto e planejamento à entrega das chaves, cuidamos de cada detalhe para você sem preocupações."
    },
    {
        title: "Gerenciamento e Reformas",
        description: "Supervisão técnica rigorosa, controle de custos e cronogramas para reformas comerciais ou residenciais com total transparência."
    }
]

export function Services() {
    return (
        <S.ServicesContainer id="serviços">
            <S.HeaderWrapper>
                <div>
                    <S.SectionTag>Atuação</S.SectionTag>
                    <S.SectionTitle>Conheça nossos serviços</S.SectionTitle>
                </div>
                <S.TopButton href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    <span>Fale Conosco</span>
                </S.TopButton>
            </S.HeaderWrapper>

            <S.ServicesList>
                {servicesData.map((service, index) => (
                    <S.ServiceItem key={index}>
                        <S.ServiceInfo>
                            <S.ServiceTitle>{service.title}</S.ServiceTitle>
                            <S.ServiceDescription>{service.description}</S.ServiceDescription>
                        </S.ServiceInfo>
                        
                        <S.ActionWrapper href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                            <span className="label">Saiba mais</span>
                            <div className="icon-circle">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </div>
                        </S.ActionWrapper>
                    </S.ServiceItem>
                ))}
            </S.ServicesList>
        </S.ServicesContainer>
    )
}