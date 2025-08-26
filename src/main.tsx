import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.querySelector("#content");
const root = createRoot(container as Element);
root.render(<App />);
