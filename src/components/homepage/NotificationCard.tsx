import React from "react";
import styled from "styled-components";

const NotificationCard = () => {
  return (
    <Wrapper>
      <Title>Notifications</Title>
      <NotificationItem unread>
        First notification
        <TimeAgo>8 hours ago</TimeAgo>
      </NotificationItem>
      <NotificationItem>
        First notification
        <TimeAgo>8 hours ago</TimeAgo>
      </NotificationItem>
      <NotificationItem unread>
        First notification
        <TimeAgo>8 hours ago</TimeAgo>
      </NotificationItem>
      <NotificationItem>
        First notification
        <TimeAgo>8 hours ago</TimeAgo>
      </NotificationItem>
    </Wrapper>
  );
};

interface NotifictionItemProps {
  unread?: Boolean;
}

const Wrapper = styled.div`
  padding: 0px;
  margin: 0px;
  width: 100%;
  /* background: #ffffff; */
  /* SHADOW */
  box-shadow: 0px 14px 30px 10px rgba(206, 229, 255, 0.25);
  border-radius: 5px;

  max-height: calc(35vh - 55px);
  overflow-y: scroll;
  z-index: 20;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: #333333;
  padding: 26px 26px 20px 26px;
`;

const NotificationItem = styled.div<NotifictionItemProps>`
  font-weight: normal;
  font-size: 12px;
  padding: 10px 26px;
  background: ${(props) => (props.unread ? "#A3C2FF2F" : "#fff")};
  position: relative;
  cursor:pointer;

  &::after {
    content: "";
    display: ${(props) => (props.unread ? "block" : "none")};
    position: absolute;
    background: #fd3e3e;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    right: 20px;
    top: 50%;
    margin-top: -4px;
  }
`;

const TimeAgo = styled.div`
  font-weight: normal;
  font-size: 8px;
`;

export default NotificationCard;
