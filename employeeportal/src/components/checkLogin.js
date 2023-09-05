import React from "react";
import Login from "./Login";

// function based HOC
// function checkLogin(Component) {
//     return function() {
//         return sessionStorage.getItem('token') ? <Component /> : <Login/>
//     }
// }

// export default checkLogin;

// class based HOC
const checkLogin = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                login: false
            }
        }
        componentDidMount() {
            if(sessionStorage.getItem('token')) {
                this.setState({login: true})
            } else {
                this.setState({login: false})
            }
        }
        render(){
            return this.state.login ? <Component /> : <Login/>
        }
    }
}

export default checkLogin