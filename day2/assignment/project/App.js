import { createElement } from "react";
import ReactDOM from "react-dom";

const heading = createElement("h1", {}, "Hello from Day 2")
const para = createElement("p", {}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptatibus asperiores culpa facere minima ut non accusamus, pariatur exercitationem voluptatem dolore vel facilis inventore soluta corrupti nobis quae iure labore?")

const container = createElement("container", {}, [heading, para])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)