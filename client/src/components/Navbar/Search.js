import React from "react";
import { withRouter } from "react-router-dom";


const styles = {
    input: {
        borderColor: "#237c9a",
        boxShadow: "0 0 0 3px rgba(35,124,154, .25)",
    }
}

const Search = props => (
    <div className="offset-md-6">
        <form className="form-inline mr-sm-2"  type="search" placeholder="Search">
            <span>
                <input className="form-control h-25 bg-secondary text-light" type="search" style={styles.input} />
                <button className="btn btn-sm btn-outline-info bd-highlight">Search</button>
            </span>
        </form>
    </div>
)

export default withRouter(Search)