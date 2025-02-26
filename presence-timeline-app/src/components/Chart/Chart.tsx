import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Here is the display of the chart and the dates on the chart

interface ChartProps {
    chartArray: Date[];
}
const ChartRowDate = styled(Box)(() => ({
    position: 'absolute',
    top: '-12px',
    left:'-80px',

  }));

const Chart: React.FC<ChartProps> = ({chartArray}) => {
    return (
    <Box >
        {chartArray.map((date, index)=>{
            return(<Box key={`chartsectoin${index}`} sx={{ marginLeft:'90px',marginTop:'10px', position: 'relative', width: '100%', background: 'whitesmoke', minHeight: '50px' , borderTop: '1px solid gray'}}>
            <ChartRowDate>{ (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() }</ChartRowDate>
        </Box>)
        })
        }
    </Box>
    );
  };
  export default Chart;