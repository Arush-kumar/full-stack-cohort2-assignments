import Men from './components/Men'
import Women from './components/Women'
import './index.css'
const App = () => {

  const user1 = {
    name: 'Bixi',
    age: 20,
    gender: "Male"
  }
  const user2 = {
    name: 'Shreya',
    age: 19,
    gender: "Female"
  }
  const user3 = {
    name: 'Anirudhra',
    age: 20,
    gender: "Male"
  }
  

  return (
    <div className='h-screen bg-black'>
      {user2.gender === 'Male' ? <Men /> : <Women />}
    </div>
  )
}

export default App
