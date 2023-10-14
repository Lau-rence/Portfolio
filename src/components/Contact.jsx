//Packages
import { Box, Button, FormControl, FormLabel, HStack, Heading, Input, Textarea, Flex, Text, VStack, Icon} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { BsFillEnvelopeFill, BsFillTelephoneFill  } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

const Contact = () => {

    const contact = [
        {
            icon: BsFillEnvelopeFill,
            title: 'Email',
            info: 'rencesantos14@gmail.com',
            description: 'rencesantos14@gmail.com'
        },
        {
            icon: BsFillTelephoneFill,
            title: 'Phone Number',
            info: '09476032653',
            description: '09476032653'
        },
        {
            icon: FaFacebookSquare,
            title: 'Facebook',
            info: 'https://www.facebook.com/laurencecsantos',
            description: 'Laurence Santos'
        },
        {
            icon: FaLinkedin,
            title: 'Linkedin',
            info: 'https://www.linkedin.com/in/laurence-santos-478a8a258/',
            description: 'Laurence Santos'
        }
    ]
    return ( 
        <Box
            py={'80px'}
            width={'100%'} 
            display={'flex'} 
            flexDir={'column'} 
            alignItems={'center'} 
        >
            <Box 
                mb={'50px'}
                width={'max-content'}  
            >
                <Heading 
                    fontSize={['40px','40px','60px','60px','60px']} 
                    color={'#475b67'}
                >
                    GET IN TOUCH
                </Heading>
                <Box 
                    width={'100%'} 
                    bgColor={'#475b67'} 
                    height={['5px','5px','10px','10px','10px']}
                />
            </Box>
            <HStack>
                
            </HStack>
            <Form>
                <Box
                    p={10}
                    bg={'#65737e'} 
                    width={'fit-content'} 
                    height={'max-content'}
                    borderRadius={'10px'} 
                >
                    <HStack>
                        <FormControl isRequired>
                            <FormLabel>First name:</FormLabel>
                            <Input
                                bgColor={'white'}
                                type={"text"}
                            ></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Surname:</FormLabel>
                            <Input
                                bgColor={'white'}
                                type={"text"}
                            ></Input>
                        </FormControl>
                    </HStack>
                    <FormControl isRequired>
                        <FormLabel>Email:</FormLabel>
                        <Input
                            bgColor={'white'}
                            type={"text"}
                        ></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Subject:</FormLabel>
                        <Input
                            bgColor={'white'}
                            type={"text"}
                        ></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Surname:</FormLabel>
                        <Textarea
                            bgColor={'#FFF'}
                            placeholder="Enter your message..."
                        ></Textarea>
                    </FormControl>
                    <Flex
                        my={5}
                        justify={'center'}
                    >
                        <Button
                            type={'submit'}
                            bgColor={'#343d46'}
                            color={'#FFF'}
                            width={'100%'}
                            fontSize={'20px'}
                        >Send</Button>
                    </Flex>
                </Box>
            </Form>
            <HStack width={'100%'}py={'40px'}>
                <Box border={'1px solid #65737e'} width={'100%'}></Box>
                <Text fontSize={'30px'} color={'#65737e'}>OR</Text>
                <Box border={'1px solid #65737e'} width={'100%'}></Box>
            </HStack>
            <VStack width={'100%'}>
                <Flex width={'100%'} justify={'center'} mb={'20px'}>
                    <Heading color={'#343d46'}>Contact Information</Heading>
                </Flex>
                <Box
                    width={'80%'}
                    color={'#FFF'}
                    display={'flex'}
                    flexDirection={['column','column','row','row','row']}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    {contact.map(info=>(
                        <Box
                            p={10} 
                            mb={'10px'}
                            height={'200px'} 
                            display={'flex'} 
                            cursor={'pointer'}
                            bgColor={'#475767'} 
                            alignItems={'center'}
                            borderRadius={'10px'}
                            flexDirection={'column'}
                            justifyContent={'space-between'}
                            width={['80%','100%','24%','24%','24%']} 
                        >
                                <Icon as={info.icon} boxSize={10}></Icon>
                                <Text
                                    textAlign={'center'}
                                >{info.title}</Text>
                                <Text
                                    textAlign={'center'}
                                >{info.description}</Text>
                        </Box> 
                    ))}
                </Box>
            </VStack>
        </Box>
     );
}
 
export default Contact;