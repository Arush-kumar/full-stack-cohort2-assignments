import { useState } from "react"

const SignupForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]:e.target.value
    })

  }


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(formData);
    // clear inputs
    setFormData({
      name: "",
      email: "",
      password: "",
    })
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <button>Signup</button>
      </form>

      <div id="card">
        <h2>{formData.name}</h2>
        <p>{formData.email}</p>
        <p>{formData.password}</p>
      </div>
    </>
    
  )
}

export default SignupForm
