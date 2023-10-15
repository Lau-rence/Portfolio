import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading, Image, UnorderedList,ListItem, Text, VStack } from "@chakra-ui/react";

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
        <Box
            py={'80px'}
            width={'100%'} 
            display={'flex'} 
            id={'experience'}
            flexDir={'column'} 
            alignItems={'center'}
        >
            <Box 
                mb={'50px'}
                data-aos="fade-up"
                width={'max-content'} 
            >
                <Heading 
                    fontSize={['40px','40px','60px','60px','60px']} 
                    color={'#475b67'}
                >
                    EXPERIENCE
                </Heading>
                <Box 
                    width={'100%'} 
                    bgColor={'#475b67'} 
                    height={['5px','5px','10px','10px','10px']}
                />
            </Box>
            {experience.map(info=>(
                <VStack 
                    width={'80%'}
                    data-aos="fade-right"
                >
                    <Box
                        padding={'10px'}
                        bgColor={'#65737e'}
                        width={'fit-content'}
                        height={'max-content'}
                        borderRadius={'400px'}
                    >
                        <Image
                            height={'auto'}
                            width={'400px'}
                            borderRadius={'400px'}
                            src="https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/327715974_1330444557798318_6810416811751437767_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGEIzRo3iI5HZ687KVpyQWk8cHQ1OCL12LxwdDU4IvXYkkqE0LhyUH36J2JiP_T7ln5kA60fi46-eavEIy8rKEh&_nc_ohc=oDCjQ6dqv0IAX_I2myb&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfAJ2monuBzWKCws8SpUdFxfmEmH9JyXQ_FwRDxjNl5-6Q&oe=652EBE73"
                        />
                    </Box>
                    <Text 
                        fontSize={'30px'} 
                        fontWeight={'bold'}
                        textAlign={'center'}
                    >
                        {info.role}
                    </Text>
                    <Text
                        fontSize={'25px'}
                    >
                        {info.who}
                    </Text>
                    <Text 
                        fontSize={'20px'}
                    >
                        {info.when}
                    </Text>
                    <Text 
                        fontSize={'18px'}
                        textAlign={'justify'}
                    >
                        {info.what}
                    </Text>
                    <Accordion allowMultiple width={['90%','60%','50%','40%','40%']}>
                        <AccordionItem>
                            <AccordionButton
                                color={'#FFF'}
                                bgColor={'#475767'}
                                _hover={{color: '#475767', bgColor: '#FFF'}}
                            >
                                <Box
                                    as="span" 
                                    flex='1' 
                                    textAlign='center'
                                >
                                    Show Responsibilities
                                </Box>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <UnorderedList>
                                    <ListItem>
                                        Translate Figma designs into functional websites.
                                    </ListItem>
                                    <ListItem>
                                        Resolve UI issues and bugs.
                                    </ListItem>
                                    <ListItem>
                                        Set up and configure local development environments.
                                    </ListItem>
                                    <ListItem>
                                        Implement button functionalities.
                                    </ListItem>
                                    <ListItem>
                                        Participate in Research and Development.
                                    </ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </VStack>
            ))}
        </Box>
     );
}
 
export default Experience;