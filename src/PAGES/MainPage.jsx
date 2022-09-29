import React from "react";
import Button from "@mui/material/Button";
import "../Styles.css";
import axios from "axios";
import Typography from '@mui/material/Typography';

//import { useEffect , useState} from "react";

import Box from '@mui/material/Box';




function BoxSx(props) {

  const {renk} = props;
  
 

  return (
    <Box
      sx={{
        margin:1,
        borderRadius:10,
        width: 'inherit',
        height: 300,
        backgroundColor: `${renk}`,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div class= "box-title">
         <Typography variant="h6" >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      </div>
        <div>
        <Button color="primary">asdasdasdasd</Button>
        </div>
    </Box>
  );
}



function MainPage(props) {

  var colors =  ["#B2EBF2","#80DEEA","#4DD0E1","#26C6DA","#00BCD4","#00ACC1","#0097A7","#00838F"];


  axios
    .get("https://blogapi89.azurewebsites.net/api/BLOG/")
    .then((resp) => console.log(resp));

  return (
    <>
      <div className="pageTemplate">
        <div className="leftbar">
        <Typography variant="h4" > left-content </Typography>
        </div>
        
        <div className="midcontent">
        <Typography variant="h4" > mid-content </Typography>
        <div className="midBox">
        {colors && colors.map((data,index) => <BoxSx renk={data} />)}
        </div>
        </div>


      </div>
    </>
  );
}

export default MainPage;
