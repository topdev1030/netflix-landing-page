// mui
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';


const BottomBorderBox = styled(Box)(() => ({
    borderBottom: `8px solid ${grey[900]}`
}))


export default BottomBorderBox;