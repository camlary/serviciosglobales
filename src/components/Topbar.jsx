import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Topbar = () => {
    return (
        <div class="container-fluid bg-dark px-0">
            <div class="row g-0 d-none d-lg-flex">
                <div class="col-lg-6 ps-5 text-start">
                    <div class="h-100 d-inline-flex align-items-center text-white">
                        <span>Follow Us:</span>
                        <a class="btn btn-link text-light" href=""><FaWhatsapp /></a>
                        <a class="btn btn-link text-light" href=""><FaInstagram /></a>
                        <a class="btn btn-link text-light" href=""><BsTelephoneFill /></a>
                    </div>
                </div>
                <div class="col-lg-6 text-end">
                    <div class="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                        <span class="fs-5 fw-bold me-2"><i class="fa fa-phone-alt me-2"></i>Contactanos:</span>
                        <span class="fs-5 fw-bold">+58(424)-419.05.57</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Topbar