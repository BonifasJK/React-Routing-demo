import { NavLink, Link} from "react-router-dom";
import Logo from "../assests/logo.png";

export const Header = () => {
  return (
    <header>
        <main>
            <Link to="/" className="logo">
                <img src={ Logo } alt="Routemate Logo" />
                <span>Routemates</span>
            </Link>
            <nav>
                <NavLink to="/" className="link active">Home</NavLink>
                <NavLink to="products" className="link">Products</NavLink>
                <NavLink to="contacts" className="link">Contacts</NavLink>
            </nav>
        </main>
    </header>
  )
}
