import { useEffect, useState , useRef, useContext} from 'react';
import AxiosAjax from '../network/axiosAjax';
import useAuth from '../helpers/hooks/useAuth';
import { useNavigate, useLocation } from 'react-router';

// import { encryptPass } from '../helpers/commonUtils/authUtils';
import { 
    Box, 
    Button, 
    Container, 
    Flex, 
    Text,
    Label,
    Input,
    Link
} from 'theme-ui';

const AUTH_LOGIN_URL = "/auth/login"  
const EMAIL_REGEX = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const axiosAjax = new AxiosAjax();

function Auth(){

    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const errRef = useRef();
    const [email, setemail] = useState("");
    const [validEmail, setValidEmail ] = useState(false);
    const [userFocus, setUserFocus] = useState();

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState();

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(()=>{
        setValidEmail(EMAIL_REGEX.test(email));
    },[email]);

    useEffect(()=>{
        setValidPassword(PWD_REGEX.test(password));
    },[password]);

    useEffect(()=>{
        setErrorMessage('');
    },[email,password]);

    const handleSubmit= async (event)=>{
        event.preventDefault();
        const isEmailValid = EMAIL_REGEX.test(email);
        const isPwdValid = PWD_REGEX.test(password);
        if(!isEmailValid || !isPwdValid){
            setErrorMessage('Invalid Entry');
            errRef.current.focus();
            return
        }

        try{
            const response = await axiosAjax.makeRequest(AUTH_LOGIN_URL,
                 'POST', 
                 {
                    email,
                    password
                 },
                 {
                    headers: {'contentType':'application/json'},
                    withCredentials:true
                 });
            if(response.status == 200){
                const user = response.data?.user;
                const token = response.data?.token;
                setemail('');
                setPassword('');
                setAuth({
                    user,
                    token
                });
                navigate( from, {replace: true});
            }
        }catch(err){
            if(!err?.response){
                setErrorMessage("No Server Reponse");
            }else if(err?.response.status == 401){
                const errorMsg = err.response.data?.message;
                setErrorMessage(errorMsg);
            }else{
                setErrorMessage("Login Failed");
            }
            errRef.current.focus();
        }
    }
    return(
        <Flex>
            <Flex
                sx={{
                    width:'25%',
                    background:'#123E2C', 
                    height:'100vh'
                }}>
            </Flex>
            <Flex
            sx={{
                width:'75%',
                height:'100vh',
                background:'transparent',
                flexDirection:'column'
            }}>
                <Box sx={{
                    width:'100%',
                    height:'10%',
                    display:'flex',
                    justifyContent:'end'
                }}>
                    <Container sx={{
                        alignSelf:'center',
                        display:'flex',
                        justifyContent:'end',
                        width:'95%',
                        padding:'2px',
                        alignItems:'center',
                        height:'100%',
                        fontSize:1
                    }}>
                        <Text sx={{
                            marginX:'10px'
                        }}>
                            Don't have an account? 
                        </Text>
                        <Button
                            sx={{
                                background:'#123E2C',
                                color:'#FFFF',
                                borderRadius:'4px',
                                fontWeight:1
                            }}>
                            Create Account
                        </Button>
                    </Container>
                </Box>
                <Box sx={{
                    width:'100%',
                    height:'90%',
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                }}>
                <Container sx={{
                    margin:'150px 400px 0 0',
                    width:'45%',               
                }}>
                    <Text sx={{
                        fontSize:5,
                        fontWeight:1,
                        padding:'5px'
                    }}>
                        Log into Taskboard
                    </Text>
                    <br/>
                    <Text sx={{
                        paddingX:'5px',
                        display:'block',
                        color:'#FF4E50',
                        paddingTop:'5px'
                    }} 
                    ref={errRef}>{errorMessage}</Text>
                    <Box sx={{
                        marginTop:'15px',
                        fontSize:1
                    }} as={"form"} onSubmit={(e)=>handleSubmit(e)}>
                        <Label sx={{
                            padding:'5px',
                            fontWeight:0
                        }} htmlFor="email" >
                            Username / Email
                        </Label>
                        <Input sx={{
                            margin:'5px',
                            height:'40px'
                        }} 
                        id = "email"
                        onChange={e=>setemail(e.target.value)}
                        value={email}
                        required
                        autoComplete='off'
                        />
                        <Container sx={{
                            display:'flex',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center'
                        }}>
                            <Label sx={{
                                padding:'5px',
                                fontWeight:0,
                            }}
                            htmlFor="password"
                            >
                                Password
                            </Label>
                            <Link sx={{
                                minWidth:'140px',
                                textAlign:'end'
                            }}>
                                Forgot Password?
                            </Link>
                        </Container>
                        <Input sx={{
                            margin:'5px',
                            height:'40px'
                        }} 
                        id="password"
                        type="password"
                        onChange={e=>setPassword(e.target.value)}
                        value = {password}
                        required
                        autoComplete='off'
                        />
                        <Button sx={{
                            background:'#123E2C',
                            color:'#ffff',
                            margin:'5px',
                            fontWeight:1
                        }} type='submit'>Sign In</Button>
                    </Box>
                </Container>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Auth;