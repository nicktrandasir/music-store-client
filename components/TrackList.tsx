import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React, { useContext } from "react";
import { ITrack } from "../types/ITrack";
import { TrackItem } from "./TrackItem";
import { DataContext } from "../core/dataProvider";

interface IProps {
  tracks?: ITrack[];
}

export const TrackList = ({ tracks }: IProps) => {
  const { data, setData } = useContext(DataContext);

  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks?.map((track) => (
          <TrackItem track={track} active={data?.active?._id === track._id} key={track._id} />
        ))}
      </Box>
    </Grid>
  );
};
