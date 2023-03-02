import { useEffect, useState } from "react";
import { ITrack } from "../../types/ITrack";

export type InitialDataType = {
  active: ITrack;
  currentTime: number;
  duration: number;
  volume: number;
  pause: boolean;
};

type Props = {
  value: InitialDataType;
};

export const useInitialData = ({ value }: Props) => {
  const [data, setData] = useState<InitialDataType>(value);

  useEffect(() => {
    value && setData({ ...data, ...value });
  }, [value]);

  return { data, setData };
};
