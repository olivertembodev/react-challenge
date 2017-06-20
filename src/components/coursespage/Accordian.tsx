import React, { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import styled from "styled-components"
import {ReactComponent as AddIcon} from "../../images/icons/AddIcon.svg"
import { ReactComponent as ExpandIcon } from "../../images/icons/ExpandIcon.svg"
import AddCard from "./AddCard"
import HomeWorkCard from "./HomeWorkCard"
import VideoCard from "./VideoCard"
import { ReactComponent as ClearIcon } from "../../images/icons/ClearIcon.svg"
import { ReactComponent as DoneIcon } from "../../images/icons/DoneIcon.svg"
import { ReactComponent as CreateIcon } from "../../images/icons/CreateIcon.svg"
import { CSSTransitionGroup } from "react-transition-group"

const Accordian = () => {
  function onSetRotate() {
    if (rotate) {
      setRotate(false)
    } else {
      setRotate(true)
    }
  }
  const [user, setUser] = useState("instructor")
  const [open, setOpen] = useState(false)
  const [checker, setChecker] = useState(false)

  const [rotate, setRotate] = useState(false)
  return (
    <Wrapper>
      <Title>
        Course Materials{" "}
        {user === "instructor" ? (
          <Add onClick={() => setOpen(!open)}>
            <AddIconWrapper>
              <AddIcon />
            </AddIconWrapper>{" "}
            Add
          </Add>
        ) : (
          <> </>
        )}
      </Title>
      {open ? (
        <CSSTransitionGroup
          transitionName="fade"
          transitionAppear={open}
          transitionEnter={true}
          transitionLeave={open}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}
        >
          <CardWrapper>
            <AddCard isOpen={open}>
              <IconBar>
                <DoneIconWrapper onClick={() => setOpen(false)}>
                  <DoneIcon />
                </DoneIconWrapper>
                <ClearIconWrapper onClick={() => setOpen(false)}>
                  <ClearIcon />
                </ClearIconWrapper>
              </IconBar>
            </AddCard>
          </CardWrapper>
        </CSSTransitionGroup>
      ) : (
        <AccordionMain allowMultipleExpanded allowZeroExpanded>
          <AccordionItem
            onClick={() => {
              setChecker(!checker)
            }}
          >
            <AccordionHeading>
              <AccordionButton>
                Week 1 (8/3 to 8/7){" "}
                <IconWrapper rotate={rotate} onClick={onSetRotate}>
                  {user === "instructor" ? (
                    <>
                      <CreateIcon />
                      <ExpandIcon />
                    </>
                  ) : (
                    <ExpandIcon />
                  )}
                </IconWrapper>
              </AccordionButton>
            </AccordionHeading>
            <AccordionPanel checker={checker}>
              <VideoWrapper>
                <TitleMain>Videos</TitleMain>

                <VideoWrapperCard>
                  <VideoCard />
                  <VideoCard />
                  <VideoCard />
                </VideoWrapperCard>
              </VideoWrapper>
              <HomeWrapper>
                <TitleMain>Homework</TitleMain>
                <HomeWorkCard />
              </HomeWrapper>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeading>
              <AccordionButton>
                Week 2 (8/10 to 8/14)
                <IconWrapper rotate={rotate} onClick={onSetRotate}>
                  <ExpandIcon />
                </IconWrapper>
              </AccordionButton>
            </AccordionHeading>
            <AccordionPanel checker={checker}>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionPanel>
          </AccordionItem>
          {/* <AccordionItem>
            <AccordionHeading>
              <AccordionButton>
                Week 2 (8/10 to 8/14)
                <IconWrapper rotate={rotate} onClick={onSetRotate}>
                  <ExpandIcon />
                </IconWrapper>
              </AccordionButton>
            </AccordionHeading>
            <AccordionPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeading>
              <AccordionButton>
                Week 2 (8/10 to 8/14)
                <IconWrapper rotate={rotate} onClick={onSetRotate}>
                  <ExpandIcon />
                </IconWrapper>
              </AccordionButton>
            </AccordionHeading>
            <AccordionPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionPanel>
          </AccordionItem> */}
        </AccordionMain>
      )}
    </Wrapper>
  )
}

interface RotatePropsTypes {
  rotate: Boolean
}

interface AniPropTypes {
  checker: Boolean
}

const CardWrapper = styled.div`
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); */
  margin-right: 10px;
  margin-left: 10px;
  &.fade-appear {
    opacity: 0.01;
  }

  &.fade-appear-active {
    opacity: 1;
    transition: opacity 600ms ease-in-out;
  }
`

const AccordionMain = styled(Accordion)`
  padding-right: 5%;
  animation: fadein 0.65s ease-in;

  @keyframes fadein {
    0% {
      opacity: 0.01;
    }

    100% {
      opacity: 1;
    }
  }
`

const Title = styled.div`
  font-weight: 800;
  font-size: 35px;
  color: #000000;
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
`

const Wrapper = styled.div`
  /* margin-left: 30px; */
  overflow-y: scroll;
  margin-bottom: 30px;
`

const AccordionHeading = styled(AccordionItemHeading)`
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 15px;
  font-weight: normal;
  font-size: 18px;
  cursor:pointer;
`

const AccordionPanel = styled(AccordionItemPanel)<AniPropTypes>`
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 15px;
  padding-bottom: 15px;
  padding: 20px;
  @keyframes FadeInner {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }
    100% {
      /* -webkit-transition: height 1s ease-in-out;
      -moz-transition: height 1s ease-in-out;
      -ms-transition: height 1s ease-in-out;
      -o-transition: height 1s ease-in-out;
      transition: height 1s ease-in-out; */
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @keyframes FadeOuter {
    0% {
      opacity: 0;
      transform: translateY(0px);
    }
    100% {
      /* -webkit-transition: height 1s ease-in-out;
      -moz-transition: height 1s ease-in-out;
      -ms-transition: height 1s ease-in-out;
      -o-transition: height 1s ease-in-out;
      transition: height 1s ease-in-out; */
      opacity: 1;
      transform: translateY(-40px);
    }
  }
  animation: ${(props) =>
    props.checker ? "FadeInner 0.2s ease-in;" : "FadeOuter 0.2s ease-in"};
`
const AccordionButton = styled(AccordionItemButton)`
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 1000ms;
`

const IconWrapper = styled.div<RotatePropsTypes>`
  /* transform: ${(props) => (props.rotate ? `rotate(180deg)` : "")};  */
  /* padding-right: 5%; */
  margin-top: 5px;
`
const VideoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 30px;
  flex-direction: column;
  margin-bottom: 20px;

  /* box-shadow: 0px 9px 14px -5px rgba(0, 0, 0, 0.25); */
`

const IconBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25px;
  align-content: space-between;
`

const DoneIconWrapper = styled.div`
  margin-right: 20px;
  cursor: pointer;
`
const ClearIconWrapper = styled.div`
  cursor: pointer;
`

const Add = styled.button`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #929292;
  text-decoration: none;
  background: white;
  border: none;
  cursor: pointer;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
`

const AddIconWrapper = styled.div`
  margin-right: 12px;
`

const VideoWrapperCard = styled.div`
  display: flex;
  justify-content: space-between;
`

const TitleMain = styled.div`
  font-weight: 800;
  font-size: 35px;
  color: #000000;
`

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Accordian
