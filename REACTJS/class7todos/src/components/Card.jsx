
// const Card = (props) => {
//   // console.log(props);
  
//   return (
//     <div className="px-4 py-4 flex flex-wrap">
//       {
//           props.allUsers.map((user, idx)=>{
//             return (
//               <div key={idx} className="bg-gray-700 lg:bg-amber-300 md:bg-emerald-200 sm:bg-sky-200 m-4 p-6 rounded w-1/4 h-auto leading-tight">
//                 <img src={user.imageUrl} alt="" className="h-20 w-20 rounded-full mb-4 object-center object-cover"/>
//                 <h2 className="text-3xl font-semibold mb-2">{user.userName}</h2>
//                 <h3 className="text-base text-blue-400 font-semibold ">{user.userRole}</h3>
//                 <p className="text-sm font-medium leading-tight text-wrap">{user.userDescription}</p>

//                 <button onClick={()=>props.deleteHandler(idx)}
//                 className="px-4 py-2 rounded text-xs font-bold bg-red-500 mt-6 active:scale-95 cursor-pointer">Delete</button>
//               </div>
//             )
//           })
//         }
//     </div>
//   )
// }

// export default Card
