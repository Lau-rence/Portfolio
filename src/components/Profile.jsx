import { Box, HStack, Heading, Image, Text, VStack} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";

const Profile = () => {
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
                <VStack width={['20%','20%','70%','70%','70%']}>
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