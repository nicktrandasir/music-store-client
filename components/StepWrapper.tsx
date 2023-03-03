import React, { FC, ReactNode } from "react";
import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";

interface IProps {
  activeStep: number;
  children: ReactNode;
}
const steps = ["Информация отреке", "Загрузить обложку", "Загрузите трек"];
export const StepWrapper: FC<IProps> = ({ activeStep, children }) => {
  return (
    <Container style={{ height: 500 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent="center" style={{ margin: "70px 0", height: 390 }}>
        <Card style={{ width: 600, background: "aliceblue" }}>{children}</Card>
      </Grid>
    </Container>
  );
};
