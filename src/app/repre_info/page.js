'use client'
import React from 'react'
import styled from 'styled-components'
import Header from '@/components/header'
import Footer from '@/components/footer'
const CardContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 300px;
`

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-bottom: 10px;
`

const NomeEstudante = styled.h2`
  color: #0074b8;
  font-size: 20px;
  margin-bottom: 10px;
`

const TurmaEstudante = styled.p`
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
`

const QualidadesEstudante = styled.p`
  color: #333;
  font-size: 14px;
`

function PaginaRepresentante() {
  return (
    <>
      <Header />
      <CardContainer>
        <ProfileImage src="/imagem/sabrina.jpeg" alt="Foto da representante" />
        <NomeEstudante>Sabrina Victoria</NomeEstudante>
        <TurmaEstudante>Turma: Módulo IV</TurmaEstudante>
        <QualidadesEstudante>
          Qualidades como representante: Excelente comunicação, comprometimento
          com os alunos, solucionadora de problemas.
        </QualidadesEstudante>
      </CardContainer>
      <Footer />
    </>
  )
}

export default PaginaRepresentante
