'use client'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #0074b8;
  padding: 30px;

  a {
    color: #fff;
    text-decoration: none;
  }
`

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <a href="/">ADS</a>
      </HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
