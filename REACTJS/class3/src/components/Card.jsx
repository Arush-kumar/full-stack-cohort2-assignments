
const Card = (props) => {

  console.log(props);
  

  return (
    <div className="w-full bg-black card font-thin p-8 text-gray-500 text-5xl">
      <div className="h-fit w-fit p-8
      bg-amber-900"
      >Hello, I am {props.user}, {props.age}</div>
    </div>
  )
}

export default Card
