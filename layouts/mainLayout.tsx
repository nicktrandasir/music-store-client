import Navbar from "../components/Navbar";
import { ReactNode, useContext } from "react";
import Container from "@mui/material/Container";
import { Player } from "../components/Player";
import { DataContext } from "../core/dataProvider";

interface MyProps {
  children?: ReactNode;
}
export const MainLayout = ({ children }: MyProps) => {
  const { data } = useContext(DataContext);

  return (
    <>
      <Navbar />
      <Container style={{ margin: "90px 0" }}>{children}</Container>
      {data?.active && <Player />}
    </>
  );
};
