import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Beer } from "./pages/Beer";
import { GlobalStyle } from "./styles/global";

import { Provider } from "react-redux";
import store from "./store/index";

export function App() {
  return (
    <Provider store={store}>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beer/:id" component={Beer} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  );
}

