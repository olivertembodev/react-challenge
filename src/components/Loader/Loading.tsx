import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

interface LoadingProps {
  height?: number;
  color?: string;
}

function Loading({ color = "#283eae", height = 100 }: LoadingProps) {
  return (
    <Wrapper>
      <Loader type="Oval" color={color} height={height} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`;

export default Loading;
