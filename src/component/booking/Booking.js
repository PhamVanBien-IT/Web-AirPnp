import React, { Component } from 'react'
import BookNow from '../../assets/images/check-square.svg'
export default class Booking extends Component {
    render() {
        return (
            <div className="container-fluid mt-5 bg-color">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button type="button" class="btn btn-lg btn-outline-white bg-white mt-3 mb-3 text-color" ><img src={BookNow} alt="" /> Large button</button>
                </div>
            </div>
        )
    }
}
