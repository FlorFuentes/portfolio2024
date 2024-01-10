import './Navbar.css';

import logoImage from '../assets/img/Florencia__tr.png';

function Navbar() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <>
            <div id="inicio"></div>
            <nav className="navbar navbar-expand-sm fixed-top" >
                <div className="container-fluid">
                    <a className="nav-logo" href="#inicio">
                        <img className="logo-img-navbar" src={logoImage} alt="Logo_Personal"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ms-auto align-items-center justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToSection('inicio')}>Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"  onClick={() => scrollToSection('sobreMi')}>Sobre mi</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  onClick={() => scrollToSection('habilidades')}>Habilidades</a>
                    </li >
                    <li className="nav-item">
                        <a className="nav-link"  onClick={() => scrollToSection('proyectos')}>Proyectos</a>
                </li >
            </ul >
        </div >
          </div >
        </nav >
        </>
    )
}
export default Navbar;