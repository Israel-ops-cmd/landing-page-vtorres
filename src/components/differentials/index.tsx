import * as S from "./style"

const differentialsData = [
    {
        title: "Atendimento Próximo",
        description: "Relação próxima e atenciosa com cada cliente para satisfazer as necessidades individuais e alinhar cada detalhe do projeto.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        )
    },
    {
        title: "Prazos Cumpridos",
        description: "Cronogramas rigorosamente seguidos e planeamento estratégico para entregas pontuais, sem surpresas ou atrasos.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    },
    {
        title: "Economia Efetiva",
        description: "Nossa abordagem garante uma gestão financeira inteligente, otimizando recursos, evitando desperdícios e maximizando o valor do investimento.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
        )
    }
]

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
                        <S.IconWrapper>{item.icon}</S.IconWrapper>
                        <S.CardTitle>{item.title}</S.CardTitle>
                        <S.CardDescription>{item.description}</S.CardDescription>
                    </S.Card>
                ))}
            </S.CardsGrid>
        </S.DifferentialsContainer>
    )
}