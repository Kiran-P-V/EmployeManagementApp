import "./App.css";
import { Container } from "@mui/system";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { UserRoutes } from "./routes/UserRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Container id="rootDiv">
          <UserRoutes />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
