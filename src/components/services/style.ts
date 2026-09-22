import styled from "styled-components"

export const ServicesContainer = styled.section`
  width: 100%;
  background-color: #0c0c0c;
  padding: 6rem 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`

export const SectionTag = styled.span`
  color: #d4af37;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  display: block;
  margin-bottom: 0.5rem;
`

export const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
`

export const TopButton = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    border-color: #d4af37;
    color: #d4af37;
    background-color: rgba(212, 175, 55, 0.05);
  }
`

export const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
`

export const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    padding-left: 10px; /* Pequeno efeito de deslize elegante */
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`

export const ServiceInfo = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const ServiceTitle = styled.h3`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 600;
`

export const ServiceDescription = styled.p`
  color: #E2E2E2;
  font-size: 1rem;
  line-height: 1.6;
`

export const ActionWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;

  .label {
    color: #d4af37;
    font-size: 0.95rem;
    font-weight: 500;
    opacity: 0.8;
    transition: opacity 0.3s ease;
  }

  .icon-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid rgba(212, 175, 55, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d4af37;
    transition: all 0.3s ease;
  }

  &:hover {
    .label {
      opacity: 1;
    }
    .icon-circle {
      background: linear-gradient(135deg, #fff2b2 0%, #d4af37 50%, #aa7c11 100%);
      color: #0c0c0c;
      border-color: transparent;
      transform: scale(1.05);
    }
  }
`