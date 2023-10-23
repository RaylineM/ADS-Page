import Link from 'next/link'
import styled from 'styled-components'

const CardContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
`

const Title = styled.h3`
  color: #0074b8;
  font-size: 20px;
  margin-bottom: 10px;
`

const Description = styled.p`
  color: #333;
  font-size: 14px;
`

const ReadMore = styled.a`
  color: #0074b8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function CorpoCard() {
  return (
    <CardContainer>
      <Title>Corpo Docente</Title>
      <Description>
        Conheça nosso corpo docente e suas qualificações.
      </Description>
      <Link href="/corpo_info">
        <ReadMore>Ver mais</ReadMore>
      </Link>
    </CardContainer>
  )
}

export default CorpoCard
