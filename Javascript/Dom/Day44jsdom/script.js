const btn  = document.querySelector('button')

btn.addEventListener('click', () => {

  const h1 = document.createElement('h1')
  h1.innerHTML = "Hello from js"
  document.body.appendChild(h1)
  console.log(h1);

})