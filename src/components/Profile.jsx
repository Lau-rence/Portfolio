import { Box, HStack, Heading, Icon, Image, Text, VStack} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare} from "react-icons/fa";

const Profile = () => {

    const socialAccounts=[
        {
            social: 'Linkedin',
            icon: FaLinkedin,
            link: 'https://www.linkedin.com/in/laurence-santos-478a8a258/'
        },
        {
            social: 'Github',
            icon: FaGithubSquare,
            link: 'https://github.com/Lau-rence'
        },
        {
            social: 'Facebook',
            icon: FaFacebookSquare,
            link: 'https://www.facebook.com/laurencecsantos/'
        },
    ]

    return ( 
        <Box 
            width={'100%'} 
            height={'max-content'}
        >
            <Box
                width={'100%'}
                height={'max-content'} 
                bgColor={'#475b67'}
                textAlign={'center'}
                position={'relative'}
                pt={'70px'}
                display={'Flex'}
                flexDirection={['column','column','row','row','row']}
                color={'#FFF'}
            >
                <Box
                    bgColor={'white'}
                    borderRadius={'1000px 100px 1000px 100px'}
                    px={['10px','20px','30px','30px','30px']}
                    pt={['10px','20px','30px','30px','30px']}
                    width={['100%','100%','40%','35%','30%']}
                    float={'right'}

                > 
                     <Image
                        width={'100%'}
                        src={'laurence.png'} 
                        height={'auto%'}
                    ></Image>
                </Box>
                <Box
                    spacing={1}
                    width={['100%','100%','60%','65%','70%']}
                >
                    <Box
                        width={'100%'}
                        height={'max-content'}
                        pt={['10px','10px','30px','30px','30px']}
                        px={'30px'}
                        pb={'10px'}
                    >
                        <Heading
                            fontSize={['30px','40px','50px','50px','50px']}
                            fontWeight={'bold'} 
                            fontFamily={'Poppins'} 
                        >
                            Laurence Canlas Santos
                        </Heading>
                        <Text
                            fontSize={'20px'}
                            fontFamily={'Poppins'} 
                        >
                            Junior Full-Stack Developer
                        </Text>
                        <HStack
                            mt={5}
                            fontSize={'16px'}
                            fontFamily={'Poppins'} 
                            justifyContent={'center'}
                            textDecoration={'underline'}
                        >
                            <Text>Download CV</Text>
                            <Text>View CV</Text>
                        </HStack>
                    </Box>
                    <Box
                        width={'100'}
                        display={'flex'}
                        justifyContent={'center'}    
                    >
                        <Box
                            width={'fit-content'}
                            bgColor={'#FFF'}
                            color={'#626262'}
                            p={10}
                            borderRadius={'10px'}
                            height={'max-content'}
                            display={'flex'}
                        >
                            {socialAccounts.map(info=>(
                                <a href={info.link} target='_blank'>
                                <Icon mx={2} as={info.icon} title={info.social} boxSize={'40px'} color={'#65737e'}/>
                                </a>
                            ))}
                        </Box>
                    </Box>
                    <Box
                        color={'#010001'} 
                        fontSize={'150px'} 
                        fontFamily={'Bebas Neue'}
                        fontWeight={'bold'} 
                        width={'100%'}
                    >
                        <Marquee
                            style={{
                                width: '100%',
                                height: '225px',
                            }}
                            autoFill
                        >
                                <Text
                                    mx={'30px'}
                                    color={'#201e1f'}
                                >
                                    WEB
                                </Text>
                                <Text color={'#FFF'}>
                                    DEVELOPER
                                </Text>
                        </Marquee>
                    </Box>
                </Box>
            </Box>
        </Box>
     );
}
 
export default Profile;