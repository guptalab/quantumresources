import React from "react"
import "./Footer.css"
import logo from '../Images/logo.jpeg';
const Footer = () => {
  return (
    <>
    
      
    
      <footer>
        <div className='container padding'>
          <div className='box logo2 '>
          <div className="logo">
          {/* <a href="https://www.guptalab.org/" target="_blank" rel="noopener noreferrer"></a> */}
            <img src={logo} alt="logo" ></img>
            </div>
            <a href="https://www.guptalab.org/" target="_blank" rel="noopener noreferrer"> <h1 style={{color:'black'}}>Gupta Lab</h1></a>
            <h2 style={{color:'#A9A9A9'}}>Laboratory of Natural Information Processing</h2>
            
           
           
          </div>
          <div className='box link'>
            <h3>Team</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/ankurdamor/">Ankur Damor</a></li>
              <li><a href="https://www.linkedin.com/in/dhruvin-patel-799a182a0/">Dhruvin Patel</a></li>
              <li><a href="https://www.linkedin.com/in/monil-rathod-3554ab2a1">Monil Rathod</a></li>
              <li><a href="https://www.linkedin.com/in/hardik-makwana-b303632a1/">Hardik Makwana</a></li>
              <li><a href="https://www.linkedin.com/in/prince-patil-a152652a1/">Prince Patil</a></li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
            <li><a href="https://www.guptalab.org/">Gupta LAB</a></li>
              <li><a href="https://www.youtube.com/c/ManishGuptamankg">YouTube</a></li>
              <li><a href="https://github.com/guptalab">GitHub</a></li>
              <li><a href="https://www.linkedin.com/company/guptalab/">Linkedin</a></li>
            </ul>
          </div>
         
          <div className='box last'>
            <h3>Disclaimer</h3>
            <ul>
            <li>
            <i className='fas fa-bolt'></i>  {/*icon has to be added*/}
                <p className="note">This is an ongoing project, and the website does not contain complete data. If you have any suggestions for adding data, please email us at the address below.</p>
              </li>
              <li>
              <i className='fas fa-envelope'></i>
                <a href="mailto:quantum_computing@guptalab.org">quantum_computing@guptalab.org</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Disclaimer">
        <p >The information provided on the webpage is for educational and research purposes. The webpage contains links to third-party website and we are not responsible for the privacy practices or content of these websites or the data that they provide. Please use it at your own risk. Last updated on December 7, 2023. For any further information or suggestion you may reach to us at <a href="mailto:quantum_computing@guptalab.org">quantum_computing@guptalab.org</a>.</p>
        </div>
      </footer>
    
    </>
  )
}

export default Footer
