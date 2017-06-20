import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { ReactComponent as BookmarkIcon } from "../../images/icons/BookMarkIcon.svg"
import { ReactComponent as DocumentIcon } from "../../images/icons/DocumentIcon.svg"
import { ReactComponent as GoogleDriveIcon } from "../../images/icons/GoogleDrive.svg"
import { ReactComponent as OpenedFolderIcon } from "../../images/icons/OpenedFolderIcon.svg"
import { ReactComponent as PicturesIcon } from "../../images/icons/PicturesIcon.svg"
import Card from "./Card"

const Courses = () => {
  const history = useHistory()
  // const { error, isLoading, data } = useQuery("key", () =>
  //   Axios.get("/todos/").then((res) => res.data)
  // )

  useEffect(() => {
    let params = new URLSearchParams(history.location.search)
    console.log(
      "LOCATION : ",
      history.location.search,
      params,
      params.get("week")
    )
  }, [history.location.search])
  return (
    <>
      {/* {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>} */}
      <Title>Introduction to Python</Title>
      <Wrapper>
        <CardWrapper>
          <Card IconImage={<GoogleDriveIcon />} title="Google Drive" />
          <Card IconImage={<DocumentIcon />} title="Documents" />
          <Card IconImage={<PicturesIcon />} title="Pictures" />
          <Card IconImage={<OpenedFolderIcon />} title="Class Folder" />
          <Card IconImage={<BookmarkIcon />} title="Bookmarks" />
        </CardWrapper>
        
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  font-size: 50px;
  /* padding-left: 30px; */
  padding-top: 16px;
  /* padding-right: 30px; */
  width: 100%;
  max-width: 1150px;
  z-index: 10;
  /* background: red; */
`

const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
  border-bottom: 1px solid black;
  padding-left: 30px;
  /* width: 100%; */
  /* margin-left: -30px; */
  padding-right: 30px;
  padding-bottom: 8px;
  /* margin-right: -30px; */
  margin-left: -40px;
  margin-top: -14px;
  margin-right: -40px;
`

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 100%;
  max-height: 200px;
  width: 100%;
  max-width: 66rem; */
  /* background: black; */
  padding: 20px 40px;
  /* margin-right: 30px; */
  box-shadow: 0px 14px 30px 10px rgba(206, 229, 255, 0.25);
  border-radius: 5px;
`


export default Courses
