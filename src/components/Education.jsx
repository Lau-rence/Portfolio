import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaBitbucket, FaGit, FaChalkboard, FaPhp } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Education = () => {

    const skills = [
        { stack: 'HTML', icon: FaHtml5 },
        { stack: 'CSS', icon: FaCss3Alt },
        { stack: 'JavaScript', icon: FaJs },
        { stack: 'TypeScript', icon: FaJs },
        { stack: 'React JS', icon: FaReact },
        { stack: 'Node JS', icon: FaNodeJs },
        { stack: 'Express JS', icon: FaJs },
        { stack: 'Chakra UI', icon: FaChalkboard },
        { stack: 'MySQL', icon: FaDatabase },
        { stack: 'Git', icon: FaGit },
        { stack: 'Github', icon: FaGithub },
        { stack: 'Bitbucket', icon: FaBitbucket },
        { stack: 'C#', icon: FaPhp }
    ]

    return ( 
        <>
           <Box
                py={'50px'}
                width={'100%'}
                bgColor={'#FFF'}
                display={'flex'}
                alignItems={'center'}
                height={'max-content'}
                justifyContent={'center'}
            >
                <Box 
                    p={'20px'}
                    align={'center'}
                    display={'flex'}
                    justify={'center'}
                    flexDir={'column'}
                    bgColor={'#65737e'}
                    data-aos="fade-down"
                    borderRadius={'10px'}
                    height={"max-content"}
                    boxShadow={'2px 2px 4px black'} 
                    width={['95%','85%','80%','80%','80%']} 
                >
                    <Heading
                        fontSize={['30px','40px','50px','50px','50px']}
                        fontWeight={'bold'} 
                        fontFamily={'font2'}
                        color={'#FFF'}
                    >
                        TECH STACK
                    </Heading>
                    <Box
                        bgColor={'#FFF'}
                        width={'100%'}
                        height={'max-content'}
                        py={'10px'}
                        display={['none','none','none','block','block']}
                        fontFamily={'font2'}
                    >
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={7}
                            autoplay={{ delay: 700 }}
                        >
                            {skills.map(info=>(
                                <SwiperSlide>
                                    <Box>
                                        <Icon as={info.icon} boxSize={'50px'}></Icon>
                                        <Text>{info.stack}</Text>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                    <Box
                        bgColor={'#FFF'}
                        width={'100%'}
                        height={'max-content'}
                        py={'10px'}
                        display={['none','block','block','none','none']}
                    >
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={4}
                            autoplay={{ delay: 700 }}
                        >
                            {skills.map(info=>(
                                <SwiperSlide>
                                    <Box>
                                        <Icon as={info.icon} boxSize={'50px'}></Icon>
                                        <Text>{info.stack}</Text>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                    <Box
                        bgColor={'#FFF'}
                        width={'100%'}
                        height={'max-content'}
                        py={'10px'}
                        display={['block','none','none','none','none']}
                    >
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            autoplay={{ delay: 700 }}
                        >
                            {skills.map(info=>(
                                <SwiperSlide>
                                    <Box>
                                        <Icon as={info.icon} boxSize={'50px'}></Icon>
                                        <Text>{info.stack}</Text>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>
            </Box>
        </>
     );
}
 
export default Education;