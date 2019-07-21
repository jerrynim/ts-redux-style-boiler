import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./style/GlobalStyle";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";
import theme from "./style/theme";
import { ThemeProvider } from "./style/typed-components";
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
