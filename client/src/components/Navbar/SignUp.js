import React from "react"
// import { BrowserRouter as Link } from "react-router-dom";
import { Link } from "react-router-dom";



const styles = {
    dropdown: {
        backgroundColor: "#02183a",
        zIndex:200000
    }
}

const SignUp = () =>
    <div className="nav-item dropdown">
        <button className="btn btn-info btn-sm nav-link dropdown-toggle m-1 p-1" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Sign Up</button>
        <div className="dropdown-menu" style={styles.dropdown}>
            <Link to="/artistSignUp" className="m-1">
                <button className="btn btn-info btn-sm m-1 ">Artist Sign Up</button>
            </Link>
            <Link to="/investorSignUp" className="m-1">
                <button className="btn btn-info btn-sm m-1 ">Investor Sign Up</button>
            </Link>
        </div>
    </div>

export default SignUp