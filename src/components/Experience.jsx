import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Experience = () => {
    const experience = [
        {
            who: '@Highly Succeed Inc.',
            what: 'Highly Succeed is a Philippines-based IT servicing and product company that specializes on a wide range of web based services. We are composed of professionals in graphic design, web development, custom application creation, and mobile application.',
            when: 'May 2023 - August 2023',
            role: 'Web Developer Intern',
        }
    ]
    return ( 
        <Box width={'100%'} display={'flex'} alignItems={'center'} flexDir={'column'} py={'100px'}>
            <Box width={'max-content'}  mb={'50px'}>
                <Heading fontSize={'60px'} color={'#475b67'}>EXPERIENCE</Heading>
                <Box width={'100%'} bgColor={'#475b67'} height={'10px'}></Box>
            </Box>
            {experience.map(info=>(
                <VStack width={'80%'}>
                    <Box
                        padding={'10px'}
                        height={'max-content'}
                        width={'fit-content'}
                        bgColor={'#65737e'}
                        borderRadius={'400px'}
                    >
                        <Image
                            src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/327715974_1330444557798318_6810416811751437767_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGEIzRo3iI5HZ687KVpyQWk8cHQ1OCL12LxwdDU4IvXYkkqE0LhyUH36J2JiP_T7ln5kA60fi46-eavEIy8rKEh&_nc_ohc=oDCjQ6dqv0IAX_I2myb&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfAJ2monuBzWKCws8SpUdFxfmEmH9JyXQ_FwRDxjNl5-6Q&oe=652EBE73"
                            height={'auto'}
                            width={'400px'}
                            borderRadius={'400px'}
                        />
                    </Box>
                    <Text fontSize={'30px'} fontWeight={'bold'}>{info.role}</Text>
                    <Text fontSize={'25px'}>{info.who}</Text>
                    <Text fontSize={'20px'}>{info.when}</Text>
                    <Text fontSize={'18px'}>{info.what}</Text>
                </VStack>
            ))}
        </Box>
     );
}
 
export default Experience;