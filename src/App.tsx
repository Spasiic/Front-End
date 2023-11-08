import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { PublicRoutes } from "./routes/PublicRoutes";
import MainPage from "./pages/MainPage";

function App() {
  const userContext = useContext(UserContext);

  const auth: boolean = userContext?.auth || false;

  return (
    <ThemeProvider theme={theme}>
      {auth ? <MainPage/> : <PublicRoutes />}
    </ThemeProvider>
  );
}

export default App;
