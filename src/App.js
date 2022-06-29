import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home-page/Home";
import SinglePage from "./pages/single-page/SinglePage";
import Publish from "./pages/publish/Publish";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
