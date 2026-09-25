import * as S from "./style"

const servicesData = [
    {
        title: "Infraestrutura e Obras Públicas",
        description: "Execução especializada de obras civis institucionais, pavimentação, praças, quadras poliesportivas e infraestrutura urbana com rigor técnico e cumprimento de exigências legais."
    },
    {
        title: "Projetos Corporativos e Turnkey",
        description: "Soluções completas de ponta a ponta. Da elaboração do projeto executivo e planejamento orçamentário à entrega final da obra pronta para uso, sem desvios de cronograma."
    },
    {
        title: "Gerenciamento e Grandes Reformas",
        description: "Supervisão técnica rigorosa, controle estrito de custos, gestão de cronogramas e conformidade normativa para reformas de edifícios comerciais e públicos."
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