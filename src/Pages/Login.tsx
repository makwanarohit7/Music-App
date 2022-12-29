import { ThemeProvider } from "@emotion/react";

import { useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const theme = createTheme();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                type={"text"}
                onChange={(e) => {}}
                label="Username*"
                fullWidth
              />
              <TextField
                margin="normal"
                type={"password"}
                fullWidth
                label="Password"
                onChange={(e) => {}}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  sessionStorage.setItem("isAuthenticated", "true");
                  navigate("/");
                }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
