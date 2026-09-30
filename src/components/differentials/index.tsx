import * as S from "./style"

// Dados dos diferenciais internos para evitar quebras de importação
const differentialsData = [
    {
        title: "Atendimento Direto e Engenharia Próxima",
        description: "Canal aberto e transparente com os engenheiros responsáveis, garantindo agilidade na tomada de decisão e alinhamento constante com a fiscalização.",
        iconType: "user"
    },
    {
        title: "Cumprimento Rigoroso de Prazos",
        description: "Planejamento estratégico e cronogramas executivos rigorosamente seguidos para entregas pontuais, prevenindo sanções e atrasos contratuais.",
        iconType: "clock"
    },
    {
        title: "Gestão Financeira e Econômica",
        description: "Controle orçamentário eficiente, otimização de recursos e engenharia de custos para evitar desperdícios e aditivos desnecessários.",
        iconType: "dollar"
    }
];

// Função auxiliar para renderizar os ícones de forma limpa
function renderIcon(type: string) {
    switch (type) {
        case "user":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            );
        case "clock":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            );
        case "dollar":
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            );
        default:
            return null;
    }
}

export function Differentials() {
    return (
        <S.DifferentialsContainer>
            <S.HeaderWrapper>
                <S.SectionTag>Diferenciais</S.SectionTag>
                <S.SectionTitle>Por que contratar a V Torres?</S.SectionTitle>
            </S.HeaderWrapper>

            <S.CardsGrid>
                {differentialsData.map((item, index) => (
                    <S.Card key={index}>
                        <S.IconWrapper>{renderIcon(item.iconType)}</S.IconWrapper>
                        <S.CardTitle>{item.title}</S.CardTitle>
                        <S.CardDescription>{item.description}</S.CardDescription>
                    </S.Card>
                ))}
            </S.CardsGrid>
        </S.DifferentialsContainer>
    )
}