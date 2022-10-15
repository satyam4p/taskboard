import { useEffect, useState } from 'react';
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


function Auth(){

    const [userEmail, setUserEmail] = useState();
    const [validEmail, setValidEmail ] = useState();
    const [userFocus, setUserFocus] = useState();

    const [password, setPassword] = useState();
    const [validPassword, setValidPassword] = useState();
    const [passwordFocus, setPasswordFocus] = useState();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const pass = event.target.password.value;
        
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
                    <Box sx={{
                        marginTop:'30px',
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
                        name = "email"
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
                        name="password"
                        type="password"
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