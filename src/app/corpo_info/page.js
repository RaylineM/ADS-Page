"use client"
import Link from 'next/link';
import styled from 'styled-components';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom:290px;
`;

const Card = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
  width: 300px;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  text-align: center; 

`;

const NomeProfessor = styled.h2`
  color: #0074b8;
  font-size: 20px;
  margin-bottom: 10px;
`;

const InfoProfessor = styled.p`
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
`;

const ImagemProfessor = styled.img`
  width: 100px; 
  height: 100px;
  border-radius: 50%; 
`;

const Professores = () => {
  const professores = [
    {
      nome: 'Carlos Estevão',
      imagem: '/imagem/estevao.jpeg', 
      dataIngresso: '2023',
      Especialidade: 'Processamento Digital de Imagem ',
    },
    {
      nome: 'Edson Cavalcante',
      imagem: '/imagem/edson.jpg',
      dataIngresso: '2018',
      Especialidade: 'Sistema de Informação',
    },
    {
      nome: 'Eutino Sirqueira',
      imagem: '/imagem/eutino.jpeg',
      dataIngresso: '2020',
      Especialidade: 'Inteligência Artificial',
    },
    {
        nome: 'Felipe Santos',
        imagem: '/imagem/felipe.png', 
        dataIngresso: '2017',
        Especialidade: 'Inteligência Artificial',
      },
      {
        nome: 'Karl Alelaf',
        imagem: '/imagem/karl.jpeg', 
        dataIngresso: '2020',
        Especialidade: 'Rede de Computadores',
      },
      {
        nome: 'Túlio Vidal',
        imagem: '/imagem/tulio.jpg', 
        dataIngresso: '2023',
        Especialidade: 'Banco de Dados',
      },
  ];

  return (
    <>
    <Header/>
    <Container>
      {professores.map((professor, index) => (
        <Card key={index}>
          <ImagemProfessor src={professor.imagem} alt={professor.nome} />
          <NomeProfessor>{professor.nome}</NomeProfessor>
          <InfoProfessor>
            Data de Ingresso: {professor.dataIngresso}
          </InfoProfessor>
          <InfoProfessor>Especialidade: {professor.Especialidade}</InfoProfessor>
        </Card>
      ))}
    </Container>
    <Footer/>
    </>
  );
};

export default Professores;
