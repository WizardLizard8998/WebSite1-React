import React from "react";
import Button from "@mui/material/Button";
import "../Styles.css";
import axios from "axios";
//import { useEffect , useState} from "react";

import Box from '@mui/material/Box';




function BoxSx(props) {

  const {renk} = props;
  
 

  return (
    <Box
      sx={{
        margin:1,
        borderRadius:10,
        width: 1000,
        height: 300,
        backgroundColor: `${renk}`,
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <h1>aaaaaaa</h1>
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
          <h1>left content </h1>
        </div>
        
        <div className="midcontent">
        <h1>mid content</h1>
        <div className="midBox">
        {colors && colors.map((data,index) => <BoxSx renk={data} />)}
        </div>
        </div>


      </div>
    </>
  );
}

export default MainPage;
