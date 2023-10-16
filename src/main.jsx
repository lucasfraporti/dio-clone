import { GlobalStyle } from "./styles/Global";

import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <StyleSheetManager shouldForwardProp={(prop) => !prop.startsWith("data-")}>
      <GlobalStyle />
      <App />
    </StyleSheetManager>
  </>
);
