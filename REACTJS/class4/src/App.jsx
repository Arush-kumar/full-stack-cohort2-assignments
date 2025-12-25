import Navbar from './components/Navbar'
import './index.css'
const App = () => {

  const arr = ["Courses", "Bootcamp", "Classroom", "Profile"]
  

  return (
    <div className='h-screen w-full bg-black'>
      <Navbar title="Sheryians" color='Powderblue' links = {arr}/>
      <Navbar title="Apple" color='black' links = {["Apple", "IPhone", "IPad", "Store"]}/>
    </div>
  )
}

export default App
