import { ThemeProvider } from "styled-components";
import Router from "./router/Router";
import GlobalStyles from "./style/globalStyles";
import theme from "./style/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
