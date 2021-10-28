import React, { Component } from 'react'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'
import github from '../../assets/images/github.svg'


export default class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-color">
                <p className="text-white text-center fs-3">Follow Us</p>
                <p className="text-white text-center">Check out on social media for special offers</p>
                <div className="row">
                    <div className="d-flex justify-content-center mb-3">
                        <a href="!#"><img src={facebook} alt="facebook" className="img" /></a>
                        <a href="!#"><img src={instagram} alt="instagram" className="img" /></a>
                        <a href="!#"><img src={twitter} alt="twitter" className="img" /></a>
                        <a href="!#"><img src={github} alt="twitter" className="img"/></a>

                    </div>
                </div>
            </div>
        )
    }
}
