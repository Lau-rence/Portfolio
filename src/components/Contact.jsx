//Packages
import { 
    Box, 
    Button, 
    FormControl, 
    FormLabel, 
    HStack, 
    Heading, 
    Input, 
    Textarea, 
    Flex, 
    Text, 
    VStack, 
    Icon, 
    useToast
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { BsFillEnvelopeFill, BsFillTelephoneFill  } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import axios from 'axios'
import { useState } from "react";


const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const toast = useToast();

    const contact = [
        {
            icon: BsFillEnvelopeFill,
            type: 'Email',
            info: 'rencesantos14@gmail.com',
            description: 'rencesantos14@gmail.com'
        },
        {
            icon: BsFillTelephoneFill,
            type: 'Phone Number',
            info: '09476032653',
            description: '09476032653'
        },
        {
            icon: FaFacebookSquare,
            type: 'Facebook',
            info: 'https://www.facebook.com/laurencecsantos',
            description: 'Laurence Santos'
        },
        {
            icon: FaLinkedin,
            type: 'Linkedin',
            info: 'https://www.linkedin.com/in/laurence-santos-478a8a258/',
            description: 'Laurence Santos'
        }
    ]

    const handlelink = (data) => {
        switch (data?.type) {
          case 'Email':
            window.location = `mailto:${data?.info}`;
            break;
          case 'Phone Number':
            window.location = `tel:${data?.info}`;
            break;
          case 'Facebook':
            window.location = `${data?.info}`;
            break;
          case 'Linkedin':
            window.location = `${data?.info}`;
            break;
          default:
            break;
        }
      };

      const handleSubmit = () =>{
        axios.post('https://nodemailer-imko.vercel.app/send-email', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            subject: subject,
            message: message
        }).then(response=>{
            if(response.data=='Email sent successfully'){
                toast({
                    title: 'Success.',
                    description: "Your email has been sent.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                  })
            }
            else{
                toast({
                    title: 'Error.',
                    description: "Failed to send email.",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                  })
            }
        })
      }

    return ( 
        <Box
            py={'80px'}
            id={'contact'}
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
                    color={'#475b67'}
                    fontSize={['40px','40px','60px','60px','60px']} 
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
            <Form onSubmit={handleSubmit}>
                <Box
                    p={10}
                    bg={'#65737e'}
                    width={'fit-content'} 
                    borderRadius={'10px'}
                    height={'max-content'}
                >
                    <HStack>
                        <FormControl isRequired>
                            <FormLabel>First name:</FormLabel>
                            <Input
                                type={"text"}
                                bgColor={'white'}
                                onChange={(e)=>setFirstName(e.target.value)}
                            ></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Surname:</FormLabel>
                            <Input
                                type={"text"}
                                bgColor={'white'}
                                onChange={(e)=>setLastName(e.target.value)}
                            ></Input>
                        </FormControl>
                    </HStack>
                    <FormControl isRequired>
                        <FormLabel>Email:</FormLabel>
                        <Input
                            type={"text"}
                            bgColor={'white'}
                            onChange={(e)=>setEmail(e.target.value)}
                        ></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Subject:</FormLabel>
                        <Input
                            bgColor={'white'}
                            type={"text"}
                            onChange={(e)=>setSubject(e.target.value)}
                        ></Input>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Message:</FormLabel>
                        <Textarea
                            bgColor={'#FFF'}
                            placeholder="Enter your message..."
                            onChange={(e)=>setMessage(e.target.value)}
                        ></Textarea>
                    </FormControl>
                    <Flex
                        my={5}
                        justify={'center'}
                    >
                        <Button
                            color={'#FFF'}
                            width={'100%'}
                            type={'submit'}
                            fontSize={'20px'}
                            bgColor={'#343d46'}
                            _hover={{color: '#475767', bgColor: '#FFF'}}
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
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    flexDirection={['column','column','row','row','row']}
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
                            onClick={()=> handlelink(info)}
                            _hover={{
                                transform: 'translateY(-10px)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                                <Icon as={info.icon} boxSize={10}></Icon>
                                <Text
                                    textAlign={'center'}
                                >{info.type}</Text>
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