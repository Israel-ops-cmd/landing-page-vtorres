import { useState, useEffect } from "react"
import * as S from "./style"

const testimonialsData = [
    {
        id: 1,
        text: "A execução da obra foi impecável e o rigor com o cronograma físico-financeiro superou nossas expectativas. Uma empresa séria e comprometida com a engenharia de qualidade.",
        name: "Eng. Carlos Eduardo",
        location: "Natal, RN",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 2,
        text: "Profissionais de altíssima qualificação técnica. Cumpriram rigorosamente todas as exigências contratuais e normativas do projeto. Recomendo pela transparência e solidez.",
        name: "Juliana Paiva",
        location: "Natal, RN",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 3,
        text: "Altíssimo padrão de entrega e suporte técnico impecável durante todas as etapas. A VTorres demonstra total domínio em projetos de infraestrutura complexos.",
        name: "Roberto Almeida",
        location: "Parnamirim, RN",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 4,
        text: "Cumpriram rigorosamente os prazos combinados e o padrão de acabamento e segurança estrutural ficou excelente. Segurança jurídica e técnica do início ao fim.",
        name: "Camila Medeiros",
        location: "Parnamirim, RN",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    },
    {
        id: 5,
        text: "A transparência na gestão de custos e o alinhamento com as normas técnicas foram diferenciais marcantes. Parceria de total confiança para futuros projetos.",
        name: "Lucas Fernandes",
        location: "Natal, RN",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
    }
]

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const itemsPerPage = 3
    const maxIndex = testimonialsData.length - itemsPerPage

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
    }

    const getVisibleTestimonials = () => {
        let items = []
        for (let i = 0; i < itemsPerPage; i++) {
            const index = (currentIndex + i) % testimonialsData.length
            items.push(testimonialsData[index])
        }
        return items
    }

    const visibleTestimonials = getVisibleTestimonials()

    // Autoplay pausado caso o usuário passe o mouse para ler com calma
    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            handleNext()
        }, 7000)

        return () => clearInterval(interval)
    }, [currentIndex, isPaused])

    return (
        <S.TestimonialsContainer id="avaliacoes">
            <S.SectionCurve>
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0,10 C 600,100 1300,10 1440,0 L1440,100 L0,100 Z" fill="#ffffff" />
                </svg>
            </S.SectionCurve>

            <S.HeaderWrapper>
                <S.SectionTag>Credibilidade e Parcerias</S.SectionTag>
                <S.SectionTitle>O que dizem quem confia na nossa engenharia</S.SectionTitle>
            </S.HeaderWrapper>

            <S.CarouselWrapper 
                onMouseEnter={() => setIsPaused(true)} 
                onMouseLeave={() => setIsPaused(false)}
            >
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