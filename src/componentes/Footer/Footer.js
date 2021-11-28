import React from 'react'
import './EstiloF.css'

const Footer = () => {
    return (
  <div className = "main-footer">
    <div className = "container">
      <div className = "row">
        {/* column */}
        <div className = "col">
          <h4>CONTACTO</h4>
          <ul className = "list-unstyled">
            <li>Bogota: 3430111</li>
            <li>Resto del pais:</li>
            <li>018000910270</li>
          </ul>

        </div>
        {/* column2 */}
        <div className = "col">
          <h4>UBICACION</h4>
          <ul className = "list-unstyled">
            <li>Colombia</li>
            <li>CBI Palmira</li>
            <li> Calle 40 N° 30-44, Barrio Alfonso López</li>
          </ul>

        </div>
        {/* column3 */}
        <div className = "col">
          <h4>HORARIO</h4>
          <ul className = "list-unstyled">
            <li>Lunes a Viernes 7am a 7pm</li>
            <li>Sabados 8am a 1pm</li>
            <li></li>
          </ul>

        </div>
      </div>

      <hr />

      <div className = "row">
        <p className = "col-sn">
          &copy;{new Date().getFullYear()} Servicio Nacional de Aprendizaje | Todos los derechos reservados 2006/2014 | Terminos y servicios | Privacidad
        </p>
      </div>
      
    </div>

  </div>
    )
}

export default Footer
