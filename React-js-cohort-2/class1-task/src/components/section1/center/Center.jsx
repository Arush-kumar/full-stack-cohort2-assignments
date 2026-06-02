import '../center/Center.css'
const Center = () => {
  return (
    <div className='center'>
      <div className="center-container">
        <div className="main-headline">
          <h1>Unleash Your Inner Champion Today.</h1>
          <h1>All In One Place.</h1>
        </div>
        <div className="main-para">
          <p>Join the ultimate tennis experience - where passion meets performance.</p>
          <p>and every swings brings you closer to victory.</p>
        </div>
        <button className='main-btn' id='btn'>Start your own journey</button>

        <div className="foot-container">
          <div className="foot-left">
            <div className="para-div">
              <p>Train with real professionals.</p>
              <p>Get the real results.</p>
            </div>

            <div className='active'>
                <div className="img-div">
                  <img src="https://images.pexels.com/photos/6767251/pexels-photo-6767251.jpeg" alt="img1" />
                  <img src="https://images.pexels.com/photos/6077799/pexels-photo-6077799.jpeg" alt="img2" />
                  <img src="https://images.pexels.com/photos/26568583/pexels-photo-26568583.jpeg" alt="img3" />
                </div>
            </div>
          </div>

          <div className="foot-right">
            <p>Instagram<i className="ri-arrow-right-up-line"></i></p>
            <p>Facebook<i className="ri-arrow-right-up-line"></i></p>
            <p>Whatsapp<i className="ri-arrow-right-up-line"></i></p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Center
