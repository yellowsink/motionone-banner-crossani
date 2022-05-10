import { Component, JSXElement } from "solid-js";

export default (props) =>
  (
    <div class={props.class}>
      <h1>{props.head}</h1>
      <p class="text-white">{props.body}</p>
      <a href={props.btnlink}>{props.btn}</a>
      {props.children}
    </div>
  ) as Component<{
    class: string;
    head: string;
    body: JSXElement;
    btnlink: string;
    btn: string;
    children: JSXElement;
  }>;
