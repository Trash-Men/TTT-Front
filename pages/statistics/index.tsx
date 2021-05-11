import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import bb, { bar, line, PrimitiveArray } from "billboard.js";
import "billboard.js/dist/theme/insight.css";

import Statistics from "@components/statistics";
import useMainAreaState from "@utils/hook/useMainAreaState";
import useMain from "@utils/hook/useMain";
import useMainTimeState from "@utils/hook/useMainTimeState";

interface Props {
  id: string;
  password: string;
}

const StatisticsPage: NextPage<Props> = ({ id, password }) => {
  const [trashes, trashCans] = useMain({ id, password });
  const [trashArea, trashCanArea] = useMainAreaState(trashes, trashCans);
  const [trashTime, trashCanTime] = useMainTimeState(trashes, trashCans);

  const bbBarGenerator = (
    text: string,
    columns: PrimitiveArray[],
    bindto: string
  ) => {
    bb.generate({
      title: {
        text,
      },
      data: {
        columns,
        type: bar(),
      },
      bar: {
        width: {
          ratio: 0.2,
        },
        padding: 20,
      },
      bindto,
    });
  };

  const bbLineGenerator = (
    text: string,
    x: string[],
    data: number[],
    bindto: string
  ) => {
    bb.generate({
      data: {
        x: "x",
        columns: [
          ["x", ...x],
          [text, ...data],
        ],
        type: line(),
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%m-%d",
          },
        },
      },
      bindto: bindto,
    });
  };

  const generateTrashArea = () => {
    bbBarGenerator("지역별 쓰레기 통계", trashArea, "#bar-trash");
  };

  const generateTrashCanArea = () => {
    bbBarGenerator("지역별 쓰레기통 통계", trashCanArea, "#bar-trashCan");
  };

  const generateTrashTime = () => {
    const [month, amount] = trashTime;

    bbLineGenerator("시간별 쓰레기 통계", month, amount, "#line-trash");
  };

  const generateTrashCanTime = () => {
    const [month, amount] = trashCanTime;

    bbLineGenerator("시간별 쓰레기통 통계", month, amount, "#line-trashCan");
  };

  useEffect(() => {
    generateTrashArea();
  }, [trashArea]);
  useEffect(() => {
    generateTrashCanArea();
  }, [trashCanArea]);
  useEffect(() => {
    generateTrashTime();
  }, [trashTime]);
  useEffect(() => {
    generateTrashCanTime();
  }, [trashCanTime]);

  return (
    <>
      <Head>
        <title>TTT | Statistics</title>
      </Head>
      <Statistics trashes={trashes} trashCans={trashCans} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    GOOGLE_MAP_API_KEY: apiKey,
    ID: id,
    PASSWORD: password,
  } = process.env;

  return {
    props: {
      apiKey,
      id,
      password,
    },
  };
};

export default StatisticsPage;
