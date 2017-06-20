import React from "react";
import styled from "styled-components";
import AnnouncementCard from "./AnnouncementCard";

const Announcement = () => {
  return (
    <Wrapper>
      <Title>Announcements</Title>
      <AnnouncementCard />
      <AnnouncementCard />
      <AnnouncementCard />
      <AnnouncementCard />
      <AnnouncementCard />
      <AnnouncementCard />
      <AnnouncementCard />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 35px;
  margin-bottom: 30px;
  /* background: #ffffff; */
  /* SHADOW */
  box-shadow: 0px 14px 30px 10px rgba(206, 229, 255, 0.25);
  border-radius: 5px;
  width: 100%;
  max-height: calc(65vh - 55px - 30px);
  overflow-y: scroll;
  z-index: 19;
`;

const Title = styled.div`
  color: #333333;
  font-weight: 800;
  font-size: 38px;
`;

export default Announcement;
