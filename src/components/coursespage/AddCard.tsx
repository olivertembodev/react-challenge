import React, { ReactNode, useState } from "react"
import styled from "styled-components"
import { ReactComponent as AddCircleIcon } from "../../images/icons/AddCircleIcon.svg"
// import { Modal } from "react-responsive-modal"
import Modal from "react-modal"
import { ReactComponent as UploadIcon } from "../../images/icons/UploadIcon.svg"
import { ReactComponent as CloudIcon } from "../../images/icons/CloudIcon.svg"
import { ReactComponent as RightBorderIcon } from "../../images/icons/RightBorderIcon.svg"
import AddHomeWorkModal from "./AddHomeWorkModal"

const AddCard = ({ isOpen, children }: Props) => {
  const [drivemodalOpen, setdriveModalOpen] = useState(false)
  const [homeworkmodalOpen, sethomeworkModalOpen] = useState(false)
  return isOpen ? (
    <Wrapper>
      {/* <IconBar>
          <DoneIconWrapper>
            <DoneIcon />
          </DoneIconWrapper>
          <ClearIconWrapper onClick={() => setChecker(!checker)}>
            <ClearIcon />
          </ClearIconWrapper>
        </IconBar> */}
      {children}
      <ContentWrapper>
        <ContentItems>
          <Week>
            Weeks <WeekInput placeholder="##" />
          </Week>
          <Topics>
            Topics <TopicInput placeholder="Enter this week’s topic" />
          </Topics>
          <Materials>
            <Title>UPLOAD MATERIALS</Title>
            <MaterialContent>
              <CircleIcon onClick={() => setdriveModalOpen(true)}>
                <AddCircleIcon />
              </CircleIcon>
              <MaterialTitle>Videos</MaterialTitle>
              <>
                {" "}
                <Modal
                  isOpen={drivemodalOpen}
                  // onAfterOpen={afterOpenModal}
                  onRequestClose={() => setdriveModalOpen(false)}
                  // style={customStyles}
                  contentLabel="Example Modal"
                  style={{
                    content: {
                      top: "50%",
                      left: "50%",
                      right: "auto",
                      bottom: "auto",
                      marginRight: "-300px",
                      transform: "translate(-50%, -50%)",
                      width: 600,
                      height: 90,
                      overflow: "hidden",
                      padding: "0px",
                      display: "flex",
                      paddingLeft: "60px",
                      paddingRight: "60px",
                    },
                    overlay: { background: "rgba(50, 50, 50, 0.5)" },
                  }}
                >
                  <ModalIconWrapper>
                    <UploadIconWrapper>
                      <UploadIcon />
                      <TextWrapperUpload>Upload</TextWrapperUpload>
                    </UploadIconWrapper>
                    <BorderWrapper>
                      <RightBorderIcon />
                    </BorderWrapper>
                    <CloudIconWrapper>
                      <CloudIcon />
                      <TextWrapperCloud>Cloud</TextWrapperCloud>
                    </CloudIconWrapper>
                  </ModalIconWrapper>
                </Modal>
              </>
            </MaterialContent>
            <MaterialContent>
              <CircleIcon
                onClick={() => {
                  sethomeworkModalOpen(true)
                  console.log(homeworkmodalOpen)
                }}
              >
                <AddCircleIcon />
              </CircleIcon>
              <MaterialTitle>Homework</MaterialTitle>
              <AddHomeWorkModal
                open={homeworkmodalOpen}
                handleClose={() => sethomeworkModalOpen(false)}
              />
            </MaterialContent>
            <MaterialContent>
              <CircleIcon>
                <AddCircleIcon />
              </CircleIcon>
              <MaterialTitle>Resources</MaterialTitle>
            </MaterialContent>
          </Materials>
        </ContentItems>
        <ContentItemsCalender>
          <FormWrapper>
            <FromItem>
              From <FormInput placeholder="21 Oct 2019" />
            </FromItem>
            <ToItem>
              To <FormInput placeholder="21 Oct 2019" />
            </ToItem>
          </FormWrapper>
          <CalenderWrapper>
            <Calender>Calender here</Calender>
          </CalenderWrapper>
        </ContentItemsCalender>
      </ContentWrapper>
    </Wrapper>
  ) : (
    <div></div>
  )
}

interface Props {
  isOpen?: boolean
  children?: ReactNode
}

const Wrapper = styled.div`
  /* overflow-y: scroll; */
  /* margin-right: 30px; */
  background: white;

  padding: 30px;
  margin-bottom: 30px;
  /* margin-top: -30px; */
  /* margin-left: 30px; */
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
`

const ContentWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); */
`

const ContentItems = styled.div`
  font-weight: normal;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`

const Week = styled.div`
  font-weight: 600;
  font-size: 20px;
`

const ContentItemsCalender = styled.div`
  /* margin-left: 350px; */
  display: flex;
  flex-direction: column;
`

const FormWrapper = styled.div`
  display: flex;
`

const FromItem = styled.div`
  /* margin-right: 150px; */
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 15px;
  margin-right: 70px;
`
const ToItem = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 15px;
  margin-right: 70px;
`

const WeekInput = styled.input`
  /* margin-left: 15px; */
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  width: 22px;
  height: 25px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  color: #bdbdbd;
`
const FormInput = styled.input`
  width: 100px;
  height: 25px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  color: #bdbdbd;
  font-weight: normal;
  font-size: 15px;
  outline: none;
`

const Topics = styled.div`
  margin-top: 15px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
`

const TopicInput = styled.input`
  font-weight: bold;
  font-size: 18px;
  width: 188px;
  height: 25px;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  color: #bdbdbd;
  margin-left: 15px;
  outline: none;
`

const Calender = styled.div``

const CalenderWrapper = styled.div`
  margin-top: 25px;
`

const Materials = styled.div`
  margin-top: 50px;
`
const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #516de8;
`

const MaterialContent = styled.div`
  margin-top: 16px;
  display: flex;
`

const CircleIcon = styled.button`
  background: white;
  border: none;
  cursor: pointer;
  margin-right: 20px;
`

const MaterialTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  /* margin-left: 20px; */
`

const ModalIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

const UploadIconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const CloudIconWrapper = styled.div`
  display: flex;
  align-items: center;
`

const TextWrapperCloud = styled.div`
  font-weight: 600;
  font-size: 30px;

  /* identical to box height */

  /* Gray 3 */
  margin-left: 50px;

  color: #828282;
`

const TextWrapperUpload = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin-left: 50px;

  /* identical to box height */

  /* Gray 3 */

  color: #828282;
`
const BorderWrapper = styled.div``
// const ModalWrapper = styled(Modal)`
//   height: 95px;
//   width: 600px;
//   background: #ffffff;
//   border-radius: 5px;
//   margin: auto;
//   margin-top: 50%;
//   outline: none;
// `

export default AddCard
