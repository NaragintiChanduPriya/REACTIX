import './Hero.css'
import {ReactTyped} from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
        <div className="hero">
          <p className='text-[#00df9a] font-bold p-2'>ACCELERATING WITH INTELLIGENT ANALYTICS</p>
          <h1 className='main-text'>Grow with Data.</h1>
          <p className='stylyingp'>
            Dynamic,Fast,Fexible for <ReactTyped className='stylyingp' strings={["B2B","B2C","SAAS"]} typeSpeed={100}  loop />
          </p>
          <p className="sub-text">Optimize your analytics strategy to amplify profits for B2B, B2C, and SaaS models.</p>
          <button className='btn'>Get Started</button>
        </div>    
    </div>
  )
}

export default Hero