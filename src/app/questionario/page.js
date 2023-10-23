'use client'
import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '@/components/header'
import Footer from '@/components/footer'

const FormContainer = styled.div`
  background-color: #f0f0f0;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 10px;
  margin-bottom: 450px;
`

const SectionTitle = styled.h2`
  color: #0074b8;
  font-size: 24px;
  margin-bottom: 10px;
`

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`

const RadioInput = styled.input`
  margin-right: 10px;
`

const CommentInput = styled.textarea`
  width: 50%;
  padding: 10px;
  margin-top: 10px;
`

const SubmitButton = styled.button`
  background-color: #0074b8;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
  margin-left: 750px;
`

const SuccessMessage = styled.p`
  color: #009900;
  font-weight: bold;
`

function FormularioAvaliacaoCurso() {
  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    curso: '',
    periodo: '',
    email: '',
    expectativasCurriculares: '3',
    relevanciaCurricular: '3',
    equilibrioCurricular: '3',
    oportunidadesEstagio: '3',
    professoresQualificados: '3',
    ensinoClaro: '3',
    professoresComprometidos: '3',
    professoresDisponiveis: '3',
    infraestruturaAdequada: '3',
    salasConfortaveis: '3',
    laboratorioModerno: '3',
    bibliotecaAtualizada: '3',
    comentarios: ''
  })

  const [enviado, setEnviado] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <>
      <Header />
      <FormContainer>
        {enviado ? (
          <SuccessMessage>Obrigado pela sua participação!</SuccessMessage>
        ) : (
          <form onSubmit={handleSubmit}>
            <SectionTitle>Formulário de Avaliação do Curso de ADS</SectionTitle>

            <Label>Informações do estudante:</Label>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="matricula"
              placeholder="Matrícula"
              value={formData.matricula}
              onChange={handleChange}
            />
            <input
              type="text"
              name="curso"
              placeholder="Curso"
              value={formData.curso}
              onChange={handleChange}
            />
            <input
              type="text"
              name="periodo"
              placeholder="Período"
              value={formData.periodo}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />

            <Label>Avaliação da grade curricular:</Label>
            <div>
              <p>A grade curricular atende às suas expectativas?</p>
              <RadioInput
                type="radio"
                name="expectativasCurriculares"
                value="1"
                onChange={handleChange}
                checked={formData.expectativasCurriculares === '1'}
              />
              1
              <RadioInput
                type="radio"
                name="expectativasCurriculares"
                value="2"
                onChange={handleChange}
                checked={formData.expectativasCurriculares === '2'}
              />
              2
              <RadioInput
                type="radio"
                name="expectativasCurriculares"
                value="3"
                onChange={handleChange}
                checked={formData.expectativasCurriculares === '3'}
              />
              3
              <RadioInput
                type="radio"
                name="expectativasCurriculares"
                value="4"
                onChange={handleChange}
                checked={formData.expectativasCurriculares === '4'}
              />
              4
              <RadioInput
                type="radio"
                name="expectativasCurriculares"
                value="5"
                onChange={handleChange}
                checked={formData.expectativasCurriculares === '5'}
              />
              5
            </div>

            <div>
              <p>
                Os conteúdos da grade curricular são relevantes para a sua
                formação?
              </p>
              <RadioInput
                type="radio"
                name="relevanciaCurricular"
                value="1"
                onChange={handleChange}
                checked={formData.relevanciaCurricular === '1'}
              />
              1
              <RadioInput
                type="radio"
                name="relevanciaCurricular"
                value="2"
                onChange={handleChange}
                checked={formData.relevanciaCurricular === '2'}
              />
              2
              <RadioInput
                type="radio"
                name="relevanciaCurricular"
                value="3"
                onChange={handleChange}
                checked={formData.relevanciaCurricular === '3'}
              />
              3
              <RadioInput
                type="radio"
                name="relevanciaCurricular"
                value="4"
                onChange={handleChange}
                checked={formData.relevanciaCurricular === '4'}
              />
              4
              <RadioInput
                type="radio"
                name="relevanciaCurricular"
                value="5"
                onChange={handleChange}
                checked={formData.relevanciaCurricular === '5'}
              />
              5
            </div>

            <Label>Comentários e sugestões:</Label>
            <CommentInput
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
            />

            <SubmitButton type="submit">Enviar Avaliação</SubmitButton>
          </form>
        )}
      </FormContainer>
      <Footer />
    </>
  )
}

export default FormularioAvaliacaoCurso
