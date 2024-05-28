import Theme from "./components/Theme";
import { CountriesProvider } from "./context/countries";
import Page from "./pages/Page";

function App() {
  return (
    <Theme>
      <CountriesProvider>
        <Page />
      </CountriesProvider>
    </Theme>
  );
}

export default App;
