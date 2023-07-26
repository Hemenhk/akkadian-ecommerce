import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material";

import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme();
const themeMui = createTheme();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themeMui}>
        <ChakraProvider theme={theme} resetCSS>
          <App />
        </ChakraProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
