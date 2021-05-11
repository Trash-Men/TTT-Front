import { useCallback, useEffect, useState } from "react";

import { ResTrash } from "@utils/payloads/response";

type TrashTime = Record<string, number>;

type Time = [string[], number[]];

const useMainTimeState = (trashes: ResTrash[], trashCans: ResTrash[]) => {
  const [trashTime, setTrashTime] = useState<Time>([[], []]);
  const [trashCanTime, setTrashCanTime] = useState<Time>([[], []]);

  const getMapped = useCallback((arr: ResTrash[]): Time => {
    const t: TrashTime = {};
    const x: string[] = [];
    const data: number[] = [];

    arr.forEach(({ created_at }) => {
      const fullDate = created_at.slice(0, 10);

      t[fullDate] = (t[fullDate] || 0) + 1;
    });

    for (const i in t) {
      x.push(i);
      data.push(t[i]);
    }

    return [x, data];
  }, []);

  useEffect(() => {
    setTrashTime(getMapped(trashes));
  }, [trashes]);
  useEffect(() => {
    setTrashCanTime(getMapped(trashCans));
  }, [trashCans]);

  return [trashTime, trashCanTime] as const;
};

export default useMainTimeState;
