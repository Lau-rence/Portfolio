import { HStack, Text } from "@chakra-ui/react";

const Navbar = () => {
    const navbar = [
        {
            title: 'About Me'
        },
        {
            title: 'Experience'
        },
        {
            title: 'Projects'
        },
        {
            title: 'Contact Me'
        }
    ]
    return ( 
        <>
            <HStack justify={'end'}>
                {navbar.map(info=>(
                    <Text>{info.title}</Text>
                ))}
            </HStack>
        </>
     );
}
 
export default Navbar;