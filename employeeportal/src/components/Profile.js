import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const Profile = () => {
    const [profileData, setProfiledata] = useState()
    const {id} = useParams() 
    const profiles = useSelector((state) => state.empSlice.employees)
    
    useEffect(() => {
        let temp = profiles.filter((profile) => {
            return profile.id == id
        })  

        setProfiledata(temp[0])

        // axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        // .then((res) => {
        //     if(res) {
        //         setProfiledata(res.data)
        //     }
        // })
    }, [id])

    return(
        <div>
            <h2>Employee profile {id}</h2>
            {profileData ? 
            <div>
                <p>Username: {profileData.username} </p>
                <p>Name: {profileData.name}</p> </div> :
            "Loading"}
            
        </div>
    )
}