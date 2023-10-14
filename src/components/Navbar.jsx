import { Box, Flex, HStack, Text, Menu, MenuButton, Button, MenuList, MenuItem, Icon} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";


const navbar = [
    {
        title: 'About',
        page: '#about'
    },
    {
        title: 'Experience',
        page: '#experience'
    },
    {
        title: 'Projects',
        page: '#projects'
    },
    {
        title: 'Contact',
        page: '#contact'
    }
]


const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        element.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <>
            <Box
                py={4}
                color={'#FFF'}
                pl={['20px', '50px', '100px', '100px', '100px']}
                pr={['15px', '15px', '15px', '15px', '100px']}
                display={'flex'}
                fontSize={'20px'}
                fontFamily={'Poppins'}
                backgroundColor={'#343d46'}
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
                                color={"c1c5ce"}
                            />
                        </MenuButton>
                        <MenuList color={'#343d46'} fontFamily={'Poppins'}>
                            {navbar.map(info=>(
                                <MenuItem onClick={()=>scrollToSection(info.page)}>{info.title}</MenuItem>
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
                            onClick={()=>scrollToSection(info.page)}
                        >
                        <Text
                            px={5}
                            height={'50%'}
                            alignItems={'end'}
                            cursor={'pointer'}
                            _hover={{bgColor: '#c1c5ce', color: '#343d46'}}
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