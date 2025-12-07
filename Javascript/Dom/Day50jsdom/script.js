const reels = [
  {
    ismuted: true,
    username: "john_doe",
    likeCount: 1200,
    isLiked: false,
    commentCount: 150,
    caption: "Enjoying the sunset!",
    video: "./reels/video1.mp4",
    userprofile:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
    shareCount: 80,
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "emma_21",
    likeCount: 5400,
    isLiked: true,
    commentCount: 320,
    caption: "Morning vibes ✨",
    video: "./reels/video2.mp4",
    userprofile:
      "https://images.pexels.com/photos/18047455/pexels-photo-18047455.jpeg",
    shareCount: 210,
    isFollowed: false,
  },
  {
    ismuted: true,
    username: "travel_with_raj",
    likeCount: 8700,
    isLiked: false,
    commentCount: 430,
    caption: "Exploring the mountains 🏔️",
    video: "./reels/video3.mp4",
    userprofile:
      "https://images.pexels.com/photos/31750447/pexels-photo-31750447.jpeg",
    shareCount: 300,
    isFollowed: true,
  },
  {
    ismuted: true,
    username: "foodielife",
    likeCount: 3200,
    isLiked: true,
    commentCount: 110,
    caption: "Street food hits different 😋",
    video: "./reels/video4.mp4",
    userprofile:
      "https://images.pexels.com/photos/8043714/pexels-photo-8043714.jpeg",
    shareCount: 95,
    isFollowed: false,
  },
  {
    ismuted: true,
    username: "musiclover",
    likeCount: 4400,
    isLiked: true,
    commentCount: 200,
    caption: "My new favorite beat 🎶",
    video: "./reels/video5.mp4",
    userprofile:
      "https://images.pexels.com/photos/6996168/pexels-photo-6996168.jpeg",
    shareCount: 150,
    isFollowed: true,
  },
  
];
var allReels = document.querySelector('.all-reels')

function addData() {
  var sum = ''
  reels.forEach(function (elem, idx) {
    sum = sum + `<div class="reel">
          <video autoplay loop ${elem.ismuted ? 'muted' : ''} src="${elem.video}"></video>
          <div class="mute" id=${idx}>
          ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
      
    </div>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userprofile}"
                alt="">
              <h4 ismuted:true>${elem.username}</h4>
              <button id=${idx} class='follow'>${elem.isFollowed ? 'Unfollow' : 'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id=${idx} class="like">
              <h4 class="like-icon icon">${elem.isLiked ? '<i class="love ri-heart-3-fill"></i>' : '<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
  })

  allReels.innerHTML = sum
}

addData()


allReels.addEventListener('click', function (dets) {

  if (dets.target.className == 'like') {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    } else {
      reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false
    }

    addData()
  }
  if (dets.target.className == 'follow') {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true
    } else {
      reels[dets.target.id].isFollowed = false
    }

    addData()
  }

  if (dets.target.className == 'mute') {
    if (!reels[dets.target.id].ismuted) {
      reels[dets.target.id].ismuted = true
    } else {
      reels[dets.target.id].ismuted = false
    }
    addData()
  }

})
