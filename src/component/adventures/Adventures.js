import React, { Component } from 'react'
import Cuba from '../../assets/images/Cuba.jpg'
import HaLong from '../../assets/images/HaLong.jpg'
import CostaRica from '../../assets/images/CostaRica.jpg'

export default class Adventures extends Component {
    render() {
        return (
            <div className="container-fluid mt-5 bg-light">
                 <div className="container">
                 <p className="title-explore"><span style={{ color: 'darkorchid' }}>AirPnP</span> Adventures</p>
                <div class="card-group">
                    <div class="card me-3">
                        <img src={Cuba} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="position-absolute top-50 text-white fs-4">CuBa</p>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto delectus?</p>
                        </div>
                    </div>
                    <div class="card me-3">
                        <img src={HaLong} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="position-absolute top-50 text-white fs-4">HaLong Bay</p>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto delectus?</p>
                        </div>
                        
                    </div>
                    <div class="card">
                        <img src={CostaRica} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <p class="position-absolute top-50 text-white fs-4">CostaRica</p>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas aliquid fugiat corporis laudantium, architecto delectus?</p>
                        </div>
                        
                    </div>
                </div>
                 </div>
            </div>
        )
    }
}
