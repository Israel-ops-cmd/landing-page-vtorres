import styled from "styled-components"

export const TestimonialsContainer = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 5rem 0 6rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
  color: #1a1a1a;
  
  margin-top: 50px; 
  z-index: 10;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 768px) {
    margin-top: -60px;
    padding: 6rem 0 4rem 0;
  }
`

export const SectionCurve = styled.div`
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 110px;
  overflow: hidden;
  pointer-events: none;
  line-height: 0;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  @media (max-width: 768px) {
    top: -60px;
    height: 70px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1.5rem;
  gap: 0.8rem;
`

export const SectionTag = styled.span`
  color: #aa7c11;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 4px; /* Deixa o espaçamento bem largo e minimalista como na referência */
`

export const SectionTitle = styled.h2`
  color: #1a1a1a;
  font-size: 2.3rem;
  font-weight: 500; /* Peso médio deixa mais sofisticado e moderno */
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

export const CarouselWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 4rem;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 0 1.5rem;
  }
`

export const CarouselViewport = styled.div`
  width: 100%;
  overflow: hidden;
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const TestimonialCard = styled.div`
  background-color: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  box-sizing: border-box;
`

export const Stars = styled.div`
  color: #d4af37;
  font-size: 1rem;
  letter-spacing: 2px;
  margin-bottom: 0.8rem;
`

export const TestimonialText = styled.p`
  color: #555555;
  font-size: 0.95rem;
  line-height: 1.8;
  font-weight: 300; /* Texto mais leve, puro minimalismo */
`

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }
`

export const ClientName = styled.strong`
  color: #1a1a1a;
  font-size: 0.9rem;
  font-weight: 600;
  display: block;
`

export const ClientLocation = styled.span`
  color: #888888;
  font-size: 0.8rem;
  font-weight: 300;
`

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 5;

  &.prev {
    left: -0.5rem;
  }

  &.next {
    right: -0.5rem;
  }

  &:hover {
    background: #d4af37;
    color: #ffffff;
    border-color: #d4af37;
  }

  @media (max-width: 1024px) {
    display: none; 
  }
`

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #dcdcdc;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background-color: #d4af37;
      width: 20px;
      border-radius: 3px;
    }
  }
`