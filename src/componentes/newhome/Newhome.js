import React from 'react'
import Button from '@restart/ui/esm/Button'
import { useHistory } from 'react-router-dom'
import './Newhome.css'
import Navb from '../nav/Navb'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {ProgressBar } from 'react-bootstrap'
import Footer from '../Footer/Footer'




const Newhome = () => {


    const me = 20;
    const me2 = 50;
    const me3 = 10;
    const me4 = 10;
    const me5 = 0;
    const me6 = 0;
    const me7 = 30;
    const me8 = 40;

    const progressInstance = <ProgressBar now={me} label={`${me}%`} />;
    const progressInstance2 = <ProgressBar now={me2} label={`${me2}%`} />;
    const progressInstance3 = <ProgressBar now={me3} label={`${me3}%`} />;
    const progressInstance4 = <ProgressBar now={me4} label={`${me4}%`} />;
    const progressInstance5 = <ProgressBar now={me5} label={`${me5}%`} />;
    const progressInstance6 = <ProgressBar now={me6} label={`${me6}%`} />;
    const progressInstance7 = <ProgressBar now={me7} label={`${me7}%`} />;
    const progressInstance8 = <ProgressBar now={me8} label={`${me8}%`} />;
    
    let History = useHistory();
    
    return (
<div className = "Prin">
        <div className = "CONT">
            <Navb/>
            <div className = "CONT2">
                <div className = "Chabil">
                    <div className = "TextoA">

                    <div className = "TituloH"><p className = "Habilidades">Acerca de mi</p></div>

                    <div className = "Pacerca"><p className = "Habilidades">Mi nombre es Cristian Andres Castaño Salas,
                        un joven de 19 años que busca adiquirir todo tipo de conocimientos en todas las areas de las
                        tecnologias de la informacion.
                    <br/>
                        Actualmente estoy estudiando en el Sena el curso de analisis y desarrollo de sistemas de informacion, 
                        en donde me estan enseñando a usar mySQL, Wordpress, ReactJs, ect.
                    <br/>
                        Soy un joven al que siempre le han gustado los videosjuegos y todo lo relacionado con el ambito
                        tecnologico, desde niño he querido ser programador y hacer mi propio aplicativo.
                    <br/>
                        Vivo con mis 2 padres y una tia, tengo 2 perros y deje el chisme muuchas gracias.</p></div>
                        </div>
                    <br/>

                    <div className = "row">
                        
                        <div  className = "col">
                            <img className = ""
                                alt=""
                                src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li className = "UBICACION">UBICACION</li>
                                <li><b>Palmira, Valle del cauca, Co</b></li>
                            </ul>
                        </div>
                        
                        {/* column2 */}
                         <div className = "col">
                            <img className = ""
                                alt=""
                                src="https://cdn-icons-png.flaticon.com/512/994/994598.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li className = "UBICACION">MENTALIDAD</li>
                                <li><b>Reflexion</b></li>
                            </ul>
                        </div>
                        {/* column3 */}
                        <div className = "col">
                            <img className = ""
                                alt=""
                                src="https://www.pngkey.com/png/full/931-9316323_collaboration-others-transprent-png-free-download-public-trabajo.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li className = "UBICACION">TRABAJO EN EQUIPO</li>
                                <li><b>Me gusta trabajar en equipo</b></li>
                            </ul>

                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col">
                            <img className = ""
                                alt=""
                                src="http://pngimg.com/uploads/gamepad/gamepad_PNG12.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li className = "UBICACION">VIDEOJUEGOS</li>
                                <li><b>Me gustan mucho los videojuegos</b></li>
                            </ul>
                        </div>
                        {/* column4 */}
                         <div className = "col">
                            <img className = ""
                                alt=""
                                src="https://ecoleyes.com/wp-content/uploads/2016/07/cursos.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li className = "UBICACION">APRENDER DIARIAMENTE</li>
                                <li><b>Veo muchos videos tutoriales</b></li>
                            </ul>
                        </div>
                        {/* column5 */}
                        <div className = "col">
                            <img className = ""
                                alt=""
                                src="https://cdn-icons-png.flaticon.com/512/201/201595.png"
                                width="150"
                                height="150"
                            />
                            <ul className = "list-unstyled">
                                <li className = "UBICACION">MECANICO INDUSTRIAL</li>
                                <li><b>Humberto Raffo Rivera</b></li>
                            </ul>
                        </div>
                    </div>

                    <br/>
                    <br/>
               
                    <div className = "Cbarras">

                        <div className = "TituloH"><p className = "Habilidades">Mis habilidades</p></div>
                        
                        <div className= "Conbarra2">
                            <div className = "Barra1">
                                <p className = "TextoP">Spring</p>
                                {progressInstance5}
                            </div>

                        <br/>

                            <div className = "Barra2">
                                <p className = "TextoP">PHP</p>
                                {progressInstance6}
                            </div>

                        <br/>

                            <div className = "Barra3">
                                <p className = "TextoP">SQL</p>
                                {progressInstance7}
                            </div>

                        <br/>

                            <div className = "Barra4">
                                <p className = "TextoP">Wordpress</p>
                                {progressInstance8}
                            </div>

                        </div>

                        <div className= "Conbarra">
                            <div className = "Barra1">
                                <p className = "TextoP">Javascript</p>
                                {progressInstance}
                            </div>

                        <br/>

                            <div className = "Barra2">
                                <p className = "TextoP">HTML</p>
                                {progressInstance2}
                            </div>

                        <br/>

                             <div className = "Barra3">
                                <p className = "TextoP">CSS</p>
                                {progressInstance3}
                            </div>

                        <br/>

                            <div className = "Barra4">
                                <p className = "TextoP">ReactJS</p>
                                {progressInstance4}
                            </div>

                        </div>
               
                    </div>

                </div>

                <div className = "CONTENEDOR">

                    <h1 className = "PERFIL">Perfil</h1>

                    <div>
                        <img className = "ImP"
                            alt=""
                            src="https://scontent.fclo2-1.fna.fbcdn.net/v/t1.6435-9/218299288_2940619986188929_884693858403485503_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=AnQSougbLwcAX-s3LFJ&tn=XXseg7TG568agyYG&_nc_ht=scontent.fclo2-1.fna&oh=43130f09a81add1bbf88085caea92e4a&oe=61756809"
                            width="180"
                            height="180"
                        />

                        <br/>
                        <br/>

                        <div className = "Iconos">
                            <a href = "https://www.linkedin.com/in/cristian-andres-castaño-salas-580608221" className = "linkedin"><i className="bi bi-linkedin" ></i></a>
                            <a href = "https://www.whatsapp.com/?lang=es" className = "whatsapp"><i className="bi bi-whatsapp" ></i></a>
                            <a href = "https://www.facebook.com/" className = "facebook"><i className="bi bi-facebook" ></i></a>
                            <a href = "https://www.instagram.com/" className = "instagram"><i className="bi bi-instagram"></i></a>
                        </div>

                        <br/>

                        <p className = "NOMBRE"><i class="bi bi-person"></i>Cristian Andres Castaño Salas</p>

                        <div className = "INFOB">
                            <div className = "col1">
                                <ul className = "list-unstyled">
                                    <li><p className = "FechaN"><i class="bi bi-calendar-date"></i>Jul 13, 2002</p></li>
                                    <li><p className = "UBIN"><i class="bi bi-geo-alt-fill"></i>Palmira, Colombia</p></li>
                                    <li><p className = "CORREON"><i class="bi bi-envelope"></i>cristian.0713.cs@gmail.com</p></li>
                                </ul>
                            </div>
                        </div>

                        <Button variant="outline-light" onClick = {()=>History.push('/home')} className =  "Bresumen">RESUMEN</Button>{' '}
                
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
    )
    
}


export default Newhome
