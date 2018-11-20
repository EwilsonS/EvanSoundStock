import React from "react"
import { Link } from "react-router-dom";



// const styles = {
//     dropdownSignUp: {
//         // backgroundColor: "rgb(2,24,58)",
//         // zIndex: 80000000,
//         // boxShadow: "3px 4px 8px 0px rgba(50, 50, 50, 0.20)"

//     }
// }

const SignUp = () =>
    <div className="nav-item dropdown p-0 mt-2 signup-nav">
        <button className="btn btn-info btn-sm nav-link dropdown-toggle m-0 p-1" data-toggle="dropdown" href="#" aria-haspopup="true" aria-expanded="false">Sign Up</button>
        <div className="dropdown-menu">
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