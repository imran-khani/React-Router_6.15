import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="max-w-6xl mx-auto flex justify-between items-center w-full">
            <Link className="text-2xl font-bold"  to="/">#VanLife</Link>
            <nav className="bg-transparent flex md:gap-5 flex-col md:flex-row  md:text-xl text-sm">
                <NavLink  to='/host' >Host</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/vans">Vans</NavLink>
            </nav>
        </header>
    )
}