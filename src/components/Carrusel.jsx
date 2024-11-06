import Carrusel1 from "../img/carousel-1.jpg"
import Carrusel2 from "../img/carousel-2.jpg"

const Carrusel = () => {
    return (
        <div className="container-fluid px-0 mb-5">
            <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={Carrusel1} alt="Image" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10 text-start">
                                        <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">18 Años
                                            de Experiencia</p>
                                        <h1 className="display-1 text-white mb-5 animated slideInRight">Mantenimiento que se siente, 
                                        confianza que se construye</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src={Carrusel2} alt="Image" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-10 text-start">
                                        <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">18 Años
                                            de Experienia</p>
                                        <h1 className="display-1 text-white mb-5 animated slideInRight">Donde el servicio 
                                        se encuentra con la excelencia</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Carrusel