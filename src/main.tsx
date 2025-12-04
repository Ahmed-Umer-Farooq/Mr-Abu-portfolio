import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Reset scroll position before render
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
  window.scrollTo(0, 0)
}

createRoot(document.getElementById("root")!).render(<App />);
  