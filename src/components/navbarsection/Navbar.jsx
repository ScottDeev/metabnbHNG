import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavbarContent } from './NavbarContent'

export default function Navbar({handleClickPop}) {
  const [mobileMenu, setMobileMenu] = useState('top-[-100vh]')
  const handleClick =()=>{
    document.body.classList.toggle('overflow-hidden')
    mobileMenu === 'top-[-100vh]'? setMobileMenu('top-0'): setMobileMenu('top-[-100vh]')
  }
  return (
    <div className='w-full sm:px-[100px] 
    px-[10px]'>
    <nav className='text-white py-[20px] flex justify-between items-center'>
      <div>
        <img className='sm:h-[38px] h-[25px]' src={NavbarContent.logo} alt="" />
      </div>
      <div className='justify-between gap-[40px] text-[18px] items-center  flex '>
        <ul className='lg:flex justify-between sm:gap-[25px] gap-[10px] hidden'>
          {NavbarContent.links.map((l) => (
            <li key={l.id}>
              <NavLink to={l.link} end  className='text-black text-[20px]'>{l.tag}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className=''>
        <button onClick={() => handleClickPop()} className='sm:text-[16px] text-[12px] bg-[#A02279] sm:py-[15px] py-[8px] sm:px-[26px] px-[14px] rounded-[10px]'>Connect wallet</button>
      </div>
      <div className="space-y-2 cursor-pointer lg:hidden block" onClick={() => handleClick()}>
        <span className="block w-6 h-0.5 bg-[#000]"></span>
        <span className="block w-6 h-0.5 bg-[#000]"></span>
        <span className="block w-6 h-0.5 bg-[#000]"></span>
      </div>
    </nav>
    <nav className={`lg:hidden absolute h-screen w-screen ${mobileMenu} left-0  bg-[#0D0D2B] text-white justify-center z-30 transition-all duration-500 overflow-hidden`}>
      <div className=' gap-[32px] text-[18px] flex-col flex justify-center h-screen items-center relative'>
        <div className=" cursor-pointer block absolute top-[60px] right-[30px]" onClick={() => handleClick()}>
          <span className="block w-12 h-1 bg-[#ffff] rotate-45 translate-y-[10px] translate-x-[8px]"></span>
          <span className="block w-12 h-1 bg-[#ffff] -rotate-45 translate-y-[5px] translate-x-[8px]"></span>
        </div>
        <ul className='flex flex-col justify-between gap-[32px] justify-center items-center'>
          {NavbarContent.links.map((l) => (
            <li key={l.id}>
              <NavLink to={l.link}  end className='hover:bg-[#FFF301]  p-[10px] hover:text-black' href="#" onClick={() => handleClick()}>{l.tag}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </div>
  )
}