import { createContext, useState } from "react";
import React from "react";
import { usePreviousProps } from "@mui/utils";

const ThemeContext = createContext();

function Theme(props) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
