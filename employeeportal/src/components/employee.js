import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

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
            
           <ul>
                {employees ? employees.map((emp) => {
                    return <li key={emp.id}>Username:<Link to={'/employees/'+ emp.id}>  {emp.username}</Link> Email: {emp.email}</li>
                })
                : <h2>Please login to see data</h2>}
           </ul>
        </div>
    )
}

export default Employee