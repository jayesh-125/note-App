import "./App.css"
const Navbar = () => {
  
  return (
    <div className="d-flex">
      <div className="logo">
        <span className="p1">P</span>
        <span className="blue">chat</span>
      </div>
      <div className="row">
        <button className="btn">
          <i className="fa-solid fa-user"></i>
        </button>
        <button className="btn">
          <i className="fa-solid fa-bell"></i>
        </button>
        <button className="btn">
          <i className="fa-solid fa-volume-xmark"></i>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
