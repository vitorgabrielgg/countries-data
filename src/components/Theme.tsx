import { ThemeProvider } from "@/context/theme";
import { ReactNode } from "react";

export default function Theme({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}
