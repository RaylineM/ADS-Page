"use client";
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color:#0074b8;
  color: #fff;
  padding: 30px;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>ADS</HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;
