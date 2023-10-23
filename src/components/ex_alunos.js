"use client"
import Link from 'next/link';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
`;

const Titulo = styled.h3`
  color: #0074b8;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Descricao = styled.p`
  color: #333;
  font-size: 14px;
`;

const BotaoIniciar = styled.button`
  background-color: #0074b8;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 13px;
`;

function CardPerfilExAlunos() {
  return (
    <CardContainer>
      <Titulo>Perfil de Ex-Alunos</Titulo>
      <Descricao>Conheça ex-alunos que estão trabalhando na área.</Descricao>
      <Link href="/aluno">
        <BotaoIniciar>Ver Perfis</BotaoIniciar>
      </Link>
    </CardContainer>
  );
}

export default CardPerfilExAlunos;