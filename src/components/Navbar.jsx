import logo from '../images/airbnb.png'

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={logo} className="nav-logo" alt="airbnb-logo"/>
        </nav>
    )
}