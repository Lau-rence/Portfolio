import { Box, HStack, Heading, Icon, Image, Text, VStack} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare} from "react-icons/fa";

const Profile = () => {

    const socialAccounts=[
        {
            social: 'Linkedin',
            icon: FaLinkedin,
            link: ''
        },
        {
            social: 'Github',
            icon: FaGithubSquare,
            link: ''
        },
        {
            social: 'Facebook',
            icon: FaFacebookSquare,
            link: ''
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
                bgColor={'#dadbe0'}
                textAlign={'center'}
                position={'relative'}
                pt={'70px'}
                color={'#010001'} 
                fontSize={'150px'} 
                fontFamily={'Bebas Neue'}
                fontWeight={'bold'}
                display={'Flex'}
            >
                <VStack
                    spacing={0}
                    width={['20%','20%','70%','70%','70%']} 
                >
                    <Box
                        width={'100%'}
                        height={'100px'}
                    >
                        <Heading>Hi, I'm Laurence Canlas Santos.</Heading>
                    </Box>
                    <Box
                        bgColor={'#FFF'}
                        color={'#626262'}
                        p={10}
                        borderRadius={'10px'}
                        height={'max-content'}
                        display={'flex'}
                    >
                        {socialAccounts.map(info=>(
                            <Icon mx={2} as={info.icon} title={info.social} boxSize={'40px'}/>
                        ))}
                    </Box>
                    <Box width={'100%'} display={['none','none','block','block','block']}>
                        <Marquee
                            style={{
                                width: '100%',
                                height: '225px',
                            }}
                            autoFill
                        >
                                <Text
                                    mx={'30px'}
                                    color={'#edb506'}
                                >
                                    WEB
                                </Text>
                                <Text color={'#FFF'}>
                                    DEVELOPER
                                </Text>
                        </Marquee>
                    </Box>
                </VStack>
                <Box
                    bgColor={'white'}
                    borderRadius={'100px 0px 0px 0px'}
                    px={'30px'}
                    pt={'30px'}
                    width={['80%','80%','30%','30%','30%']}
                > 
                     <Image
                        minWidth={'320px'}
                        maxWidth={'320px'} 
                        src={'laurence.png'} 
                        height={'auto'}
                    ></Image>
                </Box>
            </Box>
            <Box
                color={'#010001'} 
                fontSize={'150px'} 
                fontFamily={'Bebas Neue'}
                fontWeight={'bold'} 
                width={'100%'} 
                display={['block','block','none','none','none']}>
                <Marquee
                    style={{
                        width: '100%',
                        height: '225px',
                    }}
                 autoFill
                >
                    <Text
                        mx={'30px'}
                        color={'#edb506'}
                    >
                        WEB
                    </Text>
                    <Text color={'#0a0a0a'}>
                        DEVELOPER
                    </Text>
                </Marquee>
            </Box>
        </Box>
     );
}
 
export default Profile;