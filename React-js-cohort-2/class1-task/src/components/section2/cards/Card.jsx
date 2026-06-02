import './Card.css'
const Card = () => {
  return (
    <div className="cards">
      <div className="card1">
        <div className="card-top"><i className="ri-boxing-line"></i></div>
        <div className="card-center">
          <p>Professionals hard courts <span>with tournament-grade lighting & climate controls - play in </span>perfect conditions, <br/>in any season.</p>
        </div>

        <div className="card-bottom">
          <h3 className="toggle-btn tgl"><i className="ri-toggle-fill"></i> </h3>
          <h3>Game mode</h3>
        </div>
      </div>


      <div className="card2">
        <p>Private & Group Lessons</p>
      </div>

      <div className="card3">
        <div className="card3-top">
          <h2>100+</h2>
          <h3>Pro Coaches</h3>
          <div className="para">
            <p>Certified Professionals ready to boost your game</p>
            <p>and take your game to the next level</p>
          </div>
        </div>

        <div className="card3-bottom">
          <div className="div1">
            <p>Begginers</p>
            <div className="dot">
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
            </div>
            <p>55</p>
          </div>

          <div className="div2">
            <p>Intermediate</p>
            <div className="dot">
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
            </div>
            <p>40</p>
            </div>

          <div className="div3">
            <p>Advanced</p>
            <div className="dot">
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
              <i className="ri-circle-fill"></i>
            </div>
            <p>37</p></div>
        </div>

      </div>
    </div>
  )
}

export default Card
