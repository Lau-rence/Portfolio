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
                py={5}
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
                    align={'end'}
                    fontSize={'25px'}
                    fontFamily={'Nelsond'} 
                >
                    <Text color={'#edb506'}>
                        &#8623;
                    </Text>
                    <Text>
                        Lau-rence
                    </Text>
                </Flex>
                <Flex
                    display={['flex','flex','flex','none','none']}
                    alignItems={'end'}
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
                    align={'end'}
                    justify={'end'}
                    display={['none', 'none', 'none', 'flex', 'flex']}
                >
                    {navbar.map(info=>(
                        <Box
                            display={'flex'}
                            height={'50px'}
                            alignItems={'end'}
                        >
                        <Text
                            px={5}
                            height={'50%'}
                            alignItems={'end'}
                            cursor={'pointer'}
                            _hover={{bgColor: '#FFF', color: '#0a0a0a'}}
                        >
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