import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import { ITrack } from "../types/ITrack";
import { TrackItem } from "./TrackItem";

interface IProps {
  tracks: ITrack[];
}

export const TrackList = ({ tracks }: IProps) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => (
          <TrackItem track={track} key={track._id} />
        ))}
      </Box>
    </Grid>
  );
};
