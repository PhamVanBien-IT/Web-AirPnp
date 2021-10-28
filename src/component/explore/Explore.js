import React, { Component } from 'react'
import logo1 from '../../assets/images/home.svg'
import logo2 from '../../assets/images/restaurant.svg'
import logo3 from '../../assets/images/coffee.svg'
import logo4 from '../../assets/images/restaurant.svg'


export default class Explore extends Component {
    render() {
        return (
            <div className="container mt-5">
                <p className="title-explore"><span style={{ color: 'darkorchid' }}>Explore</span> AirPnP</p>
                <div className="row row-cols- row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card bg-light border border-3">
                            <img src={logo1} className="card-img-top w-25 mx-auto d-block mt-3" alt="Hotel" />
                            <div className="card-body">
                                <p className="card-title text-center fs-2">Hotels</p>
                                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-light border border-3">
                            <img src={logo2} className="card-img-top w-25 mx-auto d-block mt-3" alt="Restaurant" />
                            <div className="card-body ">
                                <p className="card-title text-center fs-2">Restaurant</p>
                                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-light border border-3">
                            <img src={logo3} className="card-img-top w-25 mx-auto d-block mt-3" alt="Coffee" />
                            <div className="card-body">
                                <p className="card-title text-center fs-2">Coffee</p>
                                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-light border border-3">
                            <img src={logo4} className="card-img-top w-25 mx-auto d-block mt-3" alt="Shopping" />
                            <div className="card-body">
                                <p className="card-title text-center fs-2">Card title</p>
                                <p className="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, velit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
