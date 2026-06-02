import './index.css'
const App = () => {

  function btnClick(){
    console.log("btn clicked");
    
  }

  return (
    <div onClick={function()
      {
        btnClick();
      }
    }
      className='h-screen bg-black p-4'>
      <button className='bg-yellow-500 px-6 py-2 w-fit text-2xl rounded'>Click to Download</button>
    </div>
  )
}

export default App
