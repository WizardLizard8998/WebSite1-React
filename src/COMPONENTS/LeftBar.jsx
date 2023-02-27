import { React, useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../Styles.css";
import { ThemeContext } from "../DATA/ThemeContext";
import { useNavigate } from "react-router-dom";

function LeftBar() {
  const { theme, changeTheme } = useContext(ThemeContext);

  let history = useNavigate();

  var onClickAnasayfa = () => {
    history("/");
  };

  var onClickBlog = () => {
    history("/Blog");
  };

  var onClickBirNotBırak = () => {
    history("/BirNotBırak");
  };

  var handleTheme = () => {
    changeTheme();
  };

  return (
    <div className={theme ? `pageTemplate pageTemplate-dark` : `pageTemplate`}>
      <div className="leftbar">
        <Typography variant="h6"> İçerikler </Typography>
        <Button onClick={onClickAnasayfa}>
          {" "}
          <Typography variant="p"> Anasayfa </Typography>
        </Button>
        <Button onClick={onClickBlog}>
          {" "}
          <Typography variant="p"> Blog </Typography>
        </Button>
        <Button onClick={onClickBirNotBırak}>
          {" "}
          <Typography variant="p"> Bir Not Bırak </Typography>
        </Button>
        <Button onClick={handleTheme}>
          {" "}
          <Typography variant="p"> Koyu Mod </Typography>
        </Button>
        <Button>
          {" "}
          <Typography variant="p"> lagaluga </Typography>
        </Button>
      </div>
    </div>
  );
}

export default LeftBar;
