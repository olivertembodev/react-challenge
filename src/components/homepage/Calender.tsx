import React, { useState } from "react";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import styled from "styled-components";

const Calender = () => {
  const [value, setValue] = useState<DayValue>(null);
  function onChange(nextValue: any) {
    setValue(nextValue);
  }

  return (
    <Wrapper>
      <Calendar
        calendarClassName="custom-calender"
        colorPrimary="#516de8"
        value={value}
        onChange={onChange}
        customDaysClassName={[
          { year: 2020, month: 10, day: 12, className: "active-day" },
          { year: 2020, month: 10, day: 25, className: "active-day" },
          { year: 2020, month: 10, day: 29, className: "active-day-important" },
        ]}
      />
      <DueWorkList>
        <DueWorkItem>
          <DueWorkDate>10/12</DueWorkDate>
          <DueWorkTitle>Homework Due</DueWorkTitle>
        </DueWorkItem>
        <DueWorkItem>
          <DueWorkDate>10/25</DueWorkDate>
          <DueWorkTitle>Videos Discussion</DueWorkTitle>
        </DueWorkItem>
        <DueWorkItem>
          <DueWorkDate important>10/29</DueWorkDate>
          <DueWorkTitle>Final Assignment</DueWorkTitle>
        </DueWorkItem>
      </DueWorkList>
    </Wrapper>
  );
};

interface DueWorkDateProps {
  important?: Boolean;
}

const Wrapper = styled.div`
  flex: 2;
`;

const DueWorkList = styled.div`
  width: 100%;
  padding: 0 20px;

  & > :not(:last-child) {
    border-bottom: 2px solid #ddd;
  }
`;

const DueWorkItem = styled.div`
  display: flex;
  align-items: baseline;
  padding: 10px;
  cursor:pointer;
`;

const DueWorkDate = styled.span<DueWorkDateProps>`
  font-size: 14px;
  color: ${(props) => (props.important ? "#fd3e3edd" : "#516de8")};
`;

const DueWorkTitle = styled.h5`
  font-size: 12px;
  margin-left: 18px;
`;

export default Calender;
