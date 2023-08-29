import { useRef, useState } from "react"

const Register = () => {

    const [email, setEmail] = useState("test@test.com")
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    // Ref
    // const emailRef = useRef()
    // const nameRef = useRef()
    // const passwordRef = useRef()

    const registerHandler = () => {
        console.log("registerHandler called...")
        console.log(email, name, password)
        //console.log(emailRef, emailRef.current)
        //console.log(emailRef.current.value, nameRef.current.value, passwordRef.current.value)
    }
    return(
        <div>
            <h1>Register</h1>
            <input type="email" placeholder="Enter email" onChange={(obj) => setEmail(obj.target.value)} value={email}></input>
            <input type="text" placeholder="Name" value={name} onChange={(obj) => setName(obj.target.value)}></input>
            <input type="password" placeholder="Enter Password" value={password} onChange={(obj) => setPassword(obj.target.value)}></input>
            <button onClick={() => registerHandler()}>Register</button>
        
            {/* <input type="email" placeholder="Enter email" ref={emailRef}></input>
            <input type="text" placeholder="Name" ref={nameRef}></input>
            <input type="password" placeholder="Enter Password" ref={passwordRef}></input>
            <button onClick={() => registerHandler()}>Register</button> */}
        </div>
    )
}

export default Register;