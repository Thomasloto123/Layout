import React from "react";
import '../Styles/Components/Pages/HomePages.css'

const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <img src="img/beat enigma.png" alt="foto de beat" width= '500'></img>
            </div>
            <div className="columnas">
                <div className="Bienvenidos izquierda">
                    <h2>Bienvenidos</h2>
                    <p>En esta Pagina encontraras los mejores beats para tus canciones, espero las disfrutes!</p>

                </div>
                <div className="testimonios derecha">
                    <h2>testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Lo mejor que e escuchado hace tiempo</span>
                        <span className="autor">Faustino Lopez</span>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default HomePage;