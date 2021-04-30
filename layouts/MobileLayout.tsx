import React, { FC } from "react";

import styled from "@emotion/styled";
import NavigationBar from "@components/navigationBar";

interface Props {}

const MobileLayout: FC<Props> = ({ children }) => {
  return (
    <MobileLayoutWrap>
      <ContainerWrap>{children}</ContainerWrap>
      <NavigationBar />
    </MobileLayoutWrap>
  );
};

const MobileLayoutWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ContainerWrap = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
`;

export default MobileLayout;
