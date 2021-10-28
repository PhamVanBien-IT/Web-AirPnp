import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="container-fluid bg-info">
                <div class="d-flex justify-content-center">
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <form className="d-flex ">
                            <input className="form-control me-3" type="search" placeholder="Search for places ,hotel , ect ..." aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                </div>
            </div>
        )
    }
}
