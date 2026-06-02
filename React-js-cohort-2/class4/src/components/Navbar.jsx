
const Navbar = (props) => {
  
  console.log(props);
  
  
  return (
    <div style={{backgroundColor: props.color}} className="flex
    items-center justify-between mb-4 px-8 py-3 bg-amber-700">
      <h3 className="text-2xl font-bold text-white">{props.title}</h3>
      <div className="flex gap-10 px-4 cursor-pointer text-white text-xl">
        
        {props.links.map((elem, idx)=>{
          return <h4 key={idx} className="text-sm">
              {elem}
            </h4>
        })}
  
      </div>
    </div>
  )
}

export default Navbar
