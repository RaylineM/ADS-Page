import Link from 'next/link';
import styled from 'styled-components';

const InfoContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
`;

const Title = styled.h2`
  color: #0074b8;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Content = styled.p`
  color: #333;
  font-size: 16px;
`;
const Description = styled.p`
  color: #333;
  font-size: 14px;
`;
const ReadMore = styled.a`
  color: #0074b8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const BackButton = styled.a`
  color: #0074b8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Representante() {
  return (
    <InfoContainer>
      <Title>Representante estudantil</Title>
      <Description>Informações do Representante dos Alunos</Description>
      <Link href="/repre_info">
        <ReadMore>Ver mais</ReadMore>
      </Link>
    </InfoContainer>
  );
}

export default Representante;