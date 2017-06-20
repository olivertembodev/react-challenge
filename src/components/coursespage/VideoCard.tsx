import React from "react"
import styled from "styled-components"
import Thumbnail from "../../images/icons/ThumbnailIcon.png"

const VideoCard = () => {
  return (
    <div>
      <Wrapper>
        <Video>
          <img src={Thumbnail} alt="" />
        </Video>
        <Description>
          <VideoTitle>Michael</VideoTitle>
          <VideoDescription>typescript</VideoDescription>
        </Description>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  height: 100%;
  max-height: 210px;
  width: 263px;
  max-width: 263;
  background: #ffffff;
  /* SHADOW */
  box-shadow: 0px 14px 30px 10px rgba(206, 229, 255, 0.25);
  border-radius: 5px;

  &.fade-appear {
    opacity: 0.01;
  }

  &.fade-appear-active {
    opacity: 1;
    transition: opacity 600ms ease-in-out;
  }
`

const Video = styled.div`
  background: #828282;
  border-radius: 5px;
  margin-top: 10px;
`

const VideoTitle = styled.div`
  font-weight: bold;
  font-size: 12px;
`

const VideoDescription = styled.div`
  font-weight: normal;
  font-size: 10px;
`
const Description = styled.div`
  padding: 16px;
`

export default VideoCard
