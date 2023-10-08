import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } ,[])

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

        </div>
      </div>
    </>
  )
}

export default App
