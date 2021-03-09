import React ,{ useEffect }from 'react';
import './Section1.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Parallax from 'react-rellax';
 




import { ProgressBar } from 'react-bootstrap';




function Section1(){
 

  useEffect(() => {
      Aos.init({
      }
      );

  } ,[]);	
   return(
      <div className="section1">
      <div className="insec1">

            <div className="leftsection" data-aos="fade-up"
                              data-aos-duration='2000'
                              data-aos-once="false" data-aos-easing="ease-in-sine"
                            
                              data-aos-offset="40">

                              <Parallax speed={1.5}>
                              <div className='section1clip1' >
                                   <div className="one" data-aos="zoom-in-up"
                                              data-aos-duration='2000'
                                              data-aos-once="false"
                                         data-aos-easing="ease-in-sine"
                                              data-aos-offset="100">About US</div>
                                   <div className="two" data-aos="zoom-out-up"
                                              data-aos-duration='2000'
                                              data-aos-once="false"
                                         data-aos-easing="ease-in-sine"
                                              data-aos-offset="100">Services</div>
                                   <div className="three"  data-aos="zoom-in-up"
                                   data-aos-easing="ease-in-sine"
                                              data-aos-duration='2000'
                                              data-aos-once="false"
                                              data-aos-delay="10"
                                              data-aos-offset="50">Department</div>
                                   <div className="four" data-aos="zoom-out-up"
                                   data-aos-easing="ease-in-sine"
                                              data-aos-duration='2000'
                                              data-aos-once="false"
                                              data-aos-delay="10"
                                              data-aos-offset="50">testimonials</div>

                                   <div className="five" data-aos="zoom-in-up"
                                              data-aos-duration='2000'
                                              data-aos-once="false"
                                         data-aos-easing="ease-in-sine"
                                              data-aos-offset="10">make An appointment</div>

                              </div>
                              </Parallax>

             </div> 

             <div className="rightsection" 
               data-aos="zoom-in-down"
                              data-aos-duration='2000'
                              data-aos-once="false"
                         data-aos-easing="ease-in-sine"
                              data-aos-offset="50">

                <div className="heading"  data-aos-offset=" 160"
                                          data-aos="fade-up"
                                          data-aos-duration='2000'
                                          data-aos-once="false"
                                          data-aos-easing="ease-in-sine">                                          
                     <div className="about" >About</div>
                     <div className="inabout">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra maecenas accumsan lacus vel</div>
                     <div className="info"  data-aos="zoom-in-up"
                                              data-aos-duration='2000'
                                              data-aos-once="false"
                                         data-aos-easing="ease-in-sine"
                                              data-aos-offset="10">

                                              <div className="progressbars">
                                                           <div className="progressone">
                                                          
                                                                Experienced Doctors
                                                               <ProgressBar now={50} />
                                                            </div>
                                                                <div className="progresstwo">
                                                          
                                                               Modern Equipment
                                                               <ProgressBar now={75} />
                                                            </div>    <div className="progressthree">
                                                          
                                                               Clean Environment
                                                               <ProgressBar now={99} />
                                                            </div>




                                              </div>
                   </div>

                </div>
            </div>
            </div>
      </div>

   	);


}
export default Section1;