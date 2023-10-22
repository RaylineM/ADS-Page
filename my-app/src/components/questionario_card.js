import Link from 'next/link';
import styled from 'styled-components';

const CardContainer = styled.div`
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

const Description = styled.p`
  color: #333;
  font-size: 14px;
`;

const StartButton = styled.button`
  background-color: #0074b8;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top:13px;
`;

function QuestionarioCard() {
  return (
    <CardContainer>
      <Title>Questionário</Title>
      <Description>Responda a algumas perguntas importantes.</Description>
      <Link href="./questionario">
        <StartButton>Iniciar Questionário</StartButton>
      </Link>
    </CardContainer>
  );
}

export default QuestionarioCard;
