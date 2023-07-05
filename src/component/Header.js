import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <nav>
            <div className="nav-brand">TASK-TRACKER</div>
            <div className="nav-menu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Tasks</li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Header