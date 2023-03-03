import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import styles from "../styles/Player.module.scss";
import { Grid, IconButton } from "@mui/material";
import { Pause, PlayArrow, VolumeMute, VolumeUp } from "@mui/icons-material";
import { TrackProgress } from "./TrackProgress";
import { DataContext } from "../core/dataProvider";
import { formatTime } from "../common/formatTime";

let audio: HTMLAudioElement;

export const Player = () => {
  const { data, setData } = useContext(DataContext);
  const [playTrack, setPlayTrack] = useState(data?.pause);

  const play = () => {
    if (data?.pause) {
      audio.play();
      setPlayTrack(true);
      setData({ ...data, pause: false });
    } else {
      audio.pause();
      setPlayTrack(false);
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
  useLayoutEffect(() => {
    if (!audio && data?.active) {
      audio = new Audio();
      audio.src = "http://localhost:5000/" + data?.active?.audio;
      audio.onloadedmetadata = () => {
        setData({ ...data, duration: audio.duration });
      };
      audio.ontimeupdate = () => {
        setData({ ...data, currentTime: audio.currentTime });
      };
    }
  }, [data]);

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>{!playTrack ? <PlayArrow /> : <Pause />}</IconButton>
      <Grid container direction="column" style={{ width: 200, margin: "0 20px" }}>
        <div>{data?.active?.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{data?.active?.artist}</div>
      </Grid>
      <TrackProgress
        left={formatTime(Math.ceil(data?.currentTime))}
        right={formatTime(Math.ceil(data?.duration))}
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
