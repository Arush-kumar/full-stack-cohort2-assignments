import { createContext } from "react"

export const PostDataContext = createContext()

const PostContext = ({children}) => {

  const user = [
  {
    "userId": 1,
    "postId": 101,
    "username": "john_doe",
    "title": "Learning React Basics",
    "body": "React makes building UI components simple and reusable.",
    "likes": 120,
    "comments": 15
  },
  {
    "userId": 2,
    "postId": 102,
    "username": "emma_watson",
    "title": "JavaScript Async Explained",
    "body": "Promises and async/await help manage asynchronous code effectively.",
    "likes": 98,
    "comments": 10
  },
  {
    "userId": 3,
    "postId": 103,
    "username": "alex_kumar",
    "title": "Getting Started with Vite",
    "body": "Vite offers faster builds and instant hot module replacement.",
    "likes": 75,
    "comments": 8
  },
  {
    "userId": 4,
    "postId": 104,
    "username": "sophia_lee",
    "title": "Why Learn Data Structures?",
    "body": "Understanding data structures improves problem-solving skills.",
    "likes": 150,
    "comments": 20
  },
  {
    "userId": 5,
    "postId": 105,
    "username": "rahul_verma",
    "title": "My Journey into Web Development",
    "body": "Started with HTML, CSS, JavaScript and now exploring React.",
    "likes": 200,
    "comments": 30
  }
]


  return (
    <PostDataContext.Provider value={user}>
      {children}
    </PostDataContext.Provider>
  )
}

export default PostContext
