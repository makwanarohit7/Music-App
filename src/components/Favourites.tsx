import { Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import logo from "../img/logo.svg";
import { SongProps } from "./WorkArea";

interface FavouritesProps {
  keylist: SongProps[];
}

const Favourites: React.FC<FavouritesProps> = ({ keylist }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div className="liked">
        <img src={logo} alt="Like Logo" />
        <h1>Liked Songs</h1>
        <Stack direction="row" spacing={2}>
          {keylist.map((item, index) => {
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
export default Favourites;
