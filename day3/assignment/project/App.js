import { createElement } from "react";
import ReactDOM from "react-dom/client";

// const container = createElement(
//   "div",
//   {
//     className: "title",
//   },
//   [
//     createElement("h1", {key: "one"}, "Heading 1"),
//     createElement("h2", {key: "two"}, "Heading 2"),
//     createElement("h3", {key: "three"}, "Heading 3"),
//   ]
// );

// const container = (
//   <div className="container">
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
//     <h3>Heading 3</h3>
//   </div>
// );

const ContainerStyle = {
  backgroundColor: "#2a9d8f",
  fontFamily: "sans-serif",
  padding: "1rem",
  borderRadius: "4px",
};

const Palette = {
  display: "flex",
  alignItems: "center",
};

const pass = {
  marginLeft: "8px",
};

const UserDetails = () => {
  return (
    <div style={Palette}>
      <h3>Password: </h3>
      <p style={pass}>Anony#123</p>
    </div>
  );
};

const myName = "Vivs";
const TitleComponent = () => {
  return (
    <div className="container" style={ContainerStyle}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Username: {myName}</h4>
      <UserDetails />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleComponent />);
