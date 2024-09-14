import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header, ThemeProvider } from "./components";
import { AppRoutes } from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <AppRoutes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
