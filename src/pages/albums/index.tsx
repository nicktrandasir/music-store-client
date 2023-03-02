import React from "react";
import { MainLayout } from "../../../layouts/mainLayout";

interface IProps {}

export default function Index(props: IProps) {
  return (
    <MainLayout>
      <div
        style={{ paddingTop: "100px", height: "100vh", display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        Список всех альбомов
      </div>
    </MainLayout>
  );
}
