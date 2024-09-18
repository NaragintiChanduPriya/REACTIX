import laptop from '../assets/laptop.jpg'


const About = () => {
  return (
<div className='about' id="about">
   <div className='img'>
    <img src={laptop} alt="laptop image"/>
   </div>
   <div className='h-fit'>
    <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
    <h3 className='about-title'>Manage Data Analytics Centrally</h3>
    <p className='about-content'>Elevate your React projects with our integrated analytics platform, providing real-time data management and analysis at your fingertips.Our React agency’s central analytics solution transforms complex data into actionable intelligence, driving growth and efficiency across your operations.</p>
   <button className="btn-black mb-5">Get Started</button>

   </div>
</div>
  )
}

export default About