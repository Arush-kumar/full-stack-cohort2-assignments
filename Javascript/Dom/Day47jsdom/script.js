const users = [
  {
    fullName: "Ananya Sharma",
    image: "https://plus.unsplash.com/premium_photo-1763734966578-2fdd2d5903ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
    profession: "Frontend Developer",
    description: "Passionate about modern JavaScript and responsive web design.",
    tags: ["JavaScript", "CSS", "React", "UI/UX"]
  },
  {
    fullName: "Karan Patel",
    image: "https://plus.unsplash.com/premium_photo-1693258698597-1b2b1bf943cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    profession: "Data Scientist",
    description: "Enjoys finding insights from data and building predictive models.",
    tags: ["Python", "Machine Learning", "Data Analysis"]
  },
  {
    fullName: "Priya Mehta",
    image: "https://images.unsplash.com/photo-1723437657875-db96dfe7630d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    profession: "UI Designer",
    description: "Loves creating clean and user-friendly interfaces.",
    tags: ["Figma", "Sketch", "Illustrator", "Wireframe"]
  },
  {
    fullName: "Rahul Verma",
    image: "https://plus.unsplash.com/premium_photo-1661774991416-ee14a1bc0d30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
    profession: "Backend Engineer",
    description: "Specializes in Node.js, APIs, and scalable systems.",
    tags: ["Node.js", "MongoDB", "APIs", "Express"]
  },
  {
    fullName: "Sneha Gupta",
    image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    profession: "DevOps Engineer",
    description: "Automates deployments and manages cloud infrastructure.",
    tags: ["AWS", "Docker", "CI/CD", "Kubernetes"]
  }
];


var sum = '';

users.forEach(function(user){
  sum = sum + `<div class="card">
      <img
        src="${user.image}"
        alt="img" id="image">
        
      <h3>${user.fullName}</h3>
      <h4>${user.profession}</h4>
      <p>${user.description}</p>
    </div>`
})

var main = document.querySelector("main");
main.innerHTML = sum;