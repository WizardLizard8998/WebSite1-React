import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import "../Styles.css";
import { useNavigate } from "react-router-dom";

export default function KAppBar() {
  const history = useNavigate();

  return (
    <div>
      <Box>
        <AppBar className="appBar" position="static" color="inherit">
          <Toolbar>
            <IconButton
              onClick={() => {
                history("/");
              }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              Kerem Berkkanoğlu
            </IconButton>

            <Button
              color="inherit"
              onClick={() => {
                history("/Blog");
              }}
            >
              Blog
            </Button>
            <Button color="inherit">Leave a Note</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
