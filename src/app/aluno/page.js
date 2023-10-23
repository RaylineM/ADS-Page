'use client'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '@/components/header'
import Footer from '@/components/footer'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

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
  margin-bottom: 170px;
`

const NomeAluno = styled.h2`
  color: #0074b8;
  font-size: 20px;
  margin-bottom: 10px;
`

const InfoAluno = styled.p`
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
`

const ImagemAluno = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

const PerfilExAlunos = () => {
  const exAlunos = [
    {
      nome: 'Caike Silva',
      imagem: '/imagem/caike.jpeg',
      dataIngresso: '2018',
      dataSaida: '2021',
      empregoAtual: 'Desenvolvedor Back-end'
    },
    {
      nome: 'Cristian Paulo',
      imagem: '/imagem/cristian.jpeg',
      dataIngresso: '2018',
      dataSaida: '2021',
      empregoAtual: 'Analista de Sistemas'
    },
    {
      nome: 'Oberis Nascimento',
      imagem: '/imagem/oberis.jpeg',
      dataIngresso: '2018',
      dataSaida: '2021',
      empregoAtual: 'Analista de Sistemas'
    },
    {
      nome: 'Maria',
      imagem: '/imagem/edson.jpg',
      dataIngresso: '2018',
      dataSaida: '2022',
      empregoAtual: 'Analista de Sistemas'
    },
    {
      nome: 'Fred',
      imagem: '/imagem/edson.jpg',
      dataIngresso: '2018',
      dataSaida: '2022',
      empregoAtual: 'Analista de Sistemas'
    },
    {
      nome: 'Lusca',
      imagem: '/imagem/edson.jpg',
      dataIngresso: '2018',
      dataSaida: '2022',
      empregoAtual: 'Analista de Sistemas'
    }
  ]

  return (
    <>
      <Header />
      <Container>
        {exAlunos.map((aluno, index) => (
          <Card key={index}>
            <ImagemAluno src={aluno.imagem} alt={aluno.nome} />
            <NomeAluno>{aluno.nome}</NomeAluno>
            <InfoAluno>
              Data de Ingresso: {aluno.dataIngresso} - Saída: {aluno.dataSaida}
            </InfoAluno>
            <InfoAluno>Emprego Atual: {aluno.empregoAtual}</InfoAluno>
          </Card>
        ))}
      </Container>
      <Footer />
    </>
  )
}

export default PerfilExAlunos
