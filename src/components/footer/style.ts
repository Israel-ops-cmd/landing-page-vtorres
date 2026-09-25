import styled from "styled-components"

export const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  padding: 4rem 2rem 2rem 2rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h4 {
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffffff;
    margin-bottom: 0.5px;
  }

  p {
    font-size: 0.85rem;
    color: #a0a0a0;
    line-height: 1.6;
    font-weight: 300;
  }
`

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    max-width: 150px;
    height: auto;
  }

  span {
    font-size: 0.85rem;
    color: #a0a0a0;
    font-weight: 300;
    line-height: 1.5;
  }
`

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  li {
    a {
      color: #a0a0a0;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 300;
      transition: color 0.2s ease;

      &:hover {
        color: #ffffff;
      }
    }
  }
`

export const Divider = styled.hr`
  width: 100%;
  max-width: 1200px;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: 2rem;
`

export const CopyrightText = styled.p`
  font-size: 0.75rem;
  color: #707070;
  text-align: center;
  font-weight: 300;
  letter-spacing: 0.5px;
`