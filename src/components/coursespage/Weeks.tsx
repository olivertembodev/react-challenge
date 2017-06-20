import React, { ReactNode, useEffect, useState } from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom"

const weeks = ["1", "2", "3", "4", "5", "6", "7", "8"]

const Weeks = () => {
  const history = useHistory()
  const [currentWeek, setcurrentWeek] = useState<string>(
    new URLSearchParams(history.location.search).get("week") || "1"
  )

  useEffect(() => {
    let params = new URLSearchParams(history.location.search)

    if (params.get("week") !== undefined) {
      history.push("/coursespage" + `?week=${currentWeek}`)
    } else {
    }
    console.log("HALOOOOO")
  }, [currentWeek])

  return (
    <Wrapper>
      {weeks.map((weekId) => (
        <WeekWrapper>
          <Week
            className={weekId === currentWeek ? "active" : ""}
            onClick={() => setcurrentWeek(weekId)}
          >
            Week {weekId}
          </Week>
        </WeekWrapper>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
`
const WeekWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* background: red; */
  padding: 24px;
`

const Week = styled.div<WeekProps>`
  font-weight: normal;
  font-size: 20px;
  text-decoration: none;
  color: #bdbdbd;
  position: relative;
  cursor: pointer;
  transition: all 150ms;

  &.active {
    color: black;
    &::after {
      content: "";
      height: 3px;
      background-color: #516de8;
      width: 40px;
      position: absolute;
      bottom: -5px;
      left: 50%;
      margin-left: -20px;
    }
  }
`

interface WeekProps {
  children: ReactNode
  className: string
}

export default Weeks
