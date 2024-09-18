import './Contact.css';
import { FaFacebookSquare,FaLinkedin,FaGithub } from "react-icons/fa";
import { FaSquareInstagram,FaXTwitter } from "react-icons/fa6";



const Contact = () => {
  return (
   <div className='contact' id='contact'>
    <div className='icon-box'>
    <h1 className='logo px-0'>REACT.</h1>
    <p className="py-3"> Partner with us to transform your digital presence and achieve unparalleled success.</p>
    <div className="icons">
    <FaFacebookSquare className='icon'/>
    <FaSquareInstagram className='icon'/>
    <FaXTwitter className='icon'/>
    <FaGithub className='icon'/>
    <FaLinkedin className='icon'/>
    </div>
    </div>
    <div className='contact-box'>
        <div>
            <h1  className='contact-head'>Solutions</h1>
            <p>Analytics</p>
            <p>Marketing</p>
            <p>Commerce</p>
            <p>Insights</p>
        </div>
        <div>
            <h1 className='contact-head'>Support</h1>
            <p>Pricing</p>
            <p>Docs</p>
            <p>Guides</p>
            <p>API Status</p>
        </div>
        <div>
            <h1 className='contact-head'>Company</h1>
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Careers</p>
        </div>
        <div>
            <h1 className='contact-head'>Legal</h1>
            <p>Claim</p>
            <p>policy</p>
            <p>Terms</p>
        </div>
    </div>

   </div>
  )
}

export default Contact