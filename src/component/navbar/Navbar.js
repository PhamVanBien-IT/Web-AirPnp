import React, { Component } from 'react'
import icon from '../../assets/images/align-justify.svg'

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-color">
                <div class="container-fluid">
                    <a class="navbar-brand mx-5 fw-bold fs-3 text-white" href="!#">AirPnP</a>
                    <button class="navbar-toggler bg-gradient" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "><img src={icon} alt="" /></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end me-5" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link text-white" href="home">Home</a>
                            <a class="nav-link text-white" href="search">Search</a>
                            <a class="nav-link text-white" href="!#">Explore</a>
                            <a class="nav-link text-white" href="!#">Andventures</a>
                            <a class="nav-link text-white" href="!#">Gellety</a>
                            <a class="nav-link text-white" href="!#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
