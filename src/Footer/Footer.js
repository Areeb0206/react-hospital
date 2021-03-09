import React from 'react';
import './Footer.css';

import "aos/dist/aos.css";


export default class Section4 extends React.Component{



    render(){
           
           return(
                  <div>

                          <div className="footer">

                                <div className="infooter">

                                         <div className="footerheading">Follow Us On</div>


                                         <div className="flex-icons">

                                                  <div className="fb"><a href="https://www.instagram.com/rkf786/"><i className="fab fa-instagram"></i></a></div>

                                                  <div className="fb"><a href="https://www.facebook.com/areeb.safvi/"><i className="fab fa-facebook-f"></i></a></div>

                                                  <div className="fb"><a href="https://www.linkedin.com/in/mohd-areeb-safvi-92602b1a2/"><i className="fab fa-linkedin"></i></a></div>




                                         </div>




                                </div>



                          </div>

                  </div>                 

            );



    }



}