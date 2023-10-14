import { Box, Heading } from "@chakra-ui/react";

const Contact = () => {
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
        </Box>
     );
}
 
export default Contact;