import React from "react";
import { MainLayout } from "../../../layouts/mainLayout";
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { ITrack } from "../../../types/ITrack";
import { TrackList } from "../../../components/TrackList";

interface IProps {}

export default function Index(props: IProps) {
  const { push } = useRouter();
  const mockTracks: ITrack[] = [
    {
      _id: "1",
      name: "Трек 1",
      artist: "Исполнитель 1",
      text: "Просто текст",
      listens: 3,
      audio: "авва",
      picture: "ывыыы",
      comments: [{ _id: "sdsd", username: "Ivan", text: "Comment" }],
    },
    {
      _id: "2",
      name: "Трек 2",
      artist: "Исполнитель 2",
      text: "Просто текст",
      listens: 3,
      audio: "авва",
      picture: "ывыыы",
      comments: [{ _id: "sdsd", username: "Ivan", text: "Comment" }],
    },
    {
      _id: "3",
      name: "Трек 3",
      artist: "Исполнитель 3",
      text: "Просто текст",
      listens: 3,
      audio: "авва",
      picture: "ывыыы",
      comments: [{ _id: "sdsd", username: "Ivan", text: "Comment" }],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => push("/tracks/create")}>Зугрузить</Button>
            </Grid>
          </Box>
          <TrackList tracks={mockTracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
}
