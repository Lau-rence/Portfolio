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
            bgColor={'#475b67'} 
        >
            <Flex 
                pb={'30px'} 
                width={'100%'}
                justify={'center'} 
            >
                <Heading
                    color={'#FFF'} 
                    fontSize={'70px'}
                    fontFamily={'Bebas Neue'} 
                >
                    PROJECTS
                </Heading>
            </Flex>
                {projects.map(info=>(
                    <Box
                        pb={'30px'}
                        width={'100%'} 
                        display={'flex'} 
                        justifyContent={'center'}
                        flexDirection={['column','column','row','row','row']}
                    >
                        <VStack 
                            width={['100%','100%','50%','50%','50%']} 
                            justify={'center'}
                        >
                            <Box 
                                width={'80%'} 
                                color={'white'}
                                display={'flex'} 
                                flexDir={'column'} 
                                alignItems={'center'}
                                gap={3}
                                pb={3}
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
                                        color={'#FFF'}
                                        bgColor={'#343d46'} 
                                    >
                                        View
                                    </Button>
                                </a>
                            </Box>
                        </VStack>
                        <Box 
                            width={['100%','100%','50%','50%','50%']} 
                            display={'flex'} 
                            flexDir={'column'}
                            justifyContent={['center','center','start','start','start']}
                            alignItems={'center'}
                        >
                            <Image 
                                width={'80%'} 
                                src={info.pic} 
                                height={'auto'} 
                                borderRadius={'10px 10px 0px 0px'}
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