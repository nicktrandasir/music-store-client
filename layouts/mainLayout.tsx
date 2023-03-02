import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import Container from "@mui/material/Container";
import { Player } from "../components/Player";

interface MyProps {
  children?: ReactNode;
}
export const MainLayout = ({ children }: MyProps) => {
  return (
    <>
      <Navbar />
      <Container style={{ margin: "90px 0" }}>{children}</Container>
      <Player />
    </>
  );
};
