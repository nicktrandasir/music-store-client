import React from "react";
import { MainLayout } from "../../layouts/mainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div
        style={{
          paddingTop: "100px",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Добро пожаловать!</h1>
        <p>Тут собраны лучшие треки</p>
      </div>
    </MainLayout>
  );
}
