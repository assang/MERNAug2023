import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import initials from "./initialsHoc";
import {Table} from 'react-bootstrap'

const Employee = () => {
    const [employees, setEmployees] = useState()

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if(res.status === 200) {
                setEmployees(res.data)
            }
        })        
    },[])

    return(
        <div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Icon</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {employees ? employees.map((emp) => {
        return <tr key={emp.id}>
          <td>{emp.id}</td>
          <td>{initials(emp.username)()}</td>
          <td><Link to={'/employees/'+ emp.id}>{emp.username}</Link></td>
          <td>{emp.email}</td>
        </tr>
        })
        : <h2>Please login to see data</h2>}
      </tbody>
    </Table>
            
                {/* {employees ? employees.map((emp) => {
                    return <li key={emp.id}>Username
                    :<Link to={'/employees/'+ emp.id}> {emp.username} {initials(emp.username)()}</Link> Email: {emp.email}</li>
                })
                : <h2>Please login to see data</h2>} */}
        </div>
    )
}

export default Employee