import Card from './components/Card';

const App = () => {

const users = [
  {
    fullname: "Tony Stark",
    profile: "https://i.pinimg.com/1200x/7b/f1/de/7bf1de17be7683a05138b10c6c5cab71.jpg",
    description: "Genius billionaire inventor and armored Avenger.",
    likeCount: '9.8M',
    viewCount: '4.5M',
    coverImage: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
    postCount: 342
  },
  {
    fullname: "Steve Rogers",
    profile: "https://i.pinimg.com/1200x/96/ad/5b/96ad5b49f949e9c304485316bf4575e9.jpg",
    description: "Super soldier with unbreakable morals and a vibranium shield.",
    likeCount: '8.7M',
    viewCount:'3.9M',
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    postCount: 281
  },
  {
    fullname: "Thor Odinson",
    profile: "https://i.pinimg.com/736x/06/ce/c6/06cec625a46891edcede38e17638e918.jpg",
    description: "God of Thunder, wielder of Mjolnir and Stormbreaker.",
    likeCount: '92K',
    viewCount: '4.3M',
    coverImage: "https://images.unsplash.com/photo-1508615070457-7baeba4003ab",
    postCount: 310
  },
  {
    fullname: "Bruce Wayne",
    profile: "https://i.pinimg.com/736x/63/11/64/631164305c54c01d9f2b39edca46d3ec.jpg",
    description: "Dark Knight of Gotham, master strategist and detective.",
    likeCount: '1.1M',
    viewCount: '50M',
    coverImage: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
    postCount: 410
  },
  {          
    fullname: "Diana Prince",
    profile: "https://i.pinimg.com/736x/f9/45/3f/f9453f8c59c585709e032763a532b444.jpg",
    description: "Amazonian warrior princess and symbol of truth.",
    likeCount: '3.4M',
    viewCount: '36M',
    coverImage: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    postCount: 275
  },
  {
    fullname: "Peter Parker",
    profile: "https://i.pinimg.com/1200x/47/e5/a1/47e5a1b30951678c0d9639498d5e5a85.jpg",
    description: "Friendly neighborhood Spider-Man with spider-sense.",
    likeCount: '1.3M',
    viewCount: '61M',
    coverImage: "https://images.unsplash.com/photo-1520975922284-8b456906c813",
    postCount: 520
  },
  {
    fullname: "T'Challa",
    profile: "https://i.pinimg.com/736x/5e/16/5f/5e165f8557120f7008014003b13e4e2d.jpg",
    description: "King of Wakanda and protector through the Black Panther mantle.",
    likeCount: '76K',
    viewCount: '3.3M',
    coverImage: "https://i.pinimg.com/1200x/62/2f/6a/622f6a511b83f87127b0c2dff289ac33.jpg",
    postCount: 240
  },
  {
    fullname: "Clark Kent",
    profile: "https://i.pinimg.com/736x/3a/07/ab/3a07abeeb56703da16f8382eb6d80219.jpg",
    description: "Man of Steel with unmatched strength and compassion.",
    likeCount: '14M',
    viewCount: '72M',
    coverImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    postCount: 610
  },
  {
    fullname: "Natasha R.",
    profile: "https://i.pinimg.com/1200x/d0/59/63/d05963b072d683a3e182a14cc230fd2a.jpg",
    description: "Elite spy, assassin, and master tactician.",
    likeCount: '6.8M',
    viewCount: '280M',
    coverImage: "https://images.unsplash.com/photo-1517816428104-797678c7cf0b",
    postCount: 198
  },
  {
    fullname: "Barry Allen",
    profile: "https://i.pinimg.com/736x/91/1c/3e/911c3ebf47b45c5a8e1ba86ec37f0cfa.jpg",
    description: "Fastest man alive with control over the Speed Force.",
    likeCount: '8.2M',
    viewCount: '350M',
    coverImage: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    postCount: 265
  }
];


        // users.map(function(elem){

        //   console.log(elem.fullname);
        // })

        


  return (
    <div className='min-h-screen lg:p-6 md:p-8 sm:p-4 pt-4"'>
      <div className='lg:px-10 md:px-12 sm:px-0
          grid
          gap-4
          justify-start
          [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]
      '>
        {users.map((elem, idx) => {
          return <Card key={idx} fullname={elem.fullname} profile={elem.profile} description={elem.description} likeCount={elem.likeCount} viewCount={elem.viewCount} postCount={elem.postCount}/>
        })}
      </div>
    </div>
  )
}

export default App
