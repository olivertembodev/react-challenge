import React from "react";
import SideNavigation from "../components/shared/SideNavigation";
import styled from "styled-components";
import Announcement from "../components/homepage/Announcement";
import NotificationCard from "../components/homepage/NotificationCard";
import ResourcesCard from "../components/homepage/ResourcesCard";
import Calender from "../components/homepage/Calender";

const HomePage = () => {
  // const testRequest = () => {
  //   api
  //     .get("/logout")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <Container>
      <SideNavigation />
      <RightContainer>
        <LeftColumn>
          {/* <button onClick={testRequest}>Hello</button> */}
          <Announcement />
          <NotificationCard />
        </LeftColumn>
        <RightColumn>
          <Calender />
          <ResourcesCard />
        </RightColumn>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  /* background: #e5e5e5; */
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

const RightColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 55px;
`;

export default HomePage;
