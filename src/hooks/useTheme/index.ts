import { ThemeProviderContext } from "@/components";
import { useContext } from "react";

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  const { theme } = context;

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  const handleTheme = () => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return theme !== "dark" ? true : false;
    } else {
      return theme !== "light" ? false : true;
    }
  };

  return { ...context, handleTheme };
};
