const styles = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#3e1f47",
  borderRadius: "4px",
  padding: "2rem",
};

const ReactLogo =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K";

const heading = React.createElement(
  "h2",
  {
    className: "title",
  },
  "Today is 24 December 2022"
);

const para = React.createElement(
  "p",
  {
    className: "title",
  },
  "And I'm learning Namaste React from Akshay Saini"
);

const logo = React.createElement("img", {
  src: ReactLogo,
  width: "200px",
});

const container = React.createElement(
  "div",
  {
    className: "container",
    style: styles,
  },
  [heading, logo, para]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
