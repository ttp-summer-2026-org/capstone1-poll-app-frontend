import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create">Create Poll</Link>
        </nav>
    );
}

export default Navbar;
