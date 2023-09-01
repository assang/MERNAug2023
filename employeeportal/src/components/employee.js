import { useEffect, useState } from "react";
import Address from "../Address";
import axios from 'axios'
import { Link } from "react-router-dom";

const Employee = () => {
    const [employees, setEmployees] = useState()

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if(res.status == 200) {
                setEmployees(res.data)
            }
        })
    },[])

    return(
        <div>
           <ul>
                {employees ? employees.map((emp) => {
                    return <li>Username:<Link to={'/employees/'+ emp.id}>  {emp.username}</Link> Email: {emp.email}</li>
                })
                : "Loading"}
           </ul>
        </div>
    )
}

export default Employee;