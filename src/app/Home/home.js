'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '@/components/header'
import CorpoCard from '@/components/corpo_card'
import styled from 'styled-components'
import QuestionarioCard from '@/components/questionario_card'
import CardPerfilExAlunos from '@/components/ex_alunos'
import Representante from '@/components/representante'
import Footer from '@/components/footer'

const apiKey = 'e0d4a5f0aac14daab998748901da5f0a'
const apiUrl =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey

const NewsContainer = styled.div`
  display: flex;
`

const Sidebar = styled.div`
  width: 80%;
  background-color: #f0f0f0;
  padding: 20px;
`

const MainContent = styled.div`
  width: 30%;
  padding: 20px;
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #0074b8;
  display: block;
  margin-bottom: 10px;
`

function NewsPage() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(response => {
        setNews(response.data.articles)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching news:', error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Header />
      <NewsContainer>
        <Sidebar>
          <h2>Notícias Internas</h2>
          <CorpoCard />
          <Representante />
          <QuestionarioCard />
          <CardPerfilExAlunos />
        </Sidebar>
        <MainContent>
          <h1>Notícias Externas</h1>
          {news.map((article, index) => (
            <StyledLink
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {article.title}
            </StyledLink>
          ))}
        </MainContent>
      </NewsContainer>
      <Footer />
    </>
  )
}

export default NewsPage
