import styled from "styled-components"

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  padding: 5rem 2rem 2rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 550px) {
    padding: 3.5rem 1.5rem 1.5rem 1.5rem;
  }
`

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.3fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: start; /* Alinha perfeitamente o topo de todas as colunas */

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem 2rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }
`

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  img {
    max-width: 140px;
    height: auto;
  }

  span {
    font-size: 0.85rem;
    color: #a0a0a0;
    font-weight: 300;
    line-height: 1.5;
    max-width: 240px;

    @media (max-width: 550px) {
      max-width: 100%;
    }
  }

  @media (max-width: 550px) {
    align-items: center;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffffff;
    margin: 0;
  }

  p {
    font-size: 0.85rem;
    color: #a0a0a0;
    line-height: 1.6;
    font-weight: 300;
    margin: 0;
  }
`

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  li {
    a {
      color: #a0a0a0;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 300;
      transition: color 0.2s ease, transform 0.2s ease;
      display: inline-block;

      &:hover {
        color: #ffffff;
        transform: translateX(3px); /* Pequeno efeito de movimento elegante ao passar o mouse */

        @media (max-width: 550px) {
          transform: none;
        }
      }
    }
  }
`

export const Divider = styled.hr`
  width: 100%;
  max-width: 1200px;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
`

export const CopyrightText = styled.p`
  font-size: 0.75rem;
  color: #707070;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.5px;
  margin: 0;
`