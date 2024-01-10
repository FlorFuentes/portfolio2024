import './AboutMe.css';
import Download from '../assets/pdf/FlorenciaFuentes.pdf';
function AboutMe() {


    return (
        <>
        <div id="sobreMi"></div> 
        <section className="acer">
        <div className="container a.s">
            <div className="sobre-mi">
            <h3  className="titulo">SOBRE MI</h3>
            <p  className="text-center">Aquí encontrará más información, lo que hago y mis habilidades actuales</p>
            </div>
            <div className="row">
            <div className="conoceme col-md">
                <h3>CONOCEME</h3>
                <p >¡Hola! Soy Florencia Fuentes, desarrolladora web Full Stack. Desde joven, las computadoras han despertado mi curiosidad y siempre he tenido un gran interés en aprender a programar. Fue en el año 2021 cuando decidí sumergirme de lleno en este fascinante mundo de la programación.</p>
                <p >Poco a poco, me aventuré en cursos especializados que me permitieron aprender a desarrollar sitios web. Dominé lenguajes como HTML, CSS y JavaScript, y adquirí conocimientos en el uso de frameworks como Angular.</p>
                
            </div>
        <div  className="cv col-md">
            <a download="FlorenciaFuentes" href={Download}>Download CV</a>
        </div>
            </div>
        </div>
        </section>
        </>
    )
}
export default AboutMe;