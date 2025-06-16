import './Principal.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Modalidad from './Modalidad';
import Modalito2 from './Modalito2';
import Modalito3 from './Modalito3';
import Modalito4 from './Modalito4';
import Modalito5 from './Modalito5';
import Barrita from './Barrita';


function Barramenu(props){
    return(
        <div className='miku'>
            <div>
                <h1>Actores mas buscados en Bolivia</h1>
            </div>
            <p>Estos son algunos actores del cine, mas buscados en Bolivia</p>
            <div className="cartilla">
                <div className="chiki1">
                    <img className="imagen" src="Leonardo.jpg" alt="" />
                    <div>Leonardo Dicaprio</div>
                </div>
                <div className='chiki2'>
                    <img className='imagen' src="Robert.jpg" alt="" />
                    <div>Robert  Downey Jr</div>
                </div>
                <div className='chiki3'>
                    <img className='imagen' src="Ryan.jpg" alt="" />
                    <div>Ryan Gosling</div>
                </div>
            </div>
        </div>
    );
}

function Peliculas(props){
    return(
        
        <div className="botones">
            <div>
                <h1>RESUMENES DE PELICULAS</h1>
            </div>
            <div>
               <p>Peliculas que consumen cierta parte de la poblacion de los jovenes en Bolivia</p> 
            </div>
            <div>
                <div className='peli3'>
                    <img  className="imagenP" src="posterMIB.jpg" alt="" />
                    <Modalidad></Modalidad>
                    <img  className="imagenP" src="posterMVT.jpg" alt="" />
                    <Modalito2></Modalito2>
                    <img  className="imagenP" src="posterYN.jpg" alt="" />
                    <Modalito3></Modalito3>
                </div>
                <div className='peli2'>
                    <img  className="imagenP" src="posterUVS.jpg" alt="" />
                    <Modalito4></Modalito4>
                    <img  className="imagenP" src="posterCED.jpg" alt="" />
                    <Modalito5></Modalito5>
                </div>
            </div>
        </div>
    );
}
function Principal(props)
{
    return(
        <div>
            <div className="titulo">
                <h1>Cinemateca Boliviana</h1>
            </div> 
            <div className="barra">
                <Barrita></Barrita>
            </div>           
            <div className='contenidop'>
                <Routes>
                    <Route path="/" element={<Barramenu></Barramenu>}></Route>
                    <Route path="/peliculas" element={<Peliculas></Peliculas>}></Route>

                </Routes>
            </div>
            <div className="piedp">
                <div className='piedp1'>Eduardo Roberto Pena Calle </div>
                <div className='piedp2'>Programacion Web II</div>

            </div>
            
        </div>
    );
}

export default Principal;