const btnStyles = {
    color: "#000000",
    backgroundColor: "#2a9d8f",
    border: "none",
    borderRadius: "4px",
    fontSize: "1.8rem",
    cursor: "pointer",
    padding: ".6rem"
}

const heading = React.createElement("h1", {}, "This is home page");
const button = React.createElement("button", {
    style: btnStyles
}, "Success Btn")
const container = React.createElement(
  "div",
  {
    className: "container"
  },
  [heading, button]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);