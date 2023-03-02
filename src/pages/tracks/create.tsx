import React, { useState } from "react";
import { MainLayout } from "../../../layouts/mainLayout";
import { StepWrapper } from "../../../components/StepWrapper";
import { Button, Grid, TextField } from "@mui/material";
import { FileUpload } from "../../../components/FileUpload";

interface IProps {}

export default function Create(props: IProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    setActiveStep((prev) => (prev < 3 ? prev + 1 : 3));
  };
  const back = () => {
    setActiveStep((prev) => (prev <= 0 ? 0 : prev - 1));
  };
  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        <h1 style={{ textAlign: "center" }}>STEP {activeStep + 1}</h1>
        {activeStep === 0 && (
          <Grid container direction="column" style={{ padding: 20 }}>
            <TextField style={{ paddingTop: 10 }} label="Название трека" />
            <TextField style={{ paddingTop: 10 }} label="Имя исполнителя" />
            <TextField style={{ paddingTop: 10 }} label="Комментарий" multiline rows={3} />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept={"image/*"}>
            <Button>Загрузить обложку</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept={"audio/*"}>
            <Button>Загрузить трек</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-around">
        <Button disabled={activeStep === 0} variant={"outlined"} onClick={back}>
          {"< Назад"}
        </Button>
        <Button disabled={activeStep === 3} variant={"outlined"} onClick={next}>
          {"Вперед >"}
        </Button>
      </Grid>
    </MainLayout>
  );
}
