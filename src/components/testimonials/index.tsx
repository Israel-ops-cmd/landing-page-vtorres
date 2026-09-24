import { useState, useEffect } from "react"
import * as S from "./style"

const testimonialsData = [
    {
        id: 1,
        text: "Construir minha casa com a V Torres Engenharia foi uma experiência incrível! Desde o primeiro encontro, senti que minha visão era valorizada e levada a sério. O resultado final superou todas as minhas expectativas, e agora tenho o lar dos meus sonhos.",
        name: "Marcos Vinícius",
        location: "Natal, RN",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 2,
        text: "Estou impressionado com o profissionalismo e a dedicação. Eles não apenas construíram uma casa para mim; criaram um espaço onde minha família pode viver e crescer juntos. Cada detalhe foi cuidadosamente pensado.",
        name: "Juliana Paiva",
        location: "Natal, RN",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 3,
        text: "Eu tinha altas expectativas ao escolher a construtora, e eles superaram em todos os aspectos. Desde a qualidade dos materiais até a atenção aos detalhes, cada etapa foi executada com excelência.",
        name: "Roberto Almeida",
        location: "Parnamirim, RN",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 4,
        text: "Profissionais de altíssima qualidade! Cumpriram os prazos combinados e o acabamento da obra ficou impecável. Recomendo de olhos fechados para quem quer construir sem dor de cabeça.",
        name: "Camila Medeiros",
        location: "Parnamirim, RN",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 5,
        text: "A transparência durante todo o processo de construção foi o que mais me chamou a atenção. Sempre prontos a tirar dúvidas e sugerir melhorias que economizaram nosso orçamento.",
        name: "Lucas Fernandes",
        location: "Natal, RN",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
    }
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerPage = 3
    // Como temos 5 itens, as posições de início válidas para mostrar 3 são 0, 1 e 2. 
    // Para tornar circular perfeito (passando de 3 em 3 ou rodando o array):
    const maxIndex = testimonialsData.length - itemsPerPage

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
    }

    // Seleciona os 3 visíveis garantindo que se chegar ao fim, ele dá a volta circular corretamente
    const getVisibleTestimonials = () => {
        let items = []
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % testimonialsData.length
            items.push(testimonialsData[index])
        }
        return items
    }

    const visibleTestimonials = getVisibleTestimonials()

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 7000)

        return () => clearInterval(interval)
    }, [currentIndex])

    return (
        <S.TestimonialsContainer id="avaliacoes">
            <S.SectionCurve>
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,10 C 600,100 1300,10 1440,0 L1440,100 L0,100 Z" fill="#ffffff" />
                </svg>
            </S.SectionCurve>

            <S.HeaderWrapper>
                <S.SectionTag>Avaliações</S.SectionTag>
                <S.SectionTitle>O que nossos clientes dizem</S.SectionTitle>
            </S.HeaderWrapper>

            <S.CarouselWrapper>
                <S.NavButton className="prev" onClick={handlePrev} aria-label="Depoimento anterior">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </S.NavButton>

                <S.CarouselViewport>
                    <S.CardsGrid>
                        {visibleTestimonials.map((item) => (
                            <S.TestimonialCard key={item.id}>
                                <div>
                                    <S.Stars>★★★★★</S.Stars>
                                    <S.TestimonialText>"{item.text}"</S.TestimonialText>
                                </div>

                                <S.ClientInfo>
                                    <img src={item.avatar} alt={item.name} />
                                    <div>
                                        <S.ClientName>{item.name}</S.ClientName>
                                        <S.ClientLocation>{item.location}</S.ClientLocation>
                                    </div>
                                </S.ClientInfo>
                            </S.TestimonialCard>
                        ))}
                    </S.CardsGrid>
                </S.CarouselViewport>

                <S.NavButton className="next" onClick={handleNext} aria-label="Próximo depoimento">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </S.NavButton>
            </S.CarouselWrapper>

            <S.DotsContainer>
                {testimonialsData.map((_, index) => (
                    <span 
                        key={index} 
                        className={currentIndex === index ? "active" : ""} 
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </S.DotsContainer>
        </S.TestimonialsContainer>
    )
}