import React, { Component } from 'react'
import email from '../../assets/images/mail.svg'
import checkIn from '../../assets/images/map-pin.svg'
import phone from '../../assets/images/phone-call.svg'
import emailBlack from '../../assets/images/mail_black.svg'




export default class Address extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="card bg-color">
                            <div className="card bg-color ">
                                <img src={email} className="card-img-top w-25 mx-auto d-block img" alt="Shopping" />
                                <div className="card-body">
                                    <p className="card-title text-center fs-4 text-white">AirPnP Address</p>
                                    <p className="card-text text-center text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sed praesentium delectus. Sit, mollitia quo. Veniam repellat voluptas ipsum doloremque?</p>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-3">
                            <div class="card-body">
                                <h5 class="card-title">Main Office</h5> <hr />
                                <p class="card-text ms-2">AirPnP Booking</p> <hr />
                                <p class="card-text"><img src={checkIn} alt="CheckIn"/> 123 Checkout rd, California, US</p> <hr />
                                <p class="card-text"><img src={phone} alt="phone"/> (800) 123-4567</p><hr />
                                <p class="card-text"><img src={emailBlack} alt="Email" /> booking@airpnp.com</p>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card bg-light ">
                            <div class="card-body ">
                                <p class="card-title fs-4 text-center text-color">Please fill out this form</p>
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputName1" class="form-label text-color">Name</label>
                                        <input type="text" class="form-control address-input" id="exampleInputName1" aria-describedby="nameHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label text-color">Email</label>
                                        <input type="email" class="form-control address-input" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPhone1" class="form-label text-color">Phone</label>
                                        <input type="text" class="form-control address-input" id="exampleInputPhone1" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputMessage1" class="form-label text-color">Message</label>
                                        <input type="text" class="form-control address-input" id="exampleInputMessage1" aria-describedby="messageHelp" />
                                    </div>
                                    <button type="submit" class="btn bg-color text-white w-25">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
