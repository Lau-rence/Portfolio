import { Box, Text } from "@chakra-ui/react";
const Footer = () => {
    return ( 
        <Box
            width={'100%'} 
            height={'100px'} 
            display={'flex'} 
            bgColor={'#343d46'} 
            alignItems={'center'}
            justifyContent={'center'} 
        >
            <Text
                color={'white'}
                textAlign={'center'}
                fontFamily={'Poppins'}
                fontSize={['15px','15px','20px','20px','20px']}
            >
                © 2023 Laurence Santos.All Rights Reserved.
            </Text>
        </Box>
    );
}
 
export default Footer;