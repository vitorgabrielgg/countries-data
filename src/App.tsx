import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components";
import { AppRoutes } from "./routes";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
