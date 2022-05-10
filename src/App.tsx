import type { Component } from "solid-js";
import { Movement } from "./Movers";

import "virtual:windi.css";
import { Window, WindowButtons } from "./Window";

const App: Component = () => (
  <div class="bg-yellow p-20 perspect-1000 h-125 w-250 overflow-hidden">
    <Window>
      <WindowButtons />
      <Movement />
    </Window>
  </div>
);

export default App;
