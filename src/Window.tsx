import { Component } from "solid-js";

export const Window: Component =  (props) => (
  <div class="border-6 border-black rounded-2xl w-[800px] h-[500px] preserve-3d transform rotate-x-15 -rotate-y-10">
    {props.children}
  </div>
);

const WindowButton: Component = () => (
  <div class="inline-block ml-2 mt-2 w-4 h-4 border-3 border-black rounded-full" />
);

export const WindowButtons: Component = () => (
  <>
    <WindowButton />
    <WindowButton />
    <WindowButton />
  </>
);
