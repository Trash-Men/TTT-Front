import { ResTrash } from "@utils/payloads/response";
import { NextPage } from "next";
import React, { memo } from "react";

import * as S from "./style";

interface Props {
  trashes: ResTrash[];
  trashCans: ResTrash[];
}

const Statistics: NextPage<Props> = ({ trashes, trashCans }) => {
  return (
    <S.StatisticsWrap>
      <div>
        <div className="chart-wraps">
          <p>전체 쓰레기 갯수</p>
          <h1>{trashes.length}개</h1>
        </div>
        <div className="chart-wraps">
          <div id="bar-trash" />
          <div id="line-trash" />
        </div>
      </div>
      <div>
        <div className="chart-wraps">
          <p>전체 쓰레기통 갯수</p>
          <h1>{trashCans.length}개</h1>
        </div>
        <div className="chart-wraps">
          <div id="bar-trashCan" />
          <div id="line-trashCan" />
        </div>
      </div>
    </S.StatisticsWrap>
  );
};

export default memo(Statistics);
