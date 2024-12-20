import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import EmojiVoting from "./components/EmojiVoting/EmojiVoting";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EmojiVoting />
  </StrictMode>
);
