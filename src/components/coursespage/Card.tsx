import React, { ReactNode } from "react"
import styled from "styled-components"

interface CardPropTypes {
  IconImage: ReactNode
  title: string
}

const Card = ({ IconImage, title }: CardPropTypes) => {
  return (
    <Wrapper>
      <Icon>{IconImage}</Icon>
      <Title>{title}</Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;

  background: #eefcff;
  /* SHADOW */
  /* box-shadow: 0px 14px 30px 10px rgba(206, 229, 255, 0.25); */
  border-radius: 5px;
`

const Icon = styled.div``

const Title = styled.div`
  font-weight: bold;
  font-size: 15px;
`

export default Card
