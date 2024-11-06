import About1 from "../img/about-1.jpg"
import About2 from "../img/about-2.jpg"

const Nosotros = () => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="row gx-3 h-100">
                            <div className="col-6 align-self-start wow fadeInUp" data-wow-delay="0.1s">
                                <img className="img-fluid" src={About1} />
                            </div>
                            <div className="col-6 align-self-end wow fadeInDown" data-wow-delay="0.1s">
                                <img className="img-fluid" src={About2} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="display-5 mb-4">Sobre Nosotros</h1>
                        <p className="mb-4">Somos una empresa venezolana especializada en los servicios generales, limpieza,
                            pintura, construccion de obras civiles, ofreciendo nuestros servicios como contratista con personal
                            calificado, fijo o temporal. Aportamos soluciones a las necesidades del cliente, brindando un servicio
                            seguroy eficaz; cumpliendocon las espectativas de calidad y satisfaccion de nuetros clientes.
                        </p>
                        <div className="d-flex align-items-center mb-4">
                            <div className="flex-shrink-0 bg-primary p-4">
                                <h1 className="display-2">18</h1>
                                <h5 className="text-white">Años de</h5>
                                <h5 className="text-white">Experiencia</h5>
                            </div>
                            <div className="ms-4">
                                <p><i className="fa fa-check text-primary me-2" />Servicios Generales</p>
                                <p><i className="fa fa-check text-primary me-2" />Parques</p>
                                <p><i className="fa fa-check text-primary me-2" />Plazas</p>
                                <p><i className="fa fa-check text-primary me-2" />Areas Verdes</p>
                                <p><i className="fa fa-check text-primary me-2" />Aceras</p>
                                <p className="mb-0"><i className="fa fa-check text-primary me-2" />Edificios</p>
                                <p><i className="fa fa-check text-primary me-2" />Perforacion de Pozos Profundos</p>
                                <p><i className="fa fa-check text-primary me-2" />Calles</p>
                                <p><i className="fa fa-check text-primary me-2" />Pintura General</p>
                                <p><i className="fa fa-check text-primary me-2" />Plomeria</p>
                                <p><i className="fa fa-check text-primary me-2" />Herreria</p>
                                <p><i className="fa fa-check text-primary me-2" />Decoraciones Privadas</p>
                                <p><i className="fa fa-check text-primary me-2" />Refrigeracion</p>
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i className="fa fa-envelope-open text-white" />
                                    </div>
                                    <div className="ms-3">
                                        <p className="mb-2">Correo Electronico</p>
                                        <h5 className="mb-0">serviciosglobales.mc@gmail.com</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i className="fa fa-phone-alt text-white" />
                                    </div>
                                    <div className="ms-3">
                                        <p className="mb-2">Contactanos al</p>
                                        <h5 className="mb-0">+58(424)-419.05.57</h5>
                                        <h5 className="mb-0">+58(424)-421.05.50</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Nosotros