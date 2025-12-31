
const Lower = (props) => {
  console.log(props);
  
  return (
          <div className='lower'>
            <h2>{props.cardData.username}</h2>
            <h4>{props.cardData.email}</h4>
            <h3>{props.cardData.role}</h3>
          </div>
  )
}

export default Lower
