import './services.css'
import single from '../../assets/single.png'
import double from '../../assets/double.png'
import triple from '../../assets/triple.png'

const Services = () => {
  return (
    <div className="services" id="services">
        <div className="single">
           <img src={single} className='service-img' alt="" />
           <h2 className='user-text'>Single User</h2>
           <p className='amount'>$149</p>
           <div>
            <p className='service-text'>500 GB Storage</p>
            <p className='service-text'>1 Granted User</p>
            <p className='service-text'>Send Upto 2GB</p>
            <button className='btn-black my-5'>Start Trail</button>
           </div>
           
                  
        </div>
        <div className="double bg-gray-100">
           <img src={double} className='service-img' alt="" />
           <h2 className='user-text'>Double User</h2>
           <p className='amount'>$349</p>
           <div>
            <p className='service-text border-b-white'>1500 GB Storage</p>
            <p className='service-text border-b-white'>5 Granted User</p>
            <p className='service-text border-b-white'>Send Upto 10GB</p>
            <button className='btn my-5'>Start Trail</button>
           </div>
           
        </div>
        <div className="triple">

           <img src={triple} className='service-img' alt="" />  
            <h2 className='user-text'>Triple User</h2>
           <p className='amount'>$649</p>
           <div>
            <p className='service-text'>4500 GB Storage</p>
            <p className='service-text'>10 Granted User</p>
            <p className='service-text'>Send Upto 15GB</p>
            <button className='btn-black my-5'>Start Trail</button>
           </div>
              
        </div>
    </div>
  )
}

export default Services