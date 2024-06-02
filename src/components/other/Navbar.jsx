import './Navbar.css';

export default function Navbar({ onSetDarkMode }) {
    return (
        <nav>
            <div className="container">
                {/* Logo image */}
                <img src={require("assets/images/logo.png")} alt="app logo" className="logo" />

                {/* Search bar */}
                <div className="search-bar">
                    <span className="material-icons-sharp">search</span>
                    <input type="search" placeholder="Search" />
                </div>

                <div className="profile-area">
                    {/* Theme toggle button */}
                    <div className="theme-btn" onClick={onSetDarkMode}>
                        <span className="material-icons-sharp active">dark_mode</span>
                        <span className="material-icons-sharp">light_mode</span>
                    </div>

                    {/* Profile section */}
                    <div className="profile">
                        <div className="profile-photo">
                            <img src={require("assets/images/profile-1.jpg")} alt="profile pic" />
                        </div>
                        <h5>Stephen</h5>
                        <span className="material-icons-sharp">expand_more</span>
                    </div>

                    {/* Menu button for smaller screens */}
                    <button id="menu-btn">
                        <span className="material-icons-sharp">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}