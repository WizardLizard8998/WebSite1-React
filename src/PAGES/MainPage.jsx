import React from "react";
import Button from "@mui/material/Button";
import "../Styles.css";
import axios from "axios";
import Typography from '@mui/material/Typography';

import { useNavigate } from "react-router-dom";
import { history } from "react-router-dom"; 

//import { useEffect , useState} from "react";

import Box from '@mui/material/Box';

var content= ["Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir  "];


function BoxSx(props) {

  const {renk, content} = props;
  

 

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
         {content}
      </Typography>
      </div>
        <div>
        <Button color="primary">Edit</Button>
        </div>
    </Box>
  );
}



function MainPage(props) {

  const history = useNavigate();

  var colors =  ["#B2EBF2","#80DEEA","#4DD0E1","#26C6DA","#00BCD4","#00ACC1","#0097A7","#00838F"];


  var onClick = () => {
    history("/Blog");
  }

  axios
    .get("https://blogapi89.azurewebsites.net/api/BLOG/")
    .then((resp) => console.log(resp));

  return (
    <>
      <div className="pageTemplate">
        <div className="leftbar">
        <Typography variant="h6" > İçerikler </Typography> 
        <Button onClick={onClick}> <Typography variant="p" > Anasayfa  </Typography></Button>
        <Button> <Typography variant="p" > Blog  </Typography></Button>
        <Button> <Typography variant="p" > lagaluga  </Typography></Button>
        <Button> <Typography variant="p" > lagaluga  </Typography></Button>
        <Button> <Typography variant="p" > lagaluga  </Typography></Button>
        </div>
        
        <div className="midcontent">
        <Typography variant="h4" > Anasayfa </Typography>
        <div className="midBox">
        {colors && colors.map((data,index) => <BoxSx renk={data} content={content} />)}
        </div>
        </div>


      </div>
    </>
  );
}

export default MainPage;
