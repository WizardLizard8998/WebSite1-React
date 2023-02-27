import {React , useContext} from "react";

import "../Styles.css";

import Typography from "@mui/material/Typography";
import { ThemeContext } from "../DATA/ThemeContext";
import LeftBar from "../COMPONENTS/LeftBar";
import ContentBox from "../COMPONENTS/ContentBox";





function BlogPage(props) {

  const { theme } = useContext(ThemeContext);
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

  var content = "blog asşlkdjşalkjfsşldkjsşdlffkgjsşdlfkjgsşdkfksdşlkgjsşdllkgsşlklgşdfdgşfg"

  return (
    <>
      <>
        <div
          className={theme ? `pageTemplate pageTemplate-dark` : `pageTemplate`}
        >
          <div className="leftbar">
            <LeftBar />
          </div>

          <div className="midcontent">
            <Typography variant="h4"> Blog </Typography>
            <div className="midBox">
              {colors &&
                colors.map((data, index) => (
                  <ContentBox renk={data} content={content} />
                ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default BlogPage;
