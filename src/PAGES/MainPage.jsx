import React, { useContext } from "react";

import "../Styles.css";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { ThemeContext } from "../DATA/ThemeContext";
import LeftBar from "../COMPONENTS/LeftBar";
import ContentBox from "../COMPONENTS/ContentBox";
import { useNavigate } from "react-router-dom";

//import { useEffect , useState} from "react";



var content = [
  "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir  ",
];

function MainPage(props) {
  
  var colors = [
    "#B2EBF2",
    "#80DEEA",
    "#4DD0E1",
    "#26C6DA",
    "#00BCD4",
    "#00ACC1",
    "#0097A7",
    "#00838F",
  ];

  const { theme } = useContext(ThemeContext);

  axios
    .get("https://blogapi89.azurewebsites.net/api/BLOG/")
    .then((resp) => console.log(resp));

  return (
    <>
      <div
        className={theme ? `pageTemplate pageTemplate-dark` : `pageTemplate`}
      >
        <div className="leftbar">
          <LeftBar />
        </div>

        <div className="midcontent">
          <Typography variant="h4"> Anasayfa </Typography>
          <div className="midBox">
            {colors &&
              colors.map((data, index) => (
                <ContentBox renk={data} content={content} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
