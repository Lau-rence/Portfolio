import { Box, Flex, HStack, Text, Menu, MenuButton, Button, MenuList, MenuItem, Icon} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const navbar = [
        {
            title: 'About'
        },
        {
            title: 'Experience'
        },
        {
            title: 'Projects'
        },
        {
            title: 'Contact'
        }
    ]
    return (
        <>
            <Box
                py={3}
                color={'white'}
                pl={['20px', '50px', '100px', '100px', '100px']}
                pr={['15px', '15px', '15px', '15px', '100px']}
                display={'flex'}
                fontSize={'17px'}
                fontFamily={'Poppins'}
                backgroundColor={'#0a0a0a'}
                boxShadow={'2px 2px 2px black'}
                justifyContent={'space-between'}
            >
                <Flex
                    align={'center'}
                >
                    <Text
                        fontSize={'25px'}
                        fontFamily={'Nelsond'} 
                    >
                        Lau-rence
                    </Text>
                </Flex>
                <Flex
                    display={['flex','flex','flex','none','none']}
                    align={'center'}
                >  
                    <Menu>
                        <MenuButton cursor={'pointer'}>
                            <Icon
                                as={FiMenu}
                                boxSize={'30px'}
                                color={"white"}
                            />
                        </MenuButton>
                        <MenuList color={'#0a0a0a'} fontFamily={'Poppins'}>
                            {navbar.map(info=>(
                                <MenuItem>{info.title}</MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
                <HStack
                    justify={'end'}
                    display={['none', 'none', 'none', 'flex', 'flex']}
                >
                    {navbar.map(info=>(
                        <Box
                            p={3}
                            cursor={'pointer'}
                            borderRadius={'10px'}
                            _hover={{bgColor: '#FFF', color: '#0a0a0a'}}
                        >
                        <Text>
                            {info.title}
                        </Text>
                        </Box>
                    ))}
                </HStack>
            </Box>
        </>
     );
}
 
export default Navbar;