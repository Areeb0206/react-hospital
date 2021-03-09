import React ,{ useEffect }from 'react';
import './header.css';
import Aos from "aos";
import "aos/dist/aos.css";

function Header(){
  
  useEffect(() => {
      Aos.init({
      }
      );

  } ,[]);	
   return(
      <div className="header1">
          <div className="header" data-aos="fade-up"
          data-aos-easing="ease-in-sine"
                              data-aos-duration='1500'
                              data-aos-once="false"
                              data-aos-offset="400">

              <div className="clip1"></div>
              <div className="clip2"></div>
              <div className="clip3"></div>
              <div className="clip4"></div>
              <div className="clip5"></div>
               <div className="clip7"></div>
              <div className="clip8"></div>
              <div className="clip9"></div>
              <div className="content">
                <div className="in" >
	              <div className="headertext" data-aos="fade-in" 
                data-aos-easing="ease-in-sine"
	                                      data-aos-duration='1500'
	                                      data-aos-once="false">
	                The best <span>doctor</span> gives the least medicines</div>
	              <div className="button"  data-aos="fade-in"
	                data-aos-duration='1500' data-aos-easing="ease-in-sine">
                      <button className="btn">Appointment
                      </button>


	                </div>
	             </div> 
              </div>
              <div className="image1"  data-aos="fade-in"   data-aos-duration='2000'></div>
           <div className="image2"  data-aos="fade-in"   data-aos-duration='2000'></div>
           
          </div>
      </div>

   	);


}
export default Header;