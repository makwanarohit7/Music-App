import {
  AppBar,
  Box,
  IconButton,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

interface SearchProps {
  track: {
    url: string;
    title: string;
    images: {
      coverart: string;
    };
  };
}
interface MusicProps {
  tracks: { hits: SearchProps[] };
}
export default function Search() {
  const [search, setSearch] = useState("");
  const [musicData, setMusicData] = useState<MusicProps>();

  const handleSearch = () => {
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/search",
      params: { term: search, locale: "en-US", offset: "0", limit: "5" },
      headers: {
        "X-RapidAPI-Key": "ad48768cc8msh49b92297ac636e0p137ff7jsn21fe8a0678ca",
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMusicData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  // console.log(musicData?.tracks?.hits?.[0]?.track);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "#363535" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              Search Favourites Songs Here...
            </Typography>

            <TextField
              style={{ color: "white" }}
              placeholder="Search…"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button onClick={handleSearch}>
              <SearchIcon />
            </button>
          </Toolbar>
        </AppBar>
        <div>
          <Stack direction="row" spacing={2}>
            <Item>
              <a
                href={musicData?.tracks?.hits?.[0]?.track.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={musicData?.tracks?.hits?.[0]?.track.images.coverart}
                  alt="Song Imeage"
                />
              </a>
              <h3>{musicData?.tracks?.hits?.[0]?.track?.title}</h3>
            </Item>
          </Stack>
        </div>
      </Box>
    </div>
  );
}
