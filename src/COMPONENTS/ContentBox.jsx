import React from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function ContentBox(props) {
    const { renk, content } = props;
  
    return (
      <Box
        sx={{
          margin: "inherit",
          padding: "inherit",
          borderRadius: 10,
          width: "inherit",
          height: 300,
          backgroundColor: `${renk}`,

        }}
      >
        <div class="box-title">
          <Typography variant="h6">{content}</Typography>
        </div>
        <div>
          <Button color="primary">Edit</Button>
        </div>
      </Box>
    );
  }


  export default ContentBox;