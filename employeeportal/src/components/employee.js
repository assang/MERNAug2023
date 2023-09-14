import { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";
import initials from "./initialsHoc";
import {Table} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { setEmployees, editSingleEmp} from "../empSlice";


const Employee = () => {
    const [editMode, setEditMode] = useState(false)
    const [empEdit, setEmpEdit] = useState({})

    const dispatch = useDispatch()
    const employees = useSelector((state) => state.empSlice.employees)


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if(res.status === 200) {
                //setEmployees(res.data)
                dispatch(setEmployees(res.data))
            }
        })        
    },[])

    const editClicked = (id) => {
      setEditMode(true)
      console.log("Id: ", id)
      let temp = employees.filter((emp) => {
        return emp.id == id
      })  
      setEmpEdit(temp[0])

    }

    const editFieldChanged = (e) => {
      if(e.target.name == "username") {
        let username = e.target.value
        setEmpEdit({...empEdit, username})
      }
      if(e.target.name == "email") {
        let email = e.target.value
        setEmpEdit({...empEdit, email})
      }
      
    }

    const saveClicked = () => {
     dispatch(editSingleEmp(empEdit))
     setEditMode(false)
    }

    return(
        <div>
         {editMode ? <div>
            Emp ID: <input disabled type="text" value={empEdit.id}/>
            Username: <input type="text" name="username" value={empEdit.username} onChange={(e) => editFieldChanged(e)}/>
            Email: <input type="email" name="email" value={empEdit.email} onChange={(e) => editFieldChanged(e)}/>
            <button onClick={saveClicked}>Save</button>
          </div>
          : null} 
          
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
          <td><button onClick={() => editClicked(emp.id)}>Edit</button></td>
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