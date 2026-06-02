import Card from './components/Card';
import  users  from './components/CardData.js';

const App = () => {



  return (
    <div className='min-h-screen lg:p-6 md:p-8 sm:p-4 pt-4"'>
      
      <div className='lg:px-10 md:px-12 sm:px-0
          grid
          gap-4
          justify-start
          [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
      '>
        {users.map((elem, idx) => {

          return <Card 
          key={idx}
          fullname={elem.fullname} 
          profile={elem.profile} 
          description={elem.description} 
          likeCount={elem.likeCount} 
          viewCount={elem.viewCount} 
          postCount={elem.postCount}/>

        })}


      </div>
    </div>
  )
}

export default App
