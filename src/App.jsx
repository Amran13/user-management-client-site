import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } ,[])


  const addUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = {name, email}
    fetch('http://localhost:5000/users', {
      method : 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
      setUsers([...users, data])
      form.reset();
    })
  }

  return (
    <>
      <h1>User Management Client Site</h1>
      <div>
        {
          users.length
        }
        {
          users.map(user => <p key={user.id}> {user.name} </p>)
        }
        <div>
          {/* input field  */}
          <form onSubmit={addUser}>
            <input type="text" name="name" id="" />
            <br />
            <input type="email" name="email" id="" />
            <br />
            <input type="submit" value="add user" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App
