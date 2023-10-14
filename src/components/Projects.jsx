import { Box, Heading, Image, VStack, Button, Text, Flex } from "@chakra-ui/react";

const Projects = () => {

    const projects = [
        {
            pic: 'npoc-app.png',
            title: 'Nolasco-Perez Optical Clinic System',
            link: 'https://npoc.netlify.app/',
            description: 'An appointment and consultation management system for Nolasco-Perez Optical clinic.',
        },
        {
            pic: 'pokemon-app.png',
            title: 'Pokemon Universe',
            link: 'https://lau-pokemon-app.netlify.app/',
            description: 'A website that displays the event and all the pokemon evolution.',
        },
    ]
    return ( 
        <Box
            py={'50px'}
            width={'100%'}
            id={'projects'}
            display={'flex'}
            bgColor={'#475b67'}
            alignItems={'center'}
            flexDirection={'column'}
        >
            <Flex 
                pb={'30px'} 
                width={'100%'}
                justify={'center'} 
            >
                <Heading
                    color={'#FFF'} 
                    fontSize={'70px'}
                    data-aos="fade-up"
                    fontFamily={'Bebas Neue'} 
                >
                    PROJECTS
                </Heading>
            </Flex>
                {projects.map(info=>(
                    <Box
                        mb={'30px'}
                        width={'80%'} 
                        display={'flex'} 
                        bgColor={'#343d46'}
                        borderRadius={'10px'}
                        justifyContent={'center'}
                        flexDirection={['column-reverse','column-reverse','row','row','row']}
                    >
                        <VStack 
                            justify={'center'}
                            width={['100%','100%','50%','50%','50%']} 
                        >
                            <Box 
                                gap={3}
                                width={'80%'} 
                                color={'white'}
                                display={'flex'} 
                                flexDir={'column'} 
                                alignItems={'center'}
                                pt={['0px','0px','20px','20px','0px']}
                                pb={['20px','20px','20px','20px','0px']}
                            >
                                <Heading 
                                    textAlign={'center'}
                                >
                                    {info.title}
                                </Heading>
                                <Text
                                    textAlign={'center'}
                                >
                                    {info.description}
                                </Text>
                                <a 
                                    href={info.link} 
                                    target={'_blank'}
                                >
                                    <Button 
                                        bgColor={'#FFF'}
                                        color={'#343d46'}
                                    >
                                        View
                                    </Button>
                                </a>
                            </Box>
                        </VStack>
                        <Box 
                            display={'flex'} 
                            flexDir={'column'}
                            alignItems={'center'}
                            width={['100%','100%','50%','50%','50%']} 
                            justifyContent={['center','center','start','start','start']}
                        >
                            <Image 
                                width={'100%'} 
                                src={info.pic} 
                                height={'auto'}
                                borderRadius={['10px 10px 0px 0px','10px 10px 0px 0px','0px 10px 0px 0px','0px 10px 0px 0px','0px 10px 0px 0px']}
                            />
                            <Box
                                width={'80%'}
                                height={'10px'} 
                                bgColor={'#343d46'} 
                            />
                        </Box>
                    </Box>
                ))}
        </Box>
     );
}
 
export default Projects;