import App from "./src/App.js";
import "./style.css";

import { worker } from "./src/mock/worker.js";
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
    worker.start();
}

const app = new App("#root");
