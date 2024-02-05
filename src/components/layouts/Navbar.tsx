import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-2 w-full max-w-[1280px] mx-auto bg-navbar-gradient rounded-sm">
      <img src="/public/todo.png" alt="" className="w-8 h-8 rounded-lg ml-3" />
      <nav className="flex space-x-5 font-semibold text-xl text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/show-todo">Show-todo</NavLink>
        <NavLink to="/add-todo">Add todo</NavLink>
      </nav>
      <div></div>
    </header>
  );
};

export default Navbar;
