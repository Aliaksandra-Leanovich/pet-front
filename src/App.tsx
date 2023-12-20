import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./ui/Themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
