import React from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function ContentBox(props) {
    const { renk, content } = props;
  
    return (
      <Box
        sx={{
          margin: 1,
          borderRadius: 10,
          width: "inherit",
          height: 300,
          backgroundColor: `${renk}`,
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
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