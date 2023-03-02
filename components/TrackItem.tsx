import React, { useContext } from "react";
import { ITrack } from "../types/ITrack";
import { Card, Grid } from "@mui/material";
import s from "../styles/TrackItem.module.scss";
import IconButton from "@mui/material/IconButton";
import { Delete, Pause, PlayArrow } from "@mui/icons-material";
import { useRouter } from "next/router";
import { DataContext } from "../core/dataProvider";

interface IProps {
  track: ITrack;
  active?: boolean;
}

export const TrackItem = ({ track, active = false }: IProps) => {
  const { push } = useRouter();
  const { data, setData } = useContext(DataContext);

  const play = (e: any) => {
    e.stopPropagation();
    setData({ ...data, active: track, pause: false });
  };

  return (
    <Card className={s.track} onClick={() => push(`/tracks/${track._id}`)}>
      <IconButton onClick={play}>{active ? <Pause /> : <PlayArrow />}</IconButton>
      {/*<Image height={70} width={70} src={track.picture} alt={track.name} />*/}
      <img style={{ height: "70px", width: "70px" }} src={track.picture} alt={track.name} />
      <Grid container direction="column" style={{ margin: "0 20px", width: 500 }}>
        <div style={{ fontWeight: 700 }}>{track.name}</div>
        <div style={{ fontSize: "12px" }}>{track.artist}</div>
      </Grid>
      {active && (
        <span style={{ fontSize: "12px" }}>
          {data?.currentTime}/ {data?.duration}
        </span>
      )}
      <IconButton onClick={(e) => e.stopPropagation()} style={{ marginLeft: "auto" }}>
        <Delete />
      </IconButton>
    </Card>
  );
};
