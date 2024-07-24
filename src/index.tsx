import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Socket } from "socket.io-client";
import { SocketProvider } from "context/SocketContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SocketProvider>
      <BrowserRouter>
        {/* <Helmet>
        <link rel="modulepreload" href="assets/theme-b118ffc1.js" />
        <link rel="modulepreload" href="assets/free-mode-d251b1d1.js" />
        <link rel="modulepreload" href="assets/navigation-f8e75545.js" />
        <link rel="modulepreload" href="assets/thumbs-a96dec08.js" />
        <script type="module" src="assets/home-c1b793e9.js"></script>
      </Helmet> */}
        <App />
      </BrowserRouter>
    </SocketProvider>
  </React.StrictMode>
);
