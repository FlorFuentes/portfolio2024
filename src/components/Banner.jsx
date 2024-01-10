import './Banner.css';

function Banner() {

    return (
        <>
            <section>
                <div className="banner">
                    <div className="container">
                        <div className="banner-principal">
                            <h1>Hola,soy Florencia Fuentes</h1>
                            <h2>Desarrolladora Web Full Stack Jr.</h2>
                            <div className="btn-contacto">
                                <a href="#contacto" className="btn btn--bg">Contacto</a>
                            </div>
                        </div>
                        <div className="FotoD" id="apartirdeaca">
                            <p>Foto por <a href="https://www.pexels.com/es-es/@lastly/" target="_black" rel="noopener noreferrer">Tyler Lastovich</a></p>
                        </div>
                    </div>
                </div>


            </section>
        </>

    )
}
export default Banner;