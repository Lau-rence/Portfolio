import { Box, Icon } from "@chakra-ui/react";
import { FaAngleDoubleUp } from "react-icons/fa";

import './AnimationBounce.css'
const GoToTop = ({isVisible}) => {

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    if(!isVisible) return null;
    return ( 
        <Box
            width={'100%'} 
            height={'max-content'}
            position={'fixed'}
            top={0}
            bottom={0}
            right={0}
            left={0}
            zIndex={1}
            display={'flex'}
            alignItems={'start'}
            justifyContent={'end'}
        >
            <Box
                p={0}
                m={2}
                bgColor={'#343d46'}
                width={'fit-content'} 
                height={'max-content'}
                borderRadius={'10px'}
                onClick={()=>handleScrollToTop()}
                animation={'bounce 2s infinite'}
            >
                <Icon 
                    as={FaAngleDoubleUp} 
                    boxSize={['50px','50px','75px','75px','75px']} 
                    color={'#FFF'}
                ></Icon>
            </Box>
        </Box>
     );
}
 
export default GoToTop;