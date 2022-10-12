import { Box, Button, Container, Flex, Text } from 'theme-ui';


function Auth(){

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
                            }}>
                            Create Account
                        </Button>
                    </Container>
                </Box>
                <Box sx={{
                    background:'yellow',
                    width:'100%',
                    height:'90%'
                }}>

                </Box>
            </Flex>
        </Flex>
    )


}

export default Auth;