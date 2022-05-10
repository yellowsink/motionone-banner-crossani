import type { Component } from 'solid-js';
import Header from './Header';

import "virtual:windi.css";
import Segment from './Segment';

const App: Component = () => {
  return (
    <div class="bg-black">
      <Header />
      <Segment class="text-pink" head={}></Segment>
    </div>
  );
};

export default App;
