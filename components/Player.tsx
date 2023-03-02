import React, { useContext, useEffect } from "react";
import styles from "../styles/Player.module.scss";
import { Grid, IconButton } from "@mui/material";
import { Pause, PlayArrow, VolumeDown, VolumeMute, VolumeUp } from "@mui/icons-material";
import { TrackProgress } from "./TrackProgress";
import { DataContext } from "../core/dataProvider";

let audio: HTMLAudioElement;

export const Player = () => {
  const { data, setData } = useContext(DataContext);

  const active = {
    _id: "3",
    name: "Трек 3",
    artist: "Исполнитель 3",
    text: "Просто текст",
    listens: 3,
    audio: "https://assets.mixkit.co/active_storage/sfx/2393/2393-preview.mp3",
    picture: "ывыыы",
    comments: [{ _id: "sdsd", username: "Ivan", text: "Comment" }],
  };

  useEffect(() => {
    setData({ duration: 0, active: { ...active }, volume: 50, currentTime: 0, pause: true });
  }, []);

  useEffect(() => {
    if (!audio) {
      audio = new Audio(active.audio);
      audio.onloadedmetadata = () => {
        setData({ ...data, duration: audio.duration });
      };
      audio.ontimeupdate = () => {
        setData({ ...data, currentTime: audio.currentTime });
      };
    }
  }, []);

  const play = () => {
    if (data?.pause) {
      audio.play();
      setData({ ...data, pause: false });
    } else {
      audio.pause();
      setData({ ...data, pause: true });
    }
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setData({ ...data, volume: Number(e.target.value) });
  };
  const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setData({ ...data, currentTime: Number(e.target.value) });
  };
  console.log("audio---->", Math.ceil(audio?.duration));
  return (
    <div className={styles.player}>
      <IconButton onClick={play}>{data?.pause ? <PlayArrow /> : <Pause />}</IconButton>
      <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
        <div>{active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{active?.artist}</div>
      </Grid>
      <TrackProgress
        left={Math.ceil(data?.currentTime)}
        right={Math.ceil(data?.duration)}
        onChange={changeCurrentTime}
      />
      {data?.volume === 0 ? (
        <VolumeMute style={{ marginLeft: "auto" }} />
      ) : (
        <VolumeUp
          onClick={() => setData({ ...data, volume: Number(0) })}
          style={{ marginLeft: "auto", cursor: "pointer" }}
        />
      )}
      <TrackProgress left={data?.volume} right={100} onChange={changeVolume} />
    </div>
  );
};
