import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("");
          }}
        >
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/search");
          }}
        >
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Search"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/favourites");
          }}
        >
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Favourites"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/playlists");
          }}
        >
          <ListItemButton>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Playlists"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
