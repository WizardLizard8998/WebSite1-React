import { createContext, useState } from "react";
import React from "react";
import { usePreviousProps } from "@mui/utils";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
