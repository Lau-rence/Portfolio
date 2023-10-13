import { Box, Heading, Image, VStack, Button, Text } from "@chakra-ui/react";

const Projects = () => {

    const projects = [
        {
            pic: 'pokemon-app.png',
            title: 'Pokemon Universe',
            description: 'A website that displays the event and all the pokemon evolution.',
            link: 'https://lau-pokemon-app.netlify.app/pokemons'
        },
        {
            pic: 'npoc-app.png',
            title: 'Nolasco-Perez Optical Clinic System',
            description: 'An appointment and consultation management system for Nolasco-Perez Optical clinic.',
            link: 'https://npoc.netlify.app/'
        }
    ]
    return ( 
        <Box bgColor={'#e6e6e6'} width={'100%'} py={'100px'}>
            <Heading fontFamily={'Bebas Neue'} fontSize={'50px'} ml={'100px'}>PROJECTS</Heading>
            {projects.map(info=>(
                <Box width={'100%'} display={'flex'} justifyContent={'center'} pb={'30px'}>
                    <VStack>
                        <Text>{info.title}</Text>
                        <Text>{info.description}</Text>
                        <Button>View</Button>
                    </VStack>
                    <Image src={info.pic} width={'45%'} height={'auto'} borderRadius={'10px'}></Image>
                </Box>
            ))}
        </Box>
     );
}
 
export default Projects;