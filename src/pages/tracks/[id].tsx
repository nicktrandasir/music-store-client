import React from "react";
import { useRouter } from "next/router";
import { MainLayout } from "../../../layouts/mainLayout";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ITrack } from "../../../types/ITrack";
import TextField from "@mui/material/TextField";

interface IProps {
  track: ITrack;
}
export default function Index() {
  const { push } = useRouter();
  const track = {
    _id: "3",
    name: "Трек 3",
    artist: "Исполнитель 3",
    text: "Просто текст",
    listens: 3,
    audio: "авва",
    picture: "ывыыы",
    comments: [{ _id: "sdsd", username: "Ivan", text: "Comment" }],
  };
  return (
    <MainLayout>
      <Button onClick={() => push("/tracks")} variant="outlined">
        {"< К списку"}
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src="" alt="" />
        <div style={{ margin: "20px 0" }}>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнитель - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к треку</h1>
      <p>{track.text}</p>
      <h1>Раздел с комментариями</h1>
      <Grid>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментарий" fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment._id}>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
