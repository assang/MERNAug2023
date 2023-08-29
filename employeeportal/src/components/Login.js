import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState("test@test.com")
    const [password, setPassword] = useState()

    const registerHandler = () => {
        console.log("registerHandler called...")
        console.log(email, password)
      }
    return(
        <div>
            <h1>Login</h1>
            <input type="email" placeholder="Enter email" onChange={(obj) => setEmail(obj.target.value)} value={email}></input>
            <input type="password" placeholder="Enter Password" value={password} onChange={(obj) => setPassword(obj.target.value)}></input>
            <button onClick={() => registerHandler()}>Login</button>
   
        </div>
    )
}

export default Login;