import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search/Search";
import { Box, Grommet } from "grommet";
import { FONT_FAMILY, TEXT_FONT_SIZE } from "./constants";

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="#f5f5f5"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="large"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const theme = {
  global: {
    font: {
      family: FONT_FAMILY,
      size: TEXT_FONT_SIZE,
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} themeMode="dark">
      <AppBar>Warzone Stats</AppBar>
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
