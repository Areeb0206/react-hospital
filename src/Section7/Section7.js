import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Section7.css";    

import "aos/dist/aos.css";

class Section7 extends React.Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="section7" data-aos="fade-up"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="100"
    offset="10">
         <div className="sec7-heading1">Testimonial</div>
         <div className="sec7-heading2">Happy Customers</div>
           <Slider className="slider" {...settings}>



          <div className="testimonial1">

                 <div className="first-testi">
                         <div className="twotesti" data-aos="flip-right"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="100"
    offset="10">
                         <div className="left-top-testi" >
                                 
                             <div className="first-testi-clip1"><i className="fas fa-quote-left"></i></div>
                             <div className="first-testi-clip2"> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  </p> </div>
                          </div>
                    
                          <div className="left-bottom-testi">

                            <div className="left-bottom-img"></div>
                            <div className="left-bottom-txt">
                              <h3>Mohd Areeb Safvi</h3>
                              <h4>Front End Developer</h4>

                            </div>

                           </div>
                           </div>

                           <div className="twotesti" data-aos="flip-right"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
    data-aos-delay="300"
    offset="10">
                         <div className="left-top-testi">
                                 
                             <div className="first-testi-clip1"><i className="fas fa-quote-left"></i></div>
                             <div className="first-testi-clip2"> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  </p> </div>
                          </div>
                    
                          <div className="left-bottom-testi">

                            <div className="left-bottom-img"></div>
                            <div className="left-bottom-txt">
                              <h3>Mohd Areeb Safvi</h3>
                              <h4>Front End Developer</h4>

                            </div>

                           </div>
                           </div>









                 </div>













          </div>







          <div className="testimonial2">
                                                                   <div className="first-testi">
                         <div className="twotesti">
                         <div className="left-top-testi">
                                 
                             <div className="first-testi-clip1"><i className="fas fa-quote-left"></i></div>
                             <div className="first-testi-clip2"> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  </p> </div>
                          </div>
                    
                          <div className="left-bottom-testi">

                            <div className="left-bottom-img"></div>
                            <div className="left-bottom-txt">
                              <h3>Mohd Areeb Safvi</h3>
                              <h4>Front End Developer</h4>

                            </div>

                           </div>
                           </div>

                           <div className="twotesti">
                         <div className="left-top-testi">
                                 
                             <div className="first-testi-clip1"><i className="fas fa-quote-left"></i></div>
                             <div className="first-testi-clip2"> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  </p> </div>
                          </div>
                    
                          <div className="left-bottom-testi">

                            <div className="left-bottom-img"></div>
                            <div className="left-bottom-txt">
                              <h3>Mohd Areeb Safvi</h3>
                              <h4>Front End Developer</h4>

                            </div>

                           </div>
                           </div></div>
                      

        
          </div>
          <div className="testimonial3">


           <div className="first-testi">
                         <div className="twotesti">
                         <div className="left-top-testi">
                                 
                             <div className="first-testi-clip1"><i className="fas fa-quote-left"></i></div>
                             <div className="first-testi-clip2"> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  </p> </div>
                          </div>
                    
                          <div className="left-bottom-testi">

                            <div className="left-bottom-img"></div>
                            <div className="left-bottom-txt">
                              <h3>Mohd Areeb Safvi</h3>
                              <h4>Front End Developer</h4>

                            </div>

                           </div>
                           </div>

                           <div className="twotesti">
                         <div className="left-top-testi">
                                 
                             <div className="first-testi-clip1"><i className="fas fa-quote-left"></i></div>
                             <div className="first-testi-clip2"> <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.  </p> </div>
                          </div>
                    
                          <div className="left-bottom-testi">

                            <div className="left-bottom-img"></div>
                            <div className="left-bottom-txt">
                              <h3>Mohd Areeb Safvi</h3>
                              <h4>Front End Developer</h4>

                            </div>

                           </div>
                           </div></div>
            
          </div>
        
        </Slider>
      </div>
    );
  }
}

export default Section7;