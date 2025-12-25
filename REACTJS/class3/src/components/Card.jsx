
const Card = (props) => {

  console.log(props);
  

  return (
    <div className="w-full bg-black card font-semibold p-8 text-gray-200 text-5xl">
      <div className="h-fit w-fit rounded-2xl p-8
      bg-amber-900"
      >{props.user}</div>
    </div>
  )
}

export default Card
