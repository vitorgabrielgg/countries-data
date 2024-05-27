import { CountriesProvider } from "./context/countries";
import Page from "./pages/Page";

function App() {
  return (
    <CountriesProvider>
      <Page />
    </CountriesProvider>
  );
}

export default App;
