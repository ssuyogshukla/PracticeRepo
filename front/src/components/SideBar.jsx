import { Link } from "react-router-dom"; // Import Link from react-router-dom

function SideBar() {
    return (
        <>
            <header className="p-3 mb-3 border-bottom">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use xlinkHref="#bootstrap"></use>
                            </svg>
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <Link to="/" className="nav-link px-2 link-dark">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="nav-link px-2 link-secondary">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="nav-link px-2 link-dark">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default SideBar;
