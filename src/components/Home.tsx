import { Fab } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import "./Home.css";
import { DataProps, SongProps } from "./WorkArea";
interface HomeProps {
  onPlayListClick: (song: SongProps) => void;
  onFavListClick: (song: SongProps) => void;
}

const Home: React.FC<HomeProps> = ({ onPlayListClick, onFavListClick }) => {
  const [data, setData] = useState<DataProps>();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ad48768cc8msh49b92297ac636e0p137ff7jsn21fe8a0678ca",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };
    fetch(
      "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US",
      options
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Music App</h1>
      <br />
      <h1>Top-Track Songs......</h1>
      <br />
      <Stack direction="row" spacing={2}>
        {data?.tracks?.map((item, index) => {
          return (
            <Item key={index}>
              <a href={item.url} target="_blank" rel="noreferrer">
                <img src={item.images.coverart} alt="Song Imeage" />
              </a>
              <h3>{item.title}</h3>
              <div>
                <Fab color="secondary" aria-label="add">
                  <AddIcon onClick={() => onFavListClick(item)} />
                </Fab>
                <Fab aria-label="like">
                  <FavoriteIcon onClick={() => onPlayListClick(item)} />
                </Fab>
              </div>
            </Item>
          );
        })}
      </Stack>
    </div>
  );
};

export default Home;
