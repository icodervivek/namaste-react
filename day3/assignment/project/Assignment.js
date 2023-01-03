import ReactDOM from "react-dom/client";

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#5e548e",
  fontFamily: "sans-serif",
  padding: ".2rem",
  color: "#fff",
  fontFamily: "sans-serif",
};

const InputStyle = {
  borderRadius: "2rem",
  border: "none",
  outline: "none",
  padding: ".5rem",
};

const Brand = () => {
  return (
    <div className="logo">
      <h2>Logo</h2>
    </div>
  );
};

const SearchInput = () => {
  return (
    <div>
      <input
        style={InputStyle}
        type="search"
        name=""
        id=""
        placeholder="Type here to search"
      />
    </div>
  );
};

const User = () => {
  return <h5>User</h5>;
};

const Header = () => {
  return (
    <div style={nav}>
      <Brand />
      <SearchInput />
      <User />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
