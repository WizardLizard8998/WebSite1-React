import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";


import "../Styles.css";
import { useHistory } from "react-router-dom";

export default function KAppBar() {

  const history = useHistory();

  return (
    <div >
      <Box>
        <AppBar className="appBar" position="static" color="inherit">
          <Toolbar>
            <IconButton
              onClick ={() => {history.push("/")}}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              Kerem Berkkanoğlu
            </IconButton>

            <Button color="inherit" onClick={() => { history.push("/Blog")}}>Blog</Button>
            <Button color="inherit">Leave a Note</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
