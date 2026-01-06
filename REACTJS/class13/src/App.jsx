import axios from 'axios'
const App = () => {

  const getData = async () => {
    const response = await axios.get('http://localhost:8000/data')
    console.log(response.data.data[0].username);

  }

  return (
    <div>
      <button onClick={getData}>Click</button>
    </div>
  )
}

export default App
