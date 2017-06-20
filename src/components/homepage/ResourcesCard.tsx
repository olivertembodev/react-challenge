import React from "react";
import styled from "styled-components";

const ResourcesCard = () => {
  return (
    <Wrapper>
      <Title>Resources</Title>
      <References>
        <ReferencesItem>Attendance sheet</ReferencesItem>
        <ReferencesItem>Teaching guidelines</ReferencesItem>
      </References>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: 0px 14px 30px 10px rgba(206, 229, 255, 0.25);
  border-radius: 5px;
  padding: 20px;
  margin-top: auto;
  height: calc(35vh - 55px);
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 28px;
  color: #333333;
`;

const References = styled.div`
  margin-top: 20px;
`;

const ReferencesItem = styled.div`
  margin-bottom: 10px;
  font-weight: normal;
  font-size: 12px;
  text-decoration-line: underline;
  cursor:pointer;
`;

export default ResourcesCard;
