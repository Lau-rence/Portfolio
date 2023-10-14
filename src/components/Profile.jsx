import { Box, HStack, Heading, Icon, Image, Text, VStack} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare} from "react-icons/fa";

import resume from '../assets/CV_Santos, Laurence.pdf'

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
            id={'about'}
            width={'100%'} 
            height={'max-content'}
        >
            <Box
                width={'100%'}
                color={'#FFF'}
                display={'Flex'}
                bgColor={'#475b67'}
                textAlign={'center'}
                position={'relative'}
                height={'max-content'} 
                pt={['20px','20px','50px','50px','50px']}
                flexDirection={['column','column','row','row','row']}
            >
                <Box
                    float={'right'}
                    display={'flex'}
                    bgColor={'white'}
                    justifyContent={'center'}
                    px={['10px','20px','30px','30px','30px']}
                    pt={['10px','20px','30px','30px','30px']}
                    width={['100%','100%','40%','35%','30%']}
                    borderRadius={'1000px 100px 1000px 100px'}
                > 
                     <Image
                        height={'auto'}
                        src={'laurence.png'}
                        width={['80%','80%','100%','100%','100%']}
                    ></Image>
                </Box>
                <Box
                    spacing={1}
                    width={['100%','100%','60%','65%','70%']}
                >
                    <Box
                        px={'30px'}
                        pb={'10px'}
                        width={'100%'}
                        height={'max-content'}
                        pt={['10px','10px','30px','30px','30px']}
                        >
                        <Heading
                            fontWeight={'bold'} 
                            fontFamily={'Poppins'} 
                            fontSize={['30px','40px','50px','50px','50px']}
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
                            <a href={resume} download={'CV_Santos, Laurence'}>
                                <Text cursor={'pointer'}>Download CV</Text>
                            </a>
                        </HStack>
                    </Box>
                    <Box
                        width={'100'}
                        display={'flex'}
                        justifyContent={'center'}    
                    >
                        <Box
                            p={10}
                            bgColor={'#FFF'}
                            display={'flex'}
                            color={'#626262'}
                            borderRadius={'10px'}
                            width={'fit-content'}
                            height={'max-content'}
                        >
                            {socialAccounts.map(info=>(
                                <a
                                    target='_blank'
                                    href={info.link} 
                                >
                                    <Icon
                                        mx={2} 
                                        as={info.icon} 
                                        boxSize={'40px'} 
                                        color={'#65737e'}
                                        title={info.social} 
                                        _hover={{
                                            transform: 'translateY(-10px)',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    />
                                </a>
                            ))}
                        </Box>
                    </Box>
                    <Box
                        width={'100%'}
                        color={'#010001'} 
                        fontSize={['75px','75px','150px','150px','150px']} 
                        fontWeight={'bold'} 
                        fontFamily={'Bebas Neue'}
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
                                <Text
                                    color={'#FFF'}
                                >
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