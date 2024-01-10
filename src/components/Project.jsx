import './Project.css';

function Project() {
    return (
        <>
            <section className="proyec" id="proyectos">
    <div className="container">
        <div className="titulo col-12">
            <h5 ></h5>
            <p className="texto" ></p>
        </div>
        <div className="proyectos">
            <div className="proye row ">

                <div className="sobre col-12 col-md-6">
                    <img className="proyImg"  alt="colorGame"/>
                </div>
                <div className="descriProyec col-12 col-md-6">
                    <h6></h6>
                    <p className="descri"></p>
                    <p className="descri"></p>
                    <p className="descri"></p>
                    <div className="botones">
                        <a className="btn"  target="_blank">Deploy</a>
                        <a className="btn"  target="_blank">GitHub</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
        </>
    )
}
export default Project;