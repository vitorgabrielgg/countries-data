import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header, ThemeProvider } from "./components";
import { AppRoutes } from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Header />
        <main className="dark:bg-dark_color_background min-h-[calc(100vh-68px)] transition-colors">
          <AppRoutes />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
