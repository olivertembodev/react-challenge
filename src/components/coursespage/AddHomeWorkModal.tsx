import React from "react"
import Modal from "react-modal"
import styled from "styled-components"
import { ReactComponent as DeleteIcon } from "../../images/icons/DeleteIcon.svg"
import { ReactComponent as DoneIconNew } from "../../images/icons/DoneIcon.svg"

const AddHomeWorkModal = ({ open, handleClose }: Props) => {
  return (
    <Modal
      isOpen={open}
      // onAfterOpen={afterOpenModal}
      onRequestClose={handleClose}
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
          height: 778,
          overflow: "hidden",
          padding: "0px",
          display: "flex",
        },
        overlay: { background: "rgba(50, 50, 50, 0.5)" },
      }}
    >
      <ModalWrapper>
        <IconWrapper>
          <DeleteIconWrapper>
            <DeleteIcon />
          </DeleteIconWrapper>
          <DoneIconWrapper>
            <DoneIconNew />
          </DoneIconWrapper>
        </IconWrapper>
        <TitleWrapper>
          <TitleInput placeholder="Enter Title" />
        </TitleWrapper>
        <DescriptionWrapper>Hi</DescriptionWrapper>
      </ModalWrapper>
    </Modal>
  )
}

interface Props {
  open: boolean
  handleClose: any
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`
const IconWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
`
const DeleteIconWrapper = styled.div`
  margin-right: 20px;
`
const DoneIconWrapper = styled.div``

const TitleWrapper = styled.div`
  margin-top: 20px;
`

const TitleInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  font-weight: 600;
  font-size: 18px;
  width: 90px;
  /* identical to box height */

  /* Gray 4 */

  color: #bdbdbd;
`

const DescriptionWrapper = styled.div`
  width: 100%;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 30px;
  height: 100%;
  padding: 20px;
`

export default AddHomeWorkModal
