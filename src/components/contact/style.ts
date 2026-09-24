import styled from "styled-components"

export const ContactContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  padding: 9rem 1.5rem 8rem 1.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 7rem 1rem 5rem 1rem;
  }
`

export const ContactBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const OverlayGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Degradê sofisticado que escurece e migra perfeitamente para o preto absoluto na base */
  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0.75) 0%,
    rgba(10, 10, 10, 0.6) 40%,
    rgba(10, 10, 10, 0.85) 75%,
    rgba(0, 0, 0, 1) 100%
  );
  z-index: 2;
`

export const RibbonsWrapper = styled.div`
  position: absolute;
  top: -59px;
  left: 0;
  width: 100%;
  height: 110px;
  overflow: visible;
  z-index: 10;
  pointer-events: none;
`

export const Ribbon = styled.div`
  position: absolute;
  width: 124%;
  left: -12%;
  color: #ffffff;
  padding: 0.8rem 0;
  font-size: 0.85rem;
  font-weight: 300;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  display: flex;
  gap: 3.5rem;

  strong {
    font-weight: 800;
  }

  span {
    display: inline-block;
  }

  &.ribbon-1 {
    top: 0px;
    transform: rotate(-2.8deg);
    z-index: 12;
    background-color: #236b30;
  }

  &.ribbon-2 {
    top: 25px;
    transform: rotate(2.8deg);
    z-index: 11;
    background-color: #164e21;
  }
`

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 950px;
  width: 100%;
  gap: 1.5rem;
  margin-top: 2.5rem;
`

export const SectionTag = styled.span`
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 6px;
  opacity: 0.85;
`

export const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.5px;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

export const SectionDescription = styled.p`
  color: #dcdcdc;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 780px;
  font-weight: 300;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`

/* BOTÃO WHATSAPP: Estilo padronizado com o CtaButton do Hero (Degradê Dourado/Champanhe e formato pílula) */
export const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
  color: #0c0c0c;
  padding: 0.9rem 2.2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  letter-spacing: 0.5px;
  text-align: center;
  width: fit-content;
  margin-top: 1rem;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  svg {
    fill: currentColor;
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4);
  }
`