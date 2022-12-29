import React from "react";
import { Box, Drawer } from "@mui/material";
import SideBar from "../components/SideBar";
import WorkArea from "../components/WorkArea";

export default function Home() {
  const drawerWidth = 250;
  const mystyle = {
    color: "white",
    backgroundColor: "#363535",
    flex: 1,
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Box sx={{ overflow: "auto" }} style={mystyle}>
            <SideBar />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <WorkArea />
        </Box>
      </Box>
    </div>
  );
}
