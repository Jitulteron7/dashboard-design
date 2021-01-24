import DashBoard from "./Components/DashBoard";
import "./sass/main/_main.scss";
import {BrowserRouter,Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Route to="/">
        <DashBoard/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
