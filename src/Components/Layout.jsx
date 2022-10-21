import { NavLink, Outlet } from "react-router-dom";

const propActive = ({ isActive }) => ({ color: isActive ? "var(--activeProp)" : "#6e7ee1" })

const Layout = () => {
   return (
      <>
         <header className="Header">
            <NavLink className="Header" to="/" style={ propActive }>Home</NavLink>
            <NavLink className="Header" to="/giphypages" style={ propActive }>Giphy</NavLink>
            <NavLink className="Header" to="/currency" style={ propActive } >Currency</NavLink>
            <NavLink className="Header" to="/news" style={ propActive }>News</NavLink>
            <NavLink className="Header" to="/form" style={ propActive }>Form</NavLink>
         </header>

         <main className="App">
            <Outlet />
         </main>
      </>
   )
}

export { Layout };