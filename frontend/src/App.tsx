import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";

// import store from "./store";
import Dashboard from "./components/dashboard";

function App() {
  return (
    // <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </Router>
    // </Provider>
  );
}

export default App;
