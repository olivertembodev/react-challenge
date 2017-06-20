import React, { ReactNode } from "react"
import styled from "styled-components"

interface PropType {
  children: ReactNode
}

const BackgroundContainer = ({ children }: PropType) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  background-image: linear-gradient(109.45deg, #516de8 22.37%, #283eae 68.61%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default BackgroundContainer
