import React from 'react'
import './Body.css'

const Body = () => {
    return (
      
        <div>
            <div class="noticia">
              <img class="izquierda" 
                src="https://www.ciudadregion.com/files/2015/05/IMAGEN_1430881200-1280x720.jpg"/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

              <h1 className = "TituloM">MISION</h1>

              <p className = "TextoM">El SENA está  encargado de cumplir la función que le corresponde al 
                Estado de invertir en el desarrollo social y técnico de los trabajadores 
                colombianos, ofreciendo y ejecutando la formación profesional integral, 
                para la incorporación y el desarrollo de las personas en actividades 
                productivas que contribuyan al desarrollo social, económico y tecnológico 
                del país (Ley 119/1994).​</p>

                <div class="reset"></div>

            </div>
          
              <br/>

            <div class="noticia">
              <img class="izquierda" 
                src="https://www.laguiademonteria.co/wp-content/uploads/2021/09/nuevos-cursos-SENA-2021.jpeg"/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

              <h1 className = "TituloV">VISION</h1>

              <p className = "TextoV">En el año 2022 el SENA se consolidará como una entidad 
              referente de formación integral para el trabajo, por su aporte a la empleabilidad, 
              el emprendimiento y la equidad, que atiende con pertinencia y calidad las necesidades 
              productivas y sociales del país.​</p>

                <div class="reset"></div>  

            </div>
        </div>
    )
}

export default Body

