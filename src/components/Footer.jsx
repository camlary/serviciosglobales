import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Contactos y Ubicacion</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />Valencia,
             Carabobo, Venezuela</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+58(424)-419.05.57</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+58(424)-421.05.50</p>
            <p className="mb-2"><i className="fa fa-envelope me-3" />serviciosglobales.mc@gmail.com</p>
            <div className="d-flex pt-3">
              <a className="btn btn-square btn-primary rounded-circle me-2" href><i className="fab fa-twitter" /></a>
              <a className="btn btn-square btn-primary rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-square btn-primary rounded-circle me-2" href><i className="fab fa-youtube" /></a>
              <a className="btn btn-square btn-primary rounded-circle me-2" href><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Datos</h5>
            <a className="btn btn-link" href>Sobre Nosotros</a>
            <a className="btn btn-link" href>Mision</a>
            <a className="btn btn-link" href>Vision</a>
            <a className="btn btn-link" href>Contactos</a>
            <a className="btn btn-link" href>Valor</a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Horarios</h5>
            <p className="mb-1">Lunes a Viernes</p>
            <h6 className="text-light">07:00 am - 09:00 pm</h6>
            <p className="mb-1">Sabado</p>
            <h6 className="text-light">07:00 am - 07:00 pm</h6>
            <p className="mb-1">Domingo</p>
            <h6 className="text-light">Cerrado</h6>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer