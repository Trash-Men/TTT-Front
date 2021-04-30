import { NextPage } from "next";
import React, { memo } from "react";

interface Props {}

const Statistics: NextPage<Props> = ({}) => {
  return (
    <div>
      <h1>Statistics</h1>
      <div id="chartTrash" />
      <div id="chartTrashCan" />
    </div>
  );
};

export default memo(Statistics);
