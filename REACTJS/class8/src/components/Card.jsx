import Lower from "./Lower"
import Upper from "./Upper"

const Card = (props) => {
  return (
    <>
      <div className='card'>
        <Upper cardData={props.cardData} />
        <Lower cardData={props.cardData} />
      </div>
    </>
  )
}

export default Card
