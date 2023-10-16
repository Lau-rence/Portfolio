import { Box, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const Loading = ({isOpen}) => {
    if(!isOpen) return null;
    return ( 
        <Box
            width={'100%'} 
            height={'100%'}
            position={'fixed'}
            top={0}
            bottom={0}
            right={0}
            left={0}
            zIndex={1}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
        >
            <Box height={'max-content'} width={'fit-content'} bgColor={'white'} borderRadius={'100%'}>
                <CircularProgress
                    size={'100px'} 
                    isIndeterminate 
                    color='blue'
                >
                    <CircularProgressLabel fontSize={'16px'}>Loading...</CircularProgressLabel>
                </CircularProgress>
            </Box>
        </Box>
     );
}
 
export default Loading;