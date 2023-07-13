import React,{useRef, useState} from "react";
import './stylesheet.scss';
import { useNavigate } from "react-router";

const Register = (props)=>{
  const navigate = useNavigate();
  const errRef = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    setemail('')
    setPassword('')
    setRepassword('')
  }

  const handleSignIn=(e)=>{
    e.preventDefault();
    const to = "/login";
    navigate(to,  {replace: true});
  }

  return(
    <div className='auth-container'>
      <div className='partial-section'/>
        <div className='auth-form-container'>
        <div className='signup-container'>
          <div className='signup--actions'>
              <text>
                  Already have an account?
              </text>
              <button onClick={e=>handleSignIn(e)}>
                  Sign In
              </button>
          </div>
        </div>
        <div className='form-container'>
            <div className='form-fields-container'>
                <header>
                  Sign Up to Taskboard
                </header>
                <br/>
                <text ref={errRef}>{errorMessage}
                </text>
                <form className='form' onSubmit={(e)=>handleSubmit(e)}>
                    <label style={{
                        padding:'5px',
                        fontWeight:0
                    }} htmlFor="email" >
                        Username / Email
                    </label><br/>
                    <input style={{
                        width:'98%',
                        margin:'5px',
                        height:'35px',
                        fontSize:'14px',
                    }}
                    id = "email"
                    onChange={e=>setemail(e.target.value)}
                    value={email}
                    required
                    autoComplete='off'
                    />
                    <div className='password-container'>
                        <label style={{
                            padding:'5px',
                            fontWeight:0,
                        }}
                        htmlFor="password"
                        >
                            Password
                        </label>
                        <a style={{
                            minWidth:'140px',
                            textAlign:'end'
                        }}>
                            Forgot Password?
                        </a>
                    </div>
                    <input style={{
                        margin:'5px',
                        height:'35px',
                        width:'98%',
                        fontSize:'14px',
                    }} 
                    id="password"
                    type="password"
                    onChange={e=>setPassword(e.target.value)}
                    value = {password}
                    required
                    autoComplete='off'
                    />
                    <div className='password-container'>
                        <label style={{
                            padding:'5px',
                            fontWeight:0,
                        }}
                        htmlFor="password"
                        >
                            Re-enter Password
                        </label>
                    </div>
                    <input style={{
                        margin:'5px',
                        height:'35px',
                        width:'98%',
                        fontSize:'14px',
                    }} 
                    id="password2"
                    type="password"
                    onChange={e=>setRepassword(e.target.value)}
                    value = {repassword}
                    required
                    autoComplete='off'
                    />
                    <button sx={{
                        background:'#123E2C',
                        color:'#ffff',
                        margin:'5px',
                        fontWeight:0
                    }} type='submit'>Sign Up</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )

}

export default Register;