import React from "react";
import { Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../img/logo-playlist.svg";
import { SongProps } from "./WorkArea";
interface PlaylistProps {
  playlist: SongProps[];
}

const Playlists: React.FC<PlaylistProps> = ({ playlist }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <div className="playlist">
        <img src={logo} alt="Like Logo" />
        <h1>PlayList</h1>
        <Stack direction="row" spacing={2}>
          {playlist.map((item, index) => {
            return (
              <Item key={index}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <img src={item.images.coverart} alt="Song Imeage" />
                </a>
                <h3>{item.title}</h3>
              </Item>
            );
          })}
        </Stack>
      </div>
    </div>
  );
};
export default Playlists;
