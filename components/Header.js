import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-logo" href="/">
                            <svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="109" height="53" viewBox="0 0 109 53">
                            <text id="EM" transform="translate(0 43)" fill="#fff" fontSize="40" fontFamily="LEMONMILK-Light, LEMON MILK" fontWeight="300"><tspan x="0" y="0">EM</tspan></text>
                            <text id="IN" transform="translate(62 43)" fill="#fff" fontSize="40" fontFamily="LEMONMILK-Bold, LEMON MILK" fontWeight="700"><tspan x="0" y="0">IN</tspan></text>
                            </svg>
                        </a>
                    </Link>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav" id="navbarNav">
                            <Link href="/stocks">
                                <a className="nav-link">Stocks</a>
                            </Link>
                            <Link href="/cryptocurrency">
                                <a className="nav-link">Cryptocurrency</a>
                            </Link>
                            <Link href="/technology">
                                <a className="nav-link">Technology</a>
                            </Link>
                            <Link href="/login">
                                <a className="nav-link"><span>Login</span></a>
                            </Link>
                        </div>
                    </div>
                    <button className="hamburger-btn__container" id="mobileMenu">
                        <div className="hamburger-btn__line"></div>
                        <div className="hamburger-btn__line"></div>
                        <div className="hamburger-btn__line"></div>
                    </button>
                </div>
                
            </nav>
            <hr></hr>
            <div className="navbar-mobile__menu">
                    <div className="container">
                        <Link href="/stocks">
                            <a className="mobile-menu__link">Stocks</a>
                        </Link>
                        <Link href="/cryptocurrency">
                            <a className="mobile-menu__link">Cryptocurrency</a>
                        </Link>
                        <Link href="/technology">
                            <a className="mobile-menu__link">Technology</a>
                        </Link>
                        <Link href="/login">
                            <a className="mobile-menu__link">Login</a>
                        </Link>
                    </div>
                </div>
        </header>
    )
}
export default Header;