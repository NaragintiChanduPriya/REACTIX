import './resource.css'

const Resource = () => {
  return (
    <div className="resource" id="resources">
        <div className=''>
        <h1 className='resource-head'>Want tips & tricks to optimize your flow?</h1>
        <p className='pb-5'>Sign up to our newsletter and stay up to date.</p>
        </div>
    <div>
        <input type="email" placeholder="Enter Email" className='input'/>
        <button className="btn">Notify Me</button>
        <p className='mt-3'>We care bout the protection of your data. Read our</p>
        <span className="text-[#00df9a]">Privacy Policy.</span>
    </div>
    </div>
    
  )
}

export default Resource