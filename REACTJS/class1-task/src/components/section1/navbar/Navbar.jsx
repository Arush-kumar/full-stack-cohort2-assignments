import Button from '../button/Button'
import '../navbar/Navbar.css'


const Navbar = () => {
  return (
    <div className="nav">
      <h3 className='logo'>Horizon Courts</h3>
      <div className="nav-links">
        <a href="#" className='active'>About Us</a>
        <a href="#">Services</a>
        <a href="#">Couches</a>
        <a href="#">Events</a>
        <a href="#">Contacts</a>
      </div>
      <Button />
      
    </div>
  )
}

export default Navbar
