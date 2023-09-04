import axios from "axios"
import { useEffect, useState } from "react"

const Login = () => {

    const [email, setEmail] = useState("test@test.com")
    const [password, setPassword] = useState()
    const [loginState, setLoginState] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem('token')) {
            setLoginState(true)
        }
    }, [])

    const loginHandler = () => {
        console.log(" called...")
        console.log(email, password)
        axios.post("https://reqres.in/api/login", {email, password})
        .then((res) => {
            console.log("Res: ", res)
            if(res.data.token) {
                sessionStorage.setItem('token', res.data.token)
                setLoginState(true)
            }
            
        })
      }
    return(
        <div>
            {loginState ? <h1>Welcome user</h1> : <div> <h1>Login</h1>
            <input type="email" placeholder="Enter email" onChange={(obj) => setEmail(obj.target.value)} value={email}></input>
            <input type="password" placeholder="Enter Password" value={password} onChange={(obj) => setPassword(obj.target.value)}></input>
            <button onClick={() => loginHandler()}>Login</button>
            </div>
        }
   
        </div>
    )
}

export default Login;