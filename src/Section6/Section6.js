
import React from 'react';
import './Section6.css';

import "aos/dist/aos.css"

function Section6() {
 

  return (
    <div>
        
                <div className="section6">





                     <div className="insec6" data-aos="fade-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="100"
    offset="10">




                              <div className="sec6left" data-aos="zoom-in-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="200"
    offset="10">


                                   <div className="head1">We are here For You</div>


                                   <div className="head2">Make An Appointment</div>



                                   <form className="sec6form">
                                     <div className="top-input">
                                            <div className="name">
                                                     <label>Name</label>
                                                     <input placeholder="Your Full Name"/>
                                                 </div>
                                                
                                                <div className="email">
                                                     <label>Email</label>

                                                     <input placeholder="Email"/>
                                                 </div>

                                             </div>







                                      <div className="mid-input">
                                          <div className="number">
                                        

                                           <label>Number</label>
                                             <input placeholder="Phone Number"/>
                                         </div>

                                          <div className="app">
                                        

                                             <label>Appointment Date</label> 
                                             <input placeholder="dd-mm-yy"/>
                                            
                                          </div>

                                     </div>



                                       <div className="down-input">
                                        <div className="apptime">
                                        

                                           <label>Appointment-Time</label>
                                             <input placeholder="hr:min"/>
                                         </div>

                                          <div className="doctor">
                                        

                                             <label>Select a Doctor</label> 
                                             <select>
                                                 <option value="null"></option>
                                                  <option value="">Dr. XYX</option>
                                                   <option value="">Dr. XYX</option>
                                                    <option value="">Dr. XYX</option>


                                             </select>
                                            
                                          </div>

                                     </div>



                                       <div className="last-input">  <div className="number">
                                        

                                           <label>Message</label>
                                             <textarea  placeholder="Message"/>
                                         </div>

                                         

                                       </div>





                                  </form>

                                         <div className="mapbutton">

                                            <button>Submit</button>


                                       </div>


                              </div>


            



                              <div className="right" data-aos="zoom-in-down"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="400"
    offset="10">



                                     <div className="rightheading1">Learn Anything</div>
                                     <div className="rightheading2">We Offer Best Dental Services</div>
                                     <div className="three-cards">
                                            


                                              <div className="first-card">
                                                   <div className="first-card-logo"></div>
                                                   <div className="first-card-text">
                                                         <h1>Easy Booking</h1>
                                                         <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h2>


                                                   </div>




                                              </div>

                                               <div className="second-card">
                                                   <div className="second-card-logo"></div>
                                                   <div className="second-card-text">
                                                         <h1>Team Dentist</h1>
                                                         <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h2>


                                                   </div>




                                              </div>



                                                  <div className="third-card">
                                                   <div className="third-card-logo"></div>
                                                   <div className="third-card-text">
                                                         <h1>Best price Guarantee</h1>
                                                         <h2>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h2>


                                                   </div>




                                              </div>







                                     </div>









                              </div>



                     </div>



                </div>


      </div>
  );
}
export default Section6;