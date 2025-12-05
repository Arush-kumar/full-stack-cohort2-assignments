const reels = [
  {
    username: "john_doe",
    likeCount: 1200,
    isLiked: false,
    commentCount: 150,
    caption: "Enjoying the sunset!",
    video: "./reels/video1.mp4",
    userprofile: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    shareCount: 80,
    isFollowed: true
  },
  {
    username: "emma_21",
    likeCount: 5400,
    isLiked: true,
    commentCount: 320,
    caption: "Morning vibes ✨",
    video: "./reels/video2.mp4",
    userprofile: "https://images.pexels.com/photos/18047455/pexels-photo-18047455.jpeg",
    shareCount: 210,
    isFollowed: false
  },
  {
    username: "travel_with_raj",
    likeCount: 8700,
    isLiked: false,
    commentCount: 430,
    caption: "Exploring the mountains 🏔️",
    video: "./reels/video3.mp4",
    userprofile: "https://images.pexels.com/photos/31750447/pexels-photo-31750447.jpeg",
    shareCount: 300,
    isFollowed: true
  },
  {
    username: "foodielife",
    likeCount: 3200,
    isLiked: true,
    commentCount: 110,
    caption: "Street food hits different 😋",
    video: "./reels/video4.mp4",
    userprofile: "https://images.pexels.com/photos/8043714/pexels-photo-8043714.jpeg",
    shareCount: 95,
    isFollowed: false
  },
  {
    username: "musiclover",
    likeCount: 4400,
    isLiked: true,
    commentCount: 200,
    caption: "My new favorite beat 🎶",
    video: "./reels/video5.mp4",
    userprofile: "https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg",
    shareCount: 150,
    isFollowed: true
  },
  {
    username: "tech_guru",
    likeCount: 1500,
    isLiked: false,
    commentCount: 70,
    caption: "Trying out the latest gadget 🔥",
    video: "./reels/video6.mp4",
    userprofile: "https://images.pexels.com/photos/8424940/pexels-photo-8424940.jpeg",
    shareCount: 40,
    isFollowed: false
  },
  {
    username: "fit_with_sara",
    likeCount: 9800,
    isLiked: true,
    commentCount: 510,
    caption: "Leg day workout! 💪",
    video: "./reels/video7.mp4",
    userprofile: "https://images.pexels.com/photos/25232982/pexels-photo-25232982.jpeg",
    shareCount: 330,
    isFollowed: true
  },
  {
    username: "artsy_mind",
    likeCount: 2500,
    isLiked: false,
    commentCount: 95,
    caption: "New painting is here 🎨",
    video: "./reels/video8.mp4",
    userprofile: "https://images.pexels.com/photos/5998465/pexels-photo-5998465.jpeg",
    shareCount: 60,
    isFollowed: false
  },
  {
    username: "coder_x",
    likeCount: 4100,
    isLiked: true,
    commentCount: 180,
    caption: "Debugging all night 💻",
    video: "./reels/video9.mp4",
    userprofile: "https://images.pexels.com/photos/7898464/pexels-photo-7898464.jpeg",
    shareCount: 120,
    isFollowed: true
  },
  {
    username: "nature_snapper",
    likeCount: 6700,
    isLiked: false,
    commentCount: 270,
    caption: "Captured this beauty 🌿",
    video: "./reels/video10.mp4",
    userprofile: "https://images.pexels.com/photos/13869790/pexels-photo-13869790.jpeg",
    shareCount: 260,
    isFollowed: false
  },

];

// Rendering reels to DOM
var sum = ''
reels.forEach(function(elem){
  sum = sum + `<div class="reel">
          <video autoplay loop muted src="${elem.video}"></video>

          <div class="bottom">
            <div class="user">
    
              <img
                src="${elem.userprofile}"
                alt="">
              <h4>${elem.username}</h4>
              <button>${elem.isFollowed?"Following":"Follow"}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>

          <div class="right">
            <div class="like">
              <h4 class="like-icon">${elem.isLiked?`<i class=" love ri-heart-fill"></i>`:`<i class="ri-heart-line"></i>`}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="more">
              <h4 class="more-icon"><i class="ri-more-line"></i></h4>
            </div>
          </div>
        </div>`
})

var allReels = document.querySelector('.all-reels')
allReels.innerHTML = sum;