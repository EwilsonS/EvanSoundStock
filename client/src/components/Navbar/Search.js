import React from "react";

const styles = {
    input: {
        borderColor: "#237c9a",
        boxShadow: "0 0 0 3px rgba(35,124,154, .25)"
    }
}

export const Search = props => (
    <div className="offset-md-6">
        <form className="form-inline mr-sm-2" action="GET" type="search" placeholder="Search">
            <span>
                <input className="form-control my-2 my-sm-0 bg-secondary text-light" type="search" style={styles.input} />
                <button className="btn btn btn-outline-info ml-2">Search</button>
            </span>
        </form>
    </div>
)