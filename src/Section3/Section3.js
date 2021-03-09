import React from 'react';
import './Section3.css';

import "aos/dist/aos.css";

import AnimatedNumber from "react-animated-number";

export default class Section3 extends React.Component{

	 state = {
    value: 150,
    duration: 1000

  };


  formatValue = value => value.toFixed(0);



    render(){
           
           return(
                  <div className="section3" data-aos="fade-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    offset="30">

                           <div className='insec3' >

                                 <div className="icons">   

                                       
                               
                                        
                                        <div className="mid4" data-aos="flip-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    offset="30">
                                    

                                           
                                                <i className="fas fa-chart-line"></i>

                                           <div className="num2">

                                               <AnimatedNumber className="am"
                                                value={400}
                                                 speed={1000}
                                                formatValue={(value) => (value.toFixed(0))}
                                                duration={10000}
                                              />
                                           </div>


                                           <div className="lf">

                                              Business Partners
                                           </div>


                                       </div>



                               
                                        
                                        <div className="mid4" data-aos="flip-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="200"
    offset="30">
                                    

                                           <i className="far fa-heart"></i>  

                                           <div className="num2">

                                                                <AnimatedNumber className="am"
                    									          value={5000}

                    									          speed={1000}
                                                formatValue={(value) => (value.toFixed(0))}
                                                duration={10000}
                    									        />
                                           </div>


                                           <div className="lf">

                                             Happy Patients
                                           </div>


                                       </div>

                                             


                                        
                                        <div className="mid4" data-aos="flip-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="300"
    offset="30" >
                                    

                                           <i className="far fa-book"></i>

                                           <div className="num2">

                                                                <AnimatedNumber className="am"
                                                value={500}

                                               speed={1000}
                                                formatValue={(value) => (value.toFixed(0))}
                                                duration={10000}
                                              />
                                           </div>


                                           <div className="lf">

                                              Number Of Staffs
                                           </div>


                                       </div>




                                                     
                                        
                                        <div className="mid4" data-aos="flip-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="400"
    offset="30" >
                                    

                                            <i className="far fa-tooth"></i> 

                                           <div className="num2">

                                                                <AnimatedNumber className="am"
                                                value={450}

                                                speed={1000}
                                                formatValue={(value) => (value.toFixed(0))}
                                                duration={10000}
                                              />
                                           </div>


                                           <div className="lf">

                                              Doctors
                                           </div>


                                       </div>



									


                                           


                                               
                                   



                           </div>


</div>



                  </div>                 

            );



    }



}