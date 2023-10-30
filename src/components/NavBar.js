import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <nav className='navbar'>
            <h1 className='title' onClick={()=>navigate("/")}>PDED Blog</h1>
        </nav>
    );
}

export default NavBar;