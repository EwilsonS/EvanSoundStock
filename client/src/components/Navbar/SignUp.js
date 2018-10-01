import React from "react"
// import { BrowserRouter as Link } from "react-router-dom";
import { Link } from "react-router-dom";



const styles = {
    dropdown: {
        backgroundColor: "rgb(2,24,58)",
        zIndex: 8000000,
        boxShadow: "3px 4px 8px 0px rgba(50, 50, 50, 0.20)"

    }
}

const SignUp = () =>
    <div className="nav-item dropdown">
        <button className="btn btn-info btn-sm nav-link dropdown-toggle m-0 mt-1 p-1 rounded-0" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Sign Up</button>
        <div className="dropdown-menu" style={styles.dropdown}>
            <br />
            <Link to="/artistSignUp" className="m-1">
                <button className="btn btn-info btn-sm m-1 rounded-0 ">Artist Sign Up</button>
            </Link>
            <Link to="/investorSignUp" className="m-1">
                <button className="btn btn-info btn-sm m-1 rounded-0">Investor Sign Up</button>
            </Link>
        </div>
    </div>

export default SignUp