import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai";
import './Navbar.css'
import { useState } from "react";

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);


    }
  return (
    <div className="nav">
      <h1 className="logo"><a href="#">REACTIX.</a></h1>
      <ul className="nav-items">
        <li className="li"><a href="#">Home</a></li>
        <li className="li"><a href="#about">About</a></li>
        <li className="li"><a href="#resources">Resources</a></li>
        <li className="li"><a href="#services">Services</a></li>
        <li className="li"><a href="#contact">Contact</a></li>
      </ul>
      <div onClick={handleNav} className="sm:hidden">
        {nav?<AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
        
      </div>
      <div className={nav?'menu':'hidden'}>
      <h1 className="logo mt-10"><a href="#">REACTIX.</a></h1>
      <ul className="uppercase pt-8">
        <li className="p-4 border-b border-gray-600"><a href="#">Home</a></li>
        <li className="p-4 border-b border-gray-600"><a href="#about">About</a></li>
        <li className="p-4 border-b border-gray-600"><a href="#resources">Resources</a></li>
        <li className="p-4 border-b border-gray-600"><a href="#services">Services</a></li>
        <li className="p-4"><a href="#contact">Contact</a></li>
      </ul>

      </div>
     
    </div>
  );
};
export default Navbar;
 