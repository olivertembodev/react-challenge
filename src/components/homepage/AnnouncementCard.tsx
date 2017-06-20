import React from "react"
import styled from "styled-components"
import Skeleton from "react-loading-skeleton"
import { ReactComponent as AnnouncementIcon } from "../../images/icons/AnnouncementIcon.svg"

const AnnouncementCard = () => {
  return (
    <Container>
      <Content>
        <Icon>
          <AnnouncementIcon />
        </Icon>
        <TextWrapper>
          <TextHeading>
            {"Summer camp starts today!" || <Skeleton count={1} />}
          </TextHeading>
          <Text>
            Insert event description or full announcement Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
        </TextWrapper>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  /* padding: 35px;
  margin: 55px;
  background: #ffffff;
  /* SHADOW */
  /* box-shadow: 0px 14px 30px 10px rgba(206, 229, 255, 0.25);
  border-radius: 5px;
  width: 678px;
  height: 100%;
  max-height: calc(100vh - 110px);
  overflow-y: scroll;  */
`

const Content = styled.div`
  display: flex;
  margin-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
`
const Icon = styled.div``
const TextHeading = styled.div`
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 12px;
  cursor:pointer;

  /* dark blue */

  color: #283eae;
`
const Text = styled.div`
  font-weight: normal;
  font-size: 10px;
  color: black;
`

const TextWrapper = styled.div`
  margin-left: 25px;
`

export default AnnouncementCard
