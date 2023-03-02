import { createContext, ReactNode } from "react";
import { useInitialData } from "./hooks/useInitialData";
import { IComment } from "../types/ITrack";

export type DataContextType = ReturnType<typeof useInitialData>;

export const DataContext = createContext<DataContextType>({} as DataContextType);

type Props = {
  value: {
    active: {
      _id: string;
      name: string;
      artist: string;
      text: string;
      listens: number;
      picture: string;
      audio: string;
      comments: IComment[];
    };
    currentTime: 0;
    duration: 0;
    volume: 50;
    pause: true;
  };
  children: ReactNode;
};

export const DataProvider = ({ children, value }: Props) => {
  const initialDataValue = useInitialData({ value });

  return <DataContext.Provider value={{ ...initialDataValue }}>{children}</DataContext.Provider>;
};
