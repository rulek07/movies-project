import '../index.css';

function Header () {
    return <nav>
        <div className="nav-wrapper">
            <a href="!#" className="brand-logo">Movies, series and games !</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="!#">New</a></li>
                <li><a href="!#">Regitration</a></li>
            </ul>
        </div>
    </nav>     
}

export {Header};