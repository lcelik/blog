import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home-page/Home";
import SinglePage from "./pages/single-page/SinglePage";
import Publish from "./pages/publish/Publish";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  // const user = false;
  const { user } = useContext(Context);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/publish">{user ? <Publish /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId" component={SinglePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
