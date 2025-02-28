import Logo from '../assets/logo.png'
const Header = () => {
    return ( 
        <header className="header-menu">
            <div className="wrapper">
            <div className="header-logo">
                <a href="/">
                    <img src={Logo} alt="" />
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Projectos</a></li>
                    <li><a href="#">Material</a></li>
                    <li><a href="#">Arquitecto</a></li>
                    <li className=""><a href="#">Login/Register</a></li>
                </ul>
            </nav>
            </div>
    </header>
     );
}
 
export default Header;