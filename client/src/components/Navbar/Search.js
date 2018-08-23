import React from "react";
import { withRouter } from "react-router-dom";


const styles = {
    input: {
        borderColor: "#237c9a",
        boxShadow: "0 0 0 3px rgba(35,124,154, .25)",
    }
}

const Search = props => (
        <form className="form-inline mr-sm-2"  type="search" placeholder="Search">
            <span>
                <input className="form-control h-25 bg-secondary text-light rounded-0"size="20" type="text" style={styles.input} id="myInput" />
                <button className="btn btn-sm btn-outline-info bd-highlight rounded-0">Search</button>
            </span>
        </form>
)

export default withRouter(Search)