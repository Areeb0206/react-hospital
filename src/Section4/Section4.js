import React from 'react';
import './section4.css';

import "aos/dist/aos.css";


export default class Section4 extends React.Component{



    render(){
           
           return(
                  <div className="section4" data-aos="fade-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    offset="40">

                      <div className="insec4">
                            <div className="sec4clip1"></div>
                        
                            <div className="sec4clip3"></div>

                            <div className="head">Offers For You</div>
                            <div className="topboxes">
                                 <div className="box1" data-aos="zoom-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    offset="30">
                                      <div className="box-icon1"></div>
                                      <div className="box-icon2">  
                                         <h1>Cancer treatment</h1>
                                         <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </h2>
                                      </div>

                                       
                                 </div>
                                 <div className="box2" data-aos="zoom-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    offset="30">
                                   <div className="box2-icon1"></div>
                                      <div className="box2-icon2">  
                                         <h1>Heart Treatment</h1>
                                         <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </h2>
                                      </div>


                                 </div>

                            </div>

                          

                            <div className="bottomboxes">
                               

                                 <div className="box3" data-aos="zoom-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="100"
    offset="30">


                                   <div className="box3-icon1"><i className="far fa-heart"></i></div>
                                      <div className="box3-icon2">  
                                         <h1>Facial Procedured</h1>
                                         <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </h2>
                                      </div></div>


                                 <div className="box4" data-aos="zoom-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="200"
    offset="30">

                                   <div className="box4-icon1"><i className="far fa-heart"></i></div>
                                      <div className="box4-icon2">  
                                         <h1>Skin Care</h1>
                                         <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </h2>
                                      </div>

                                 </div>

                            </div>
                              
                              

                      </div>




                  </div>                 

            );



    }



}