// Exercise 1 (very easy - warming up)
// ek function banao afterDelay 
// Requirements: 
// ye function do cheezein lega:
// Time (milliseconds)
// callback function 
// Given time ke baad callback call kare 
// callback ke andar "callback executed" print hona chahiye
// Use case socho: 
// 2 seconds ke baad ak kaam karna hai
// Goal: 
// samjhna ki callback delay ke baad kese execute hota hai
// ye setTimeout + callback connection hai


// function afterDelay(time, cb){
//   setTimeout(() => {
//     cb();
//   }, time);
// }

// afterDelay(2000, function(){
//   console.log("Callback Executed.");
  
// })



// Exercise 2: (Intermediate - data flow)
// ek function banao getUser 
// Requirements:
// username lega 
// 1 second ke baad callback ko ek object do 
// id 

// username
// then 
// cb ke andar ek aur function call karo getUserPosts

// getUserPosts: 
// userId lega 
// ek second ke baad user ko cb ko posts ka array de

// final output:
// user ka username print ho 
// user ka posts print ho


// function getUser(username, cb){

//   console.log("getting user details...");
  
//   setTimeout(() => {
//     cb({id: 1, username: "arushkumar"})
//   }, 1000);

// }

// function getUserPosts(id, cb){

//   console.log("getting user posts details...");

//   setTimeout(() => {
//     cb(["post1", "post2", "post3"])
//   }, 2000);
// }

// getUser("arushkumar", function(data){
//   getUserPosts(data.id, function(allposts){
//     console.log(data.username, allposts);
//   })
// })




// // Example
// function instagramSeDataLaao(username, cb){

//   setTimeout(() => {
//     cb({uniqueNum: 1212, username: "arush"})
//   }, 2000);
// }

// function metaSeDataLao(uniqueNum, cb){
//   setTimeout(() => {
//     cb(["img1", "img2", "img3"])
//   }, 4000);
// }

// instagramSeDataLaao("arushk", function(data){
//   metaSeDataLao(data.uniqueNum, function(images){
//     console.log(images);
//   })
// })



// Exercise 3 — Intermediate (Callback dependency — thoda painful)

// Task : Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// Flow:
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// Goal:
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai


function loginUser(){}
function fetchPermissions(){}
function loadDashboard(){}


loginUser("arush", function(userdata){
  fetchPermissions(userdata.id, function(permissions){
    loadDashboard(permissions, function(){
      console.log("permission loaded");
      
    })
  })
})