import React ,{ useEffect }from 'react';
import './Section2.css';
import Aos from "aos";
import "aos/dist/aos.css";




function Section2(){
  
  useEffect(() => {
      Aos.init({
      }
      );

  } ,[]);	
   return(
    <div className="sec2" data-aos="fade-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="0"
    offset="40">

      <div className="section2">
           <div className="section2clip1"></div>
           <div className="section2clip2"></div>
           <div className="top">Key Features</div>
           <div className="bottom">


           
               <div className="left">
                          <div className='lefttop'>
                            <div className="leftleft" data-aos="zoom-in-down"
                              data-aos-duration='1500'
                              data-aos-once="false"
                              data-aos-easing="ease-in-sine"
                              data-aos-delay="100"
                              data-aos-offset="30"> 

                                    <h1>100% safety</h1>
                                    <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h2>
                                   
                               </div>


                                         <div className="leftright" ><i className="far fa-bell" data-aos="zoom-in-down"
                                                                                                data-aos-duration='1500'
                                                                                                data-aos-once="false"
                                                                                                data-aos-delay="300"
                                                                                           data-aos-easing="ease-in-sine"
                                                                                                data-aos-offset="30"></i></div>

                          </div>
                          <div className='leftbottom' data-aos="zoom-in-up"
                                                    data-aos-duration='1500'
                                                    data-aos-delay="400"
                                                    data-aos-once="false"
                                               data-aos-easing="ease-in-sine"
                                                    data-aos-offset="30">
                                                      <div className="leftbottomleft"> 
                                    <h1>Friendly Doctors</h1>
                                    <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h2>
                                   
                               </div>
                               <div className="leftbottomright"><i className="far fa-heart"></i>


                               </div>


                          </div>
                          
                          </div>

        
               <div className="mid" data-aos="fade-in"
                              data-aos-duration='1500'
                              data-aos-delay='100'
data-aos-easing="ease-in-sine"
                              data-aos-once="false"
                         
                              data-aos-offset="300">
                    <div className="img"></div>
           

               </div>

               <div className="right" >

                        <div className='righttop' data-aos="zoom-in-down"
                              data-aos-duration='1500'
                              data-aos-once="false"
                              data-aos-delay="100"
                         data-aos-easing="ease-in-sine"
                              data-aos-offset="50">
                              <div className="rightleft">
                               <i className="far fa-images"></i>
                              </div>

                              <div className="rightright" data-aos="zoom-in-down"
                              data-aos-duration='1500'
                              data-aos-once="false"
                              data-aos-delay="200"
                         data-aos-easing="ease-in-sine"
                              data-aos-offset="50"> 
                                    <h1>Clean Environment</h1>
                                    <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h2>
                                   
                               </div>
                            
                        </div>
                          <div className='rightbottom' data-aos="zoom-in-up"
                              data-aos-duration='1500'
                              data-aos-once="false" data-aos-delay="300"
                         data-aos-easing="ease-in-sine"
                              data-aos-offset="50">

                              <div className="rightbottomleft">     <i className="far fa-stethoscope"></i>
                                <i></i>
                              </div>

                              <div className="rightbottomright" > 
                                    <h1>Medical Reasearch</h1>
                                    <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h2>
                                   
                               </div>


                          </div>
                          

               </div>
               











           </div>

      </div>
      </div>

   	);


}
export default Section2;