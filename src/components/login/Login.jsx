import { React, useState } from "react";
import {Typography} from '@material-ui/core'
import { authSignup , authLogin} from '../../service/api.js';
//styling
import './LoginStyle.css'
//scripting
import './LoginPage.js'

const signupIntVal = {
    email: '',
    password: '',
    confirm_password: '',
}


const loginIntVal = {
    email: '',
    password: ''
  }
const Login = () => {
    const [open, setOpen] = useState(true);
    const [signup, setSignup] = useState(signupIntVal);
    const [login, setLogin] = useState(loginIntVal);
    const [error,setError] = useState(false);
    // const [containerActive, setContainerActive] = useState(false);
    // const RegisterButton = () => {
    //     setContainerActive(true);
    //   };
    //   const LoginButton = () => {
    //     setContainerActive(false);
    //   };
    // const handleClose = () => {
    //     setOpen(false);
        
    // }

    // const signupUser = async () => {
    //     let response = await authSignup(signup);
    //     if(!response) return;
    //     handleClose();
    //     setAccount(signup.email);
    // }
    const signupUser = async () => {
        let response = await authSignup(signup);
        if(!response) return;
        setOpen(false);
    }

    const loginUser = async () => {
        let response = await authLogin(login);
        console.log("Login btn working");
        //Navigate('/home')
        if(!response) {
          setError(true);
          
          // return
        } else {
          
          console.log('Response error');
        }
        
    }
    // const loginUser = async () => {
    //     let response = await authenticateLogin(login);
    //     if(!response) {
    //         setError(true);
    //         return
    //     }
    //     handleClose();
    //     setAccount(login.email);
    // }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value});

    }
    
    
    return (
        <>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            
            <div className={ `${open}` && "login-reg-panel"} >
		        <div class="login-info-box" >
                    <h2 >Have an account?</h2>
                    <p>Ready Steady Go!!!</p>
                    <label id="label-register" for="log-reg-show"  >Login</label>
                    <input type="radio" name="active-log-panel" id="log-reg-show"  checked="checked" />
	        	</div>
							
                <div class="register-info-box" >
                    <h2>Don't have an account?</h2>
                    <p>Why not create one now!!!</p>
                    <label id="label-login" for="log-login-show" >Register</label>
                    <input type="radio" name="active-log-panel" id="log-login-show"  />
                </div>
							
                <div class="white-panel" >
                    <div class="login-show" >
                        <h2>LOGIN</h2>
                        <input onChange={(e) => onValueChange(e)}  name="email" type="text" placeholder="Email" />
                        <input onChange={(e) => onValueChange(e)}  name="password" type="password" placeholder="Password" />
                        { error && <Typography style={{color: 'red'}} >*Invalid username and password </Typography>  }
                        <input type="button" value="Login" onClick={() => loginUser()}/>
                        <a  href="/#">Forgot password?</a>
                    </div>
                    <div class="register-show" >
                        <h2>REGISTER</h2>
                        <input onChange={(e) => onInputChange(e)}  name="email" type="text" placeholder="Email" />
                        <input onChange={(e) => onInputChange(e)}  name="password" type="password" placeholder="Password" />
                        <input onChange={(e) => onInputChange(e)}  name="confirm_password" type="password" placeholder="Confirm Password" />
                        <input type="button" value="Register" onClick={() => signupUser()} />
                    </div>
                </div>
        	</div>
            
        </>

    )
}

export default Login;