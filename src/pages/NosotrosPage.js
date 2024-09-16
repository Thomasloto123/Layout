import React from "react";
import '../Styles/Components/Pages/NosotrosPage.css'

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Totem Records es un beatmaker epecializado en el genero urbano
                    que hoy en dia es uno de los mejores del mercado
                </p>

            </div>
            <div className="staff">
                <h2>staff</h2>
                <div className="persona">
                    <img src="img/RASTA 1.png" alt="Thomas" width="300"></img>

                    <h5>Thomas</h5>
                    <h6>Productor Musical</h6>
                    <p>Criado en argentina, Nacido en buenos aires</p>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;