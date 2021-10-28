import React, { Component } from 'react'
import Anh1 from '../../assets//images/Anh1.png'
import Anh2 from '../../assets//images/Anh2.png'
import Anh3 from '../../assets//images/Anh3.png'
import Anh4 from '../../assets//images/Anh4.png'
import Anh5 from '../../assets//images/Anh5.png'
import Anh6 from '../../assets//images/Anh6.png'
import Anh7 from '../../assets//images/Anh7.png'
import Anh8 from '../../assets//images/Anh8.png'
import Anh9 from '../../assets//images/Anh9.png'
import Anh10 from '../../assets//images/Anh10.png'
import Anh11 from '../../assets//images/Anh11.png'
import Anh12 from '../../assets//images/Anh12.png'

export default class Gallery extends Component {
    render() {
        return (
            <div className="container mt-5">
            <p className="title-explore"><span style={{ color: 'darkorchid' }}>Photo</span> Gallery</p>
            <div className="row row-cols- row-cols-md-4 g-4">
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh1} className="card-img-top w-100 mx-auto d-block" alt="Hotel" />
                    </div>
                </div>
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh2} className="card-img-top w-100 mx-auto d-block" alt="Restaurant" />
                        
                    </div>
                </div>
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh3} className="card-img-top w-100 mx-auto d-block" alt="Coffee" />
                        
                    </div>
                </div>
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh4} className="card-img-top w-100 mx-auto d-block" alt="Shopping" />
                        
                    </div>
                </div>
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-white border border-3">
                        <img src={Anh5} className="card-img-top w-100 mx-auto d-block" alt="Shopping" />
                        
                    </div>
                </div>
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh6} className="card-img-top w-100 mx-auto d-block" alt="Shopping" />
                        
                    </div>
                </div>
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh7} className="card-img-top w-100 mx-auto d-block" alt="Shopping" />
                        
                    </div>
                </div>
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh8} className="card-img-top w-100 mx-auto d-block" alt="Shopping" />
                        
                    </div>
                </div>
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh9} className="card-img-top w-100 mx-auto d-block" alt="Shopping" />
                        
                    </div>
                </div><div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh10} className="card-img-top w-100 mx-auto d-block" alt="Shopping" />
                        
                    </div>
                </div><div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh11} className="card-img-top w-100 mx-auto d-block" alt="Shopping" />
                        
                    </div>
                </div>
                <div className="col-12 .col-sm-4 col-md-3 ">
                    <div className="card bg-light border border-3">
                        <img src={Anh12} className="card-img-top w-100 mx-auto d-block " alt="Shopping" />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
