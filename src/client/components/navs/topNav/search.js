import React, { Component } from 'react';

class Search extends Component {
    render() {

    const NavformStyle = {
        padding: " 0 2em",
        width: "30rem",
        borderRadius: "20rem",
        marginTop: ".5em"
    }

        return (
            <ul className="nav ml-4 navbar-nav ">
            <li className="nav-item mr-4 d-none d-lg-block">
            <form className="form-inline mx-2 w-100 d-inline">
              <input className="form-control mr-sm-2 " style={NavformStyle}  type="search" placeholder="Search for students" aria-label="Search" />                    
          </form>
            </li>
          </ul>
        );
    }
}

export default Search;
