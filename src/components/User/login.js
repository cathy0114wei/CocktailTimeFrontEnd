//我是充满抄袭痕迹的project!!!!!!!!!
import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import userService from "../../services/user-service";

const Login = ({user, setUser}) =>{
    const [credentials, setCredentials] = useState({username: '', password: ''})
    //const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');
    const history = useHistory();
    const [check, setCheck] = useState("");

    const onClickLogin = () => {
        userService.login(credentials)
            .then((user) => {
                console.log(user)
                if(user === 0) {
                    //alert("Login failed, please try again")
                    setCheck("check")
                } else {
                    setUser(user)
                    history.push(`/`)
                }
            })
    }

    return(
        <div>
            <div className="container">
                <h1>
                    Log In
                </h1>
                {
                    user &&
                    <>
                        <div className='alert alert-info'>
                            You're already logged in
                        </div>
                        <button className='btn btn-outline-secondary'
                                onClick={() => history.goBack()}>
                            Go Back
                        </button>
                    </>
                }
                {
                    !user &&
                    <>
                        <form>

                            <div>
                                {
                                    check === "check" &&
                                    <>
                                        <div className='alert alert-warning'>
                                            Please check your username and password again.
                                        </div>
                                    </>
                                }
                            </div>

                            <div className="form-group row">
                                <label htmlFor="username" className="col-sm-2 col-form-label">
                                    Username </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.username}
                                        onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                                        className="form-control"
                                        placeholder="username"></input>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="password" className="col-sm-2 col-form-label">
                                    Password </label>
                                <div className="col-sm-10">
                                    <input
                                        value={credentials.password}
                                        onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                                        type="password"
                                        className="form-control"
                                        placeholder="password"></input>
                                </div>
                            </div>




                        </form>
                    </>
                }
            </div>
        </div>
    )
}

export default Login