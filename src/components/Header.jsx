import { darkLogo } from "../assets"
import { Link } from 'react-router'
import { navLinksRight, navLinksLeft } from "../constants"

const Header = () => {
  return (
    <header className='bg-white relative z-10 font-dmSans max-h-[150px]'>
      <div className='container flex items-center justify-center py-3 gap-16'>
         <nav className='flex gap-10 items-center'>
          {navLinksLeft.map((link) => (
            <Link to={link.href} className='text-dark font-semibold hover:text-red transition-all duration-200 text-base' key={link.title}>{link.title}</Link>
          ))}
        </nav>
        <Link to="/" className='block'>
          <img src={darkLogo} alt="logo" className="object-contain max-w-32"/>
        </Link>
        <nav className='flex gap-10 items-center'>
          {navLinksRight.map((link) => (
            <Link to={link.href} className='text-dark font-semibold hover:text-red transition-all duration-200 text-base' key={link.title}>{link.title}</Link>
          ))}
        </nav>
      </div>
    </header >
  )
}

export default Header